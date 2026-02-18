-- ============================================================
-- TeamworkNation RLS Policies
-- Phase 2: Row Level Security for all tables
-- ============================================================

-- ============================================================
-- Helper function: extract role from JWT
-- ============================================================

CREATE OR REPLACE FUNCTION public.user_role()
RETURNS TEXT AS $$
  SELECT COALESCE(
    (current_setting('request.jwt.claims', true)::json->'app_metadata'->>'role'),
    'anonymous'
  );
$$ LANGUAGE sql STABLE SECURITY DEFINER;

-- ============================================================
-- Enable RLS on ALL tables
-- ============================================================

ALTER TABLE public.challenges ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_tags ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.challenge_training_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.user_bookmarks ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_sessions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.training_session_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.lesson_session_videos ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.programs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.event_lesson_plans ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.high_school_mentors ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.materials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.sources ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tags ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- CHALLENGES
-- ============================================================

-- Anonymous: read published, non-deleted challenges
CREATE POLICY "challenges_anon_read" ON public.challenges
  FOR SELECT
  USING (status = 'published' AND deleted_at IS NULL);

-- Authenticated: role-based read
CREATE POLICY "challenges_auth_read" ON public.challenges
  FOR SELECT TO authenticated
  USING (
    CASE public.user_role()
      WHEN 'admin' THEN true
      WHEN 'intern' THEN deleted_at IS NULL
      WHEN 'demoAdmin' THEN deleted_at IS NULL
      ELSE status = 'published' AND deleted_at IS NULL
    END
  );

-- Admin/intern/demoAdmin: insert
CREATE POLICY "challenges_auth_insert" ON public.challenges
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

-- Admin/intern/demoAdmin: update
CREATE POLICY "challenges_auth_update" ON public.challenges
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

-- Admin/intern: delete (soft delete via update, but also allow real delete)
CREATE POLICY "challenges_auth_delete" ON public.challenges
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- CHALLENGE TAGS
-- ============================================================

-- Anyone can read challenge tags (follows challenge visibility)
CREATE POLICY "challenge_tags_read" ON public.challenge_tags
  FOR SELECT
  USING (true);

-- Admin/intern/demoAdmin: write
CREATE POLICY "challenge_tags_insert" ON public.challenge_tags
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

CREATE POLICY "challenge_tags_delete" ON public.challenge_tags
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

-- ============================================================
-- CHALLENGE MATERIALS
-- ============================================================

-- Anyone can read challenge materials
CREATE POLICY "challenge_materials_read" ON public.challenge_materials
  FOR SELECT
  USING (true);

-- Admin/intern/demoAdmin: write
CREATE POLICY "challenge_materials_insert" ON public.challenge_materials
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

CREATE POLICY "challenge_materials_update" ON public.challenge_materials
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

CREATE POLICY "challenge_materials_delete" ON public.challenge_materials
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'demoAdmin', 'intern'));

-- ============================================================
-- CHALLENGE TRAINING VIDEOS
-- ============================================================

-- Authenticated: read
CREATE POLICY "ctv_auth_read" ON public.challenge_training_videos
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "ctv_auth_insert" ON public.challenge_training_videos
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "ctv_auth_update" ON public.challenge_training_videos
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "ctv_auth_delete" ON public.challenge_training_videos
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- BOOKMARKS
-- ============================================================

-- Users can read all bookmarks (needed for aggregate counts)
CREATE POLICY "bookmarks_read_all" ON public.user_bookmarks
  FOR SELECT TO authenticated
  USING (true);

-- Users manage their own bookmarks
CREATE POLICY "bookmarks_insert_own" ON public.user_bookmarks
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

CREATE POLICY "bookmarks_update_own" ON public.user_bookmarks
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "bookmarks_delete_own" ON public.user_bookmarks
  FOR DELETE TO authenticated
  USING (user_id = auth.uid());

-- ============================================================
-- REVIEWS
-- ============================================================

-- Authenticated: read non-deleted reviews (admin/intern see deleted too)
CREATE POLICY "reviews_auth_read" ON public.challenge_reviews
  FOR SELECT TO authenticated
  USING (deleted_at IS NULL OR public.user_role() IN ('admin', 'intern'));

-- Authenticated: insert own reviews
CREATE POLICY "reviews_insert_own" ON public.challenge_reviews
  FOR INSERT TO authenticated
  WITH CHECK (user_id = auth.uid());

