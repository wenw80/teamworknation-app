-- ============================================================
-- TeamworkNation Schema Migration
-- Phase 2: Database schema for Supabase
-- ============================================================

-- ============================================================
-- ENUMS
-- ============================================================

CREATE TYPE public.content_status AS ENUM ('draft', 'published', 'locked');

CREATE TYPE public.challenges_level_enum AS ENUM ('Elementary', 'Middle School', 'High School');

CREATE TYPE public.challenges_type_enum AS ENUM ('Arts & Writing', 'STEM', 'Business', 'Civic Engagement');

CREATE TYPE public.challenges_core_mechanic_enum AS ENUM (
  'One Handed', 'Imposters', 'Mystery Card', 'Materials Shortage', 'Investors Choice'
);

CREATE TYPE public.challenges_skills_enum AS ENUM (
  'Collaboration', 'Divergent Thinking', 'Convergent Thinking',
  'Engineering Design', 'Physical Dexterity', 'Storycraft',
  'Character Acting', 'Vocal Projection', 'Creative Problem Solving',
  'Time Management', 'Resource Management', 'Presentation Flair'
);

CREATE TYPE public.challenges_setup_difficulty_enum AS ENUM ('1','2','3','4','5');

CREATE TYPE public.challenges_tournament_level_enum AS ENUM ('Practice', 'Tournament');

CREATE TYPE public.challenges_has_materials_enum AS ENUM ('yes', 'no');

CREATE TYPE public.challenge_materials_category_enum AS ENUM ('damaging', 'non_damaging', 'setup_only');

-- ============================================================
-- TABLES
-- ============================================================

-- Sources (challenge origin/provenance)
CREATE TABLE public.sources (
  id SERIAL PRIMARY KEY,
  type VARCHAR(255) NOT NULL,
  url VARCHAR(255) NOT NULL,
  file VARCHAR(255) NOT NULL,
  crawled_date TIMESTAMPTZ,
  created_by_date TIMESTAMPTZ DEFAULT NOW()
);

-- Tags
CREATE TABLE public.tags (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) UNIQUE NOT NULL
);

