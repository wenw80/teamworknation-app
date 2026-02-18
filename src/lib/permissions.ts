export type Role =
  | "admin"
  | "mentor"
  | "student"
  | "parent"
  | "demoAdmin"
  | "intern";

// Full RBAC permission map — ported from auth service
// Each key is a permission string, value is the list of roles that have it
export const PERMISSIONS: Record<string, Role[]> = {
  // Challenge Management
  view_challenge_library: [
    "admin",
    "mentor",
    "student",
    "parent",
    "demoAdmin",
    "intern",
  ],
  add_edit_challenges: ["admin", "demoAdmin", "intern"],
  delete_challenges: ["admin", "intern"],
  restore_challenges: ["admin", "intern"],
  view_challenge_reviews: [
    "admin",
    "mentor",
    "student",
    "parent",
    "demoAdmin",
    "intern",
  ],
  add_edit_challenge_reviews: ["admin", "demoAdmin", "intern"],
  delete_challenge_reviews: ["admin", "intern"],

  // Bookmarks
  manage_bookmarks: [
    "admin",
    "mentor",
    "student",
    "parent",
    "demoAdmin",
    "intern",
  ],

  // Training Videos
  view_training_videos: ["admin", "mentor", "demoAdmin", "intern"],
  add_edit_training_videos: ["admin", "intern"],
  delete_training_videos: ["admin", "intern"],

  // Training Sessions
  view_training_sessions: ["admin", "mentor", "demoAdmin", "intern"],
  add_edit_training_sessions: ["admin", "intern"],

  // Lesson Plans
  view_lesson_plans: ["admin", "mentor", "demoAdmin", "intern"],
  add_edit_lesson_plans: ["admin", "intern"],
  delete_lesson_plans: ["admin", "intern"],

  // Programs & Events
  view_all_programs: ["admin", "intern", "mentor", "student", "parent"],
  add_edit_programs: ["admin", "intern"],
  view_events: ["admin", "mentor", "intern"],
  add_edit_events: ["admin"],

  // AI Features
  openai_access: ["admin", "intern"],
  ai_challenge_generation: ["admin", "intern"],
  view_ai_challenges: ["admin", "intern"],

  // Dashboard & Admin
  view_dashboard: ["admin", "intern"],
  system_administration: ["admin"],
  manage_users: ["admin"],

  // Content Control
  publish_challenges: ["admin", "intern"],
  lock_challenges: ["admin"],
  publish_lesson_plans: ["admin", "intern"],
  lock_lesson_plans: ["admin"],

  // Proprietary Fields
  view_proprietary_fields: ["admin", "mentor", "intern"],

  // Curriculum
  curriculum_management: ["admin", "intern"],
};

export function hasPermission(role: Role, permission: string): boolean {
  return PERMISSIONS[permission]?.includes(role) ?? false;
}

export function getUserPermissions(role: Role): string[] {
  return Object.entries(PERMISSIONS)
    .filter(([, roles]) => roles.includes(role))
    .map(([perm]) => perm);
}
