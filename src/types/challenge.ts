import type { ContentStatus } from "@/lib/constants";

export type Source = {
  id: number;
  type: string | null;
  url: string | null;
  file: string | null;
  crawled_date: string | null;
  created_by_date: string | null;
};

export type Tag = {
  id: number;
  name: string;
};

export type Material = {
  material_id: number;
  name: string;
};

export type ChallengeMaterial = {
  id: number;
  challenge_id: number;
  material_id: number;
  quantity: number | null;
  units: string | null;
  category: "damaging" | "non_damaging" | "setup_only" | null;
  material: Material;
};

export type ChallengeTrainingVideo = {
  id: number;
  challenge_id: number;
  training_video_id: number;
  video_order: number | null;
  training_video: TrainingVideo;
};

export type TrainingVideo = {
  id: number;
  title: string | null;
  description: string | null;
  video_url: string | null;
  duration_seconds: number | null;
  created_at: string;
};

export type ChallengeReview = {
  id: number;
  challenge_id: number;
  user_id: string;
  setup_rating: number | null;
  difficulty_rating: number | null;
  overall_rating: number | null;
  comment: string | null;
  created_at: string;
  deleted_at: string | null;
};

export type Challenge = {
  id: number;
  name: string | null;
  link: string | null;
  category: string | null;
  one_liner: string | null;
  level: "Elementary" | "Middle School" | "High School" | null;
  type: "Arts & Writing" | "STEM" | "Business" | "Civic Engagement" | null;
  tournament_level: "Practice" | "Tournament" | null;
  core_mechanic: string | null;
  setup_difficulty: "1" | "2" | "3" | "4" | "5" | null;
  has_materials: "yes" | "no" | null;
  skills: string[] | null;
  variant: string | null;
  copyright: string | null;
  time_limits: Record<string, unknown> | null;
  safety_flags: Record<string, unknown> | null;
  scoring: Record<string, unknown> | null;
  source_id: number | null;
  status: ContentStatus;
  locked_by: string | null;
  locked_at: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  // Relationships (populated via Supabase select joins)
  source?: Source | null;
  tags?: { tag: Tag }[];
  materials?: (ChallengeMaterial & { material: Material })[];
  training_videos?: (ChallengeTrainingVideo & {
    training_video: TrainingVideo;
  })[];
};

export type Bookmark = {
  id: number;
  challenge_id: number;
  user_id: string;
  created_at: string;
  updated_at: string;
};