-- Users can soft-delete own reviews; admin/intern can soft-delete any
CREATE POLICY "reviews_update" ON public.challenge_reviews
  FOR UPDATE TO authenticated
  USING (user_id = auth.uid() OR public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- TRAINING VIDEOS
-- ============================================================

-- Authenticated: read all
CREATE POLICY "training_videos_auth_read" ON public.training_videos
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "training_videos_auth_insert" ON public.training_videos
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "training_videos_auth_update" ON public.training_videos
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "training_videos_auth_delete" ON public.training_videos
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- TRAINING SESSIONS
-- ============================================================

-- Authenticated: read all
CREATE POLICY "training_sessions_auth_read" ON public.training_sessions
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "training_sessions_auth_insert" ON public.training_sessions
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "training_sessions_auth_update" ON public.training_sessions
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "training_sessions_auth_delete" ON public.training_sessions
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- TRAINING SESSION VIDEOS
-- ============================================================

-- Authenticated: read all
CREATE POLICY "tsv_auth_read" ON public.training_session_videos
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "tsv_auth_insert" ON public.training_session_videos
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "tsv_auth_update" ON public.training_session_videos
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "tsv_auth_delete" ON public.training_session_videos
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- LESSON PLANS
-- ============================================================

-- Authenticated: read all
CREATE POLICY "lesson_plans_auth_read" ON public.lesson_plans
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "lesson_plans_auth_insert" ON public.lesson_plans
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "lesson_plans_auth_update" ON public.lesson_plans
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "lesson_plans_auth_delete" ON public.lesson_plans
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- LESSON SESSION VIDEOS
-- ============================================================

-- Authenticated: read all
CREATE POLICY "lsv_auth_read" ON public.lesson_session_videos
  FOR SELECT TO authenticated
  USING (true);

-- Admin/intern: write
CREATE POLICY "lsv_auth_insert" ON public.lesson_session_videos
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "lsv_auth_update" ON public.lesson_session_videos
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "lsv_auth_delete" ON public.lesson_session_videos
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- ============================================================
-- PUBLIC TABLES: Programs, Events, Tags, Mentors, Materials, Sources
-- ============================================================

-- Programs: public read, admin/intern write
CREATE POLICY "programs_public_read" ON public.programs
  FOR SELECT USING (true);

CREATE POLICY "programs_auth_insert" ON public.programs
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "programs_auth_update" ON public.programs
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "programs_auth_delete" ON public.programs
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- Events: public read, admin/intern write
CREATE POLICY "events_public_read" ON public.events
  FOR SELECT USING (true);

CREATE POLICY "events_auth_insert" ON public.events
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "events_auth_update" ON public.events
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "events_auth_delete" ON public.events
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- Event lesson plans: authenticated read, admin/intern write
CREATE POLICY "elp_auth_read" ON public.event_lesson_plans
  FOR SELECT TO authenticated
  USING (true);

CREATE POLICY "elp_auth_insert" ON public.event_lesson_plans
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "elp_auth_delete" ON public.event_lesson_plans
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- Tags: public read, admin/intern write
CREATE POLICY "tags_public_read" ON public.tags
  FOR SELECT USING (true);

CREATE POLICY "tags_auth_insert" ON public.tags
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "tags_auth_update" ON public.tags
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "tags_auth_delete" ON public.tags
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- High school mentors: public read, admin/intern write
CREATE POLICY "mentors_public_read" ON public.high_school_mentors
  FOR SELECT USING (true);

CREATE POLICY "mentors_auth_insert" ON public.high_school_mentors
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "mentors_auth_update" ON public.high_school_mentors
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "mentors_auth_delete" ON public.high_school_mentors
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- Materials: public read, admin/intern write
CREATE POLICY "materials_public_read" ON public.materials
  FOR SELECT USING (true);

CREATE POLICY "materials_auth_insert" ON public.materials
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "materials_auth_update" ON public.materials
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "materials_auth_delete" ON public.materials
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

-- Sources: public read, admin/intern write
CREATE POLICY "sources_public_read" ON public.sources
  FOR SELECT USING (true);

CREATE POLICY "sources_auth_insert" ON public.sources
  FOR INSERT TO authenticated
  WITH CHECK (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "sources_auth_update" ON public.sources
  FOR UPDATE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));

CREATE POLICY "sources_auth_delete" ON public.sources
  FOR DELETE TO authenticated
  USING (public.user_role() IN ('admin', 'intern'));