-- Materials
CREATE TABLE public.materials (
  material_id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

-- Challenges (core table)
CREATE TABLE public.challenges (
  id SERIAL PRIMARY KEY,
  name TEXT,
  link TEXT,
  category TEXT,
  one_liner TEXT,
  level public.challenges_level_enum,
  type public.challenges_type_enum,
  tournament_level public.challenges_tournament_level_enum,
  core_mechanic public.challenges_core_mechanic_enum,
  setup_difficulty public.challenges_setup_difficulty_enum,
  has_materials public.challenges_has_materials_enum DEFAULT 'no',
  skills public.challenges_skills_enum,
  variant TEXT,
  copyright TEXT,
  time_limits JSONB,
  safety_flags JSONB,
  scoring JSONB,
  source_id INTEGER REFERENCES public.sources(id),
  status public.content_status DEFAULT 'draft' NOT NULL,
  locked_by UUID REFERENCES auth.users(id),
  locked_at TIMESTAMPTZ,
  deleted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Challenge tags (many-to-many)
CREATE TABLE public.challenge_tags (
  challenge_id INTEGER NOT NULL REFERENCES public.challenges(id) ON DELETE CASCADE,
  tag_id INTEGER NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (challenge_id, tag_id)
);

-- Challenge materials (many-to-many with metadata)
CREATE TABLE public.challenge_materials (
  id SERIAL PRIMARY KEY,
  challenge_id INTEGER REFERENCES public.challenges(id) ON DELETE CASCADE,
  material_id INTEGER REFERENCES public.materials(material_id),
  quantity VARCHAR(255),
  units VARCHAR(255),
  category public.challenge_materials_category_enum
);

-- Challenge reviews (user-submitted)
CREATE TABLE public.challenge_reviews (
  id SERIAL PRIMARY KEY,
  challenge_id INTEGER NOT NULL REFERENCES public.challenges(id),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  setup_rating SMALLINT,
  difficulty_rating SMALLINT,
  overall_rating SMALLINT,
  comment TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  deleted_at TIMESTAMPTZ
);

-- User bookmarks
CREATE TABLE public.user_bookmarks (
  id BIGSERIAL PRIMARY KEY,
  challenge_id INTEGER NOT NULL REFERENCES public.challenges(id),
  user_id UUID NOT NULL REFERENCES auth.users(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Training videos
CREATE TABLE public.training_videos (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  video_url VARCHAR(512) NOT NULL,
  duration_seconds INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Challenge-training video links
CREATE TABLE public.challenge_training_videos (
  id SERIAL PRIMARY KEY,
  challenge_id INTEGER NOT NULL REFERENCES public.challenges(id),
  training_video_id INTEGER NOT NULL REFERENCES public.training_videos(id),
  video_order INTEGER DEFAULT 1 NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(challenge_id, training_video_id)
);

-- Training sessions
CREATE TABLE public.training_sessions (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT
);

-- Training session videos
CREATE TABLE public.training_session_videos (
  id SERIAL PRIMARY KEY,
  training_session_id INTEGER NOT NULL REFERENCES public.training_sessions(id),
  training_video_id INTEGER NOT NULL REFERENCES public.training_videos(id),
  video_order INTEGER NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lesson plans
CREATE TABLE public.lesson_plans (
  id SERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  status public.content_status DEFAULT 'draft' NOT NULL,
  locked_by UUID REFERENCES auth.users(id),
  locked_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Lesson session videos (links lesson plans to training session videos)
CREATE TABLE public.lesson_session_videos (
  id SERIAL PRIMARY KEY,
  lesson_plan_id INTEGER NOT NULL REFERENCES public.lesson_plans(id),
  training_session_video_id INTEGER NOT NULL REFERENCES public.training_session_videos(id),
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Programs
CREATE TABLE public.programs (
  id INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT,
  summary TEXT,
  image_url TEXT,
  age_groups VARCHAR(255),
  start_date DATE,
  end_date DATE,
  learn_more VARCHAR(512),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Events
CREATE TABLE public.events (
  id SERIAL PRIMARY KEY,
  program_id INTEGER NOT NULL REFERENCES public.programs(id),
  name VARCHAR(255) NOT NULL,
  description TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Event-lesson plan links
CREATE TABLE public.event_lesson_plans (
  id SERIAL PRIMARY KEY,
  event_id INTEGER NOT NULL REFERENCES public.events(id),
  lesson_plan_id INTEGER NOT NULL REFERENCES public.lesson_plans(id),
  created_at TIMESTAMPTZ DEFAULT NOW(),
  UNIQUE(event_id, lesson_plan_id)
);

-- High school mentors
CREATE TABLE public.high_school_mentors (
  id INTEGER GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) UNIQUE,
  grade VARCHAR(10),
  shirt_size VARCHAR(10),
  di_experience SMALLINT,
  years_experience INTEGER DEFAULT 0,
  specialized_skills TEXT,
  attendance TEXT,
  motivation TEXT,
  experience_notes TEXT,
  interest_area VARCHAR(200) DEFAULT '',
  instagram_followed SMALLINT,
  remind_joined SMALLINT,
  ai_generated_ic_preference_type VARCHAR(50),
  human_generated_ic_preference_type VARCHAR(50),
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- ============================================================
-- INDEXES
-- ============================================================

CREATE INDEX idx_challenges_status ON public.challenges(status);
CREATE INDEX idx_challenges_deleted_at ON public.challenges(deleted_at);
CREATE INDEX idx_challenges_name ON public.challenges(name);
CREATE INDEX idx_challenges_source_id ON public.challenges(source_id);
CREATE INDEX idx_challenges_category_level ON public.challenges(category, level);
CREATE INDEX idx_challenges_type_tournament ON public.challenges(type, tournament_level);
CREATE INDEX idx_challenges_locked_by ON public.challenges(locked_by);

CREATE INDEX idx_challenge_reviews_user ON public.challenge_reviews(user_id);
CREATE INDEX idx_challenge_reviews_challenge ON public.challenge_reviews(challenge_id);

CREATE INDEX idx_user_bookmarks_user ON public.user_bookmarks(user_id);
CREATE INDEX idx_user_bookmarks_challenge ON public.user_bookmarks(challenge_id);

CREATE INDEX idx_challenge_materials_challenge ON public.challenge_materials(challenge_id);
CREATE INDEX idx_challenge_materials_material ON public.challenge_materials(material_id);

CREATE INDEX idx_ctv_challenge ON public.challenge_training_videos(challenge_id);
CREATE INDEX idx_ctv_video ON public.challenge_training_videos(training_video_id);

CREATE INDEX idx_events_program ON public.events(program_id);

CREATE INDEX idx_lesson_plans_status ON public.lesson_plans(status);
CREATE INDEX idx_lesson_plans_locked_by ON public.lesson_plans(locked_by);

CREATE INDEX idx_lesson_session_videos_plan ON public.lesson_session_videos(lesson_plan_id);

CREATE INDEX idx_training_session_videos_session ON public.training_session_videos(training_session_id);
CREATE INDEX idx_training_session_videos_video ON public.training_session_videos(training_video_id);

-- ============================================================
-- TRIGGERS
-- ============================================================

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER challenges_updated_at
  BEFORE UPDATE ON public.challenges
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER user_bookmarks_updated_at
  BEFORE UPDATE ON public.user_bookmarks
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER challenge_training_videos_updated_at
  BEFORE UPDATE ON public.challenge_training_videos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER training_session_videos_updated_at
  BEFORE UPDATE ON public.training_session_videos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TRIGGER lesson_session_videos_updated_at
  BEFORE UPDATE ON public.lesson_session_videos
  FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();
