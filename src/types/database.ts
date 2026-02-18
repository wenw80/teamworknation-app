/**
 * Supabase Database Types
 *
 * NOTE: Once the Supabase project is linked, regenerate this file with:
 *   npx supabase gen types typescript --project-id YOUR_PROJECT_ID > src/types/database.ts
 *
 * This manual version matches the schema in supabase/migrations/20260217000001_schema.sql
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      challenges: {
        Row: {
          id: number;
          name: string | null;
          link: string | null;
          category: string | null;
          one_liner: string | null;
          level: Database["public"]["Enums"]["challenges_level_enum"] | null;
          type: Database["public"]["Enums"]["challenges_type_enum"] | null;
          tournament_level: Database["public"]["Enums"]["challenges_tournament_level_enum"] | null;
          core_mechanic: Database["public"]["Enums"]["challenges_core_mechanic_enum"] | null;
          setup_difficulty: Database["public"]["Enums"]["challenges_setup_difficulty_enum"] | null;
          has_materials: Database["public"]["Enums"]["challenges_has_materials_enum"] | null;
          skills: Database["public"]["Enums"]["challenges_skills_enum"] | null;
          variant: string | null;
          copyright: string | null;
          time_limits: Json | null;
          safety_flags: Json | null;
          scoring: Json | null;
          source_id: number | null;
          status: Database["public"]["Enums"]["content_status"];
          locked_by: string | null;
          locked_at: string | null;
          deleted_at: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          name?: string | null;
          link?: string | null;
          category?: string | null;
          one_liner?: string | null;
          level?: Database["public"]["Enums"]["challenges_level_enum"] | null;
          type?: Database["public"]["Enums"]["challenges_type_enum"] | null;
          tournament_level?: Database["public"]["Enums"]["challenges_tournament_level_enum"] | null;
          core_mechanic?: Database["public"]["Enums"]["challenges_core_mechanic_enum"] | null;
          setup_difficulty?: Database["public"]["Enums"]["challenges_setup_difficulty_enum"] | null;
          has_materials?: Database["public"]["Enums"]["challenges_has_materials_enum"] | null;
          skills?: Database["public"]["Enums"]["challenges_skills_enum"] | null;
          variant?: string | null;
          copyright?: string | null;
          time_limits?: Json | null;
          safety_flags?: Json | null;
          scoring?: Json | null;
          source_id?: number | null;
          status?: Database["public"]["Enums"]["content_status"];
          locked_by?: string | null;
          locked_at?: string | null;
          deleted_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          name?: string | null;
          link?: string | null;
          category?: string | null;
          one_liner?: string | null;
          level?: Database["public"]["Enums"]["challenges_level_enum"] | null;
          type?: Database["public"]["Enums"]["challenges_type_enum"] | null;
          tournament_level?: Database["public"]["Enums"]["challenges_tournament_level_enum"] | null;
          core_mechanic?: Database["public"]["Enums"]["challenges_core_mechanic_enum"] | null;
          setup_difficulty?: Database["public"]["Enums"]["challenges_setup_difficulty_enum"] | null;
          has_materials?: Database["public"]["Enums"]["challenges_has_materials_enum"] | null;
          skills?: Database["public"]["Enums"]["challenges_skills_enum"] | null;
          variant?: string | null;
          copyright?: string | null;
          time_limits?: Json | null;
          safety_flags?: Json | null;
          scoring?: Json | null;
          source_id?: number | null;
          status?: Database["public"]["Enums"]["content_status"];
          locked_by?: string | null;
          locked_at?: string | null;
          deleted_at?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "challenges_source_id_fkey";
            columns: ["source_id"];
            isOneToOne: false;
            referencedRelation: "sources";
            referencedColumns: ["id"];
          },
        ];
      };
      challenge_tags: {
        Row: {
          challenge_id: number;
          tag_id: number;
        };
        Insert: {
          challenge_id: number;
          tag_id: number;
        };
        Update: {
          challenge_id?: number;
          tag_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_tags_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenge_tags_tag_id_fkey";
            columns: ["tag_id"];
            isOneToOne: false;
            referencedRelation: "tags";
            referencedColumns: ["id"];
          },
        ];
      };
      challenge_materials: {
        Row: {
          id: number;
          challenge_id: number | null;
          material_id: number | null;
          quantity: string | null;
          units: string | null;
          category: Database["public"]["Enums"]["challenge_materials_category_enum"] | null;
        };
        Insert: {
          id?: number;
          challenge_id?: number | null;
          material_id?: number | null;
          quantity?: string | null;
          units?: string | null;
          category?: Database["public"]["Enums"]["challenge_materials_category_enum"] | null;
        };
        Update: {
          id?: number;
          challenge_id?: number | null;
          material_id?: number | null;
          quantity?: string | null;
          units?: string | null;
          category?: Database["public"]["Enums"]["challenge_materials_category_enum"] | null;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_materials_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenge_materials_material_id_fkey";
            columns: ["material_id"];
            isOneToOne: false;
            referencedRelation: "materials";
            referencedColumns: ["material_id"];
          },
        ];
      };
      challenge_reviews: {
        Row: {
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
        Insert: {
          id?: number;
          challenge_id: number;
          user_id: string;
          setup_rating?: number | null;
          difficulty_rating?: number | null;
          overall_rating?: number | null;
          comment?: string | null;
          created_at?: string;
          deleted_at?: string | null;
        };
        Update: {
          id?: number;
          challenge_id?: number;
          user_id?: string;
          setup_rating?: number | null;
          difficulty_rating?: number | null;
          overall_rating?: number | null;
          comment?: string | null;
          created_at?: string;
          deleted_at?: string | null;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_reviews_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
        ];
      };
      challenge_training_videos: {
        Row: {
          id: number;
          challenge_id: number;
          training_video_id: number;
          video_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          challenge_id: number;
          training_video_id: number;
          video_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          challenge_id?: number;
          training_video_id?: number;
          video_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "challenge_training_videos_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "challenge_training_videos_training_video_id_fkey";
            columns: ["training_video_id"];
            isOneToOne: false;
            referencedRelation: "training_videos";
            referencedColumns: ["id"];
          },
        ];
      };
      user_bookmarks: {
        Row: {
          id: number;
          challenge_id: number;
          user_id: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          challenge_id: number;
          user_id: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          challenge_id?: number;
          user_id?: string;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "user_bookmarks_challenge_id_fkey";
            columns: ["challenge_id"];
            isOneToOne: false;
            referencedRelation: "challenges";
            referencedColumns: ["id"];
          },
        ];
      };
      training_videos: {
        Row: {
          id: number;
          title: string;
          description: string | null;
          video_url: string;
          duration_seconds: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          title: string;
          description?: string | null;
          video_url: string;
          duration_seconds: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          title?: string;
          description?: string | null;
          video_url?: string;
          duration_seconds?: number;
          created_at?: string;
        };
        Relationships: [];
      };
      training_sessions: {
        Row: {
          id: number;
          name: string;
          description: string | null;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
        };
        Relationships: [];
      };
      training_session_videos: {
        Row: {
          id: number;
          training_session_id: number;
          training_video_id: number;
          video_order: number;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          training_session_id: number;
          training_video_id: number;
          video_order: number;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          training_session_id?: number;
          training_video_id?: number;
          video_order?: number;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "training_session_videos_training_session_id_fkey";
            columns: ["training_session_id"];
            isOneToOne: false;
            referencedRelation: "training_sessions";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "training_session_videos_training_video_id_fkey";
            columns: ["training_video_id"];
            isOneToOne: false;
            referencedRelation: "training_videos";
            referencedColumns: ["id"];
          },
        ];
      };
      lesson_plans: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          status: Database["public"]["Enums"]["content_status"];
          locked_by: string | null;
          locked_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          status?: Database["public"]["Enums"]["content_status"];
          locked_by?: string | null;
          locked_at?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          status?: Database["public"]["Enums"]["content_status"];
          locked_by?: string | null;
          locked_at?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      lesson_session_videos: {
        Row: {
          id: number;
          lesson_plan_id: number;
          training_session_video_id: number;
          order_index: number | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: number;
          lesson_plan_id: number;
          training_session_video_id: number;
          order_index?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: number;
          lesson_plan_id?: number;
          training_session_video_id?: number;
          order_index?: number | null;
          created_at?: string;
          updated_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "lesson_session_videos_lesson_plan_id_fkey";
            columns: ["lesson_plan_id"];
            isOneToOne: false;
            referencedRelation: "lesson_plans";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "lesson_session_videos_training_session_video_id_fkey";
            columns: ["training_session_video_id"];
            isOneToOne: false;
            referencedRelation: "training_session_videos";
            referencedColumns: ["id"];
          },
        ];
      };
      programs: {
        Row: {
          id: number;
          name: string;
          description: string | null;
          summary: string | null;
          image_url: string | null;
          age_groups: string | null;
          start_date: string | null;
          end_date: string | null;
          learn_more: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          name: string;
          description?: string | null;
          summary?: string | null;
          image_url?: string | null;
          age_groups?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          learn_more?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          name?: string;
          description?: string | null;
          summary?: string | null;
          image_url?: string | null;
          age_groups?: string | null;
          start_date?: string | null;
          end_date?: string | null;
          learn_more?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      events: {
        Row: {
          id: number;
          program_id: number;
          name: string;
          description: string | null;
          created_at: string;
        };
        Insert: {
          id?: number;
          program_id: number;
          name: string;
          description?: string | null;
          created_at?: string;
        };
        Update: {
          id?: number;
          program_id?: number;
          name?: string;
          description?: string | null;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "events_program_id_fkey";
            columns: ["program_id"];
            isOneToOne: false;
            referencedRelation: "programs";
            referencedColumns: ["id"];
          },
        ];
      };
      event_lesson_plans: {
        Row: {
          id: number;
          event_id: number;
          lesson_plan_id: number;
          created_at: string;
        };
        Insert: {
          id?: number;
          event_id: number;
          lesson_plan_id: number;
          created_at?: string;
        };
        Update: {
          id?: number;
          event_id?: number;
          lesson_plan_id?: number;
          created_at?: string;
        };
        Relationships: [
          {
            foreignKeyName: "event_lesson_plans_event_id_fkey";
            columns: ["event_id"];
            isOneToOne: false;
            referencedRelation: "events";
            referencedColumns: ["id"];
          },
          {
            foreignKeyName: "event_lesson_plans_lesson_plan_id_fkey";
            columns: ["lesson_plan_id"];
            isOneToOne: false;
            referencedRelation: "lesson_plans";
            referencedColumns: ["id"];
          },
        ];
      };
      high_school_mentors: {
        Row: {
          id: number;
          name: string | null;
          email: string | null;
          grade: string | null;
          shirt_size: string | null;
          di_experience: number | null;
          years_experience: number | null;
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
        Insert: {
          name?: string | null;
          email?: string | null;
          grade?: string | null;
          shirt_size?: string | null;
          di_experience?: number | null;
          years_experience?: number | null;
          specialized_skills?: string | null;
          attendance?: string | null;
          motivation?: string | null;
          experience_notes?: string | null;
          interest_area?: string | null;
          instagram_followed?: number | null;
          remind_joined?: number | null;
          ai_generated_ic_preference_type?: string | null;
          human_generated_ic_preference_type?: string | null;
          created_at?: string;
        };
        Update: {
          name?: string | null;
          email?: string | null;
          grade?: string | null;
          shirt_size?: string | null;
          di_experience?: number | null;
          years_experience?: number | null;
          specialized_skills?: string | null;
          attendance?: string | null;
          motivation?: string | null;
          experience_notes?: string | null;
          interest_area?: string | null;
          instagram_followed?: number | null;
          remind_joined?: number | null;
          ai_generated_ic_preference_type?: string | null;
          human_generated_ic_preference_type?: string | null;
          created_at?: string;
        };
        Relationships: [];
      };
      materials: {
        Row: {
          material_id: number;
          name: string;
        };
        Insert: {
          material_id?: number;
          name: string;
        };
        Update: {
          material_id?: number;
          name?: string;
        };
        Relationships: [];
      };
      sources: {
        Row: {
          id: number;
          type: string;
          url: string;
          file: string;
          crawled_date: string | null;
          created_by_date: string | null;
        };
        Insert: {
          id?: number;
          type: string;
          url: string;
          file: string;
          crawled_date?: string | null;
          created_by_date?: string | null;
        };
        Update: {
          id?: number;
          type?: string;
          url?: string;
          file?: string;
          crawled_date?: string | null;
          created_by_date?: string | null;
        };
        Relationships: [];
      };
      tags: {
        Row: {
          id: number;
          name: string;
        };
        Insert: {
          id?: number;
          name: string;
        };
        Update: {
          id?: number;
          name?: string;
        };
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: {
      user_role: {
        Args: Record<PropertyKey, never>;
        Returns: string;
      };
      get_or_create_material: {
        Args: { p_name: string };
        Returns: number;
      };
      update_challenge_status: {
        Args: { p_challenge_id: number; p_new_status: Database["public"]["Enums"]["content_status"] };
        Returns: undefined;
      };
      update_lesson_plan_status: {
        Args: { p_lesson_plan_id: number; p_new_status: Database["public"]["Enums"]["content_status"] };
        Returns: undefined;
      };
      soft_delete_challenge: {
        Args: { p_challenge_id: number };
        Returns: undefined;
      };
      restore_challenge: {
        Args: { p_challenge_id: number };
        Returns: undefined;
      };
      toggle_bookmark: {
        Args: { p_challenge_id: number };
        Returns: boolean;
      };
      bookmark_count: {
        Args: { p_challenge_id: number };
        Returns: number;
      };
    };
    Enums: {
      content_status: "draft" | "published" | "locked";
      challenges_level_enum: "Elementary" | "Middle School" | "High School";
      challenges_type_enum: "Arts & Writing" | "STEM" | "Business" | "Civic Engagement";
      challenges_core_mechanic_enum: "One Handed" | "Imposters" | "Mystery Card" | "Materials Shortage" | "Investors Choice";
      challenges_skills_enum:
        | "Collaboration"
        | "Divergent Thinking"
        | "Convergent Thinking"
        | "Engineering Design"
        | "Physical Dexterity"
        | "Storycraft"
        | "Character Acting"
        | "Vocal Projection"
        | "Creative Problem Solving"
        | "Time Management"
        | "Resource Management"
        | "Presentation Flair";
      challenges_setup_difficulty_enum: "1" | "2" | "3" | "4" | "5";
      challenges_tournament_level_enum: "Practice" | "Tournament";
      challenges_has_materials_enum: "yes" | "no";
      challenge_materials_category_enum: "damaging" | "non_damaging" | "setup_only";
    };
    CompositeTypes: Record<string, never>;
  };
};

// Helper types for Supabase client usage
export type Tables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Row"];
export type InsertTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Insert"];
export type UpdateTables<T extends keyof Database["public"]["Tables"]> =
  Database["public"]["Tables"][T]["Update"];
export type Enums<T extends keyof Database["public"]["Enums"]> =
  Database["public"]["Enums"][T];
