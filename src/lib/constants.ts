// Content status workflow: draft → published → locked
export const CONTENT_STATUSES = ["draft", "published", "locked"] as const;
export type ContentStatus = (typeof CONTENT_STATUSES)[number];

// Challenge enums — match database schema
export const CHALLENGE_LEVELS = [
  "Elementary",
  "Middle School",
  "High School",
] as const;

export const CHALLENGE_TYPES = [
  "Arts & Writing",
  "STEM",
  "Business",
  "Civic Engagement",
] as const;

export const CHALLENGE_SKILLS = [
  "Collaboration",
  "Divergent Thinking",
  "Convergent Thinking",
  "Engineering Design",
  "Physical Dexterity",
  "Storycraft",
  "Character Acting",
  "Vocal Projection",
  "Creative Problem Solving",
  "Time Management",
  "Resource Management",
  "Presentation Flair",
] as const;

export const CHALLENGE_CORE_MECHANICS = [
  "One Handed",
  "Imposters",
  "Mystery Card",
  "Materials Shortage",
  "Investors Choice",
] as const;

export const TOURNAMENT_LEVELS = ["Practice", "Tournament"] as const;

export const SETUP_DIFFICULTIES = ["1", "2", "3", "4", "5"] as const;

export const MATERIAL_CATEGORIES = [
  "damaging",
  "non_damaging",
  "setup_only",
] as const;
