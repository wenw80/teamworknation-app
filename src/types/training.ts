import type { ContentStatus } from "@/lib/constants";

export type TrainingSession = {
  id: number;
  name: string | null;
  description: string | null;
};

export type TrainingSessionVideo = {
  id: number;
  training_session_id: number;
  training_video_id: number;
  video_order: number | null;
  created_at: string;
  updated_at: string;
};

export type LessonPlan = {
  id: number;
  name: string | null;
  description: string | null;
  status: ContentStatus;
  locked_by: string | null;
  locked_at: string | null;
  created_at: string;
};

export type LessonSessionVideo = {
  id: number;
  lesson_plan_id: number;
  training_session_video_id: number;
  order_index: number | null;
  created_at: string;
  updated_at: string;
};

export type Program = {
  id: number;
  name: string | null;
  description: string | null;
  summary: string | null;
  image_url: string | null;
  age_groups: string | null;
  start_date: string | null;
  end_date: string | null;
  learn_more: string | null;
  created_at: string;
};

export type Event = {
  id: number;
  program_id: number | null;
  name: string | null;
  description: string | null;
  created_at: string;
};

export type EventLessonPlan = {
  id: number;
  event_id: number;
  lesson_plan_id: number;
};

export type HighSchoolMentor = {
  id: number;
  name: string | null;
  email: string | null;
  grade: string | null;
  shirt_size: string | null;
  di_experience: number | null;
  years_experience: string | null;
  specialized_skills: string | null;
  attendance: string | null;
  motivation: string | null;
  experience_notes: string | null;
  interest_area: string | null;
  instagram_followed: number | null;
  remind_joined: number | null;
  ai_generated_ic_preference_type: string | null;
  human_generated_ic_preference_type: string | null;
  created_at: string;
};
