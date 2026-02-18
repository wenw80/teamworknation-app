-- ============================================================
-- TeamworkNation Seed Data
-- Run after migrations to populate test data
-- ============================================================

-- NOTE: Test users should be created via the seed-users.ts script
-- (uses Supabase Admin API to set app_metadata.role).
-- This file seeds application data only.

-- ============================================================
-- Tags
-- ============================================================

INSERT INTO public.tags (name) VALUES
  ('DI'), ('Teamwork'), ('STEM'), ('Arts'), ('Writing'),
  ('Business'), ('Civic'), ('Elementary'), ('Middle School'), ('High School'),
  ('Indoor'), ('Outdoor'), ('Quick Setup'), ('Tournament Ready'), ('Practice')
ON CONFLICT (name) DO NOTHING;

-- ============================================================
-- Sources
-- ============================================================

INSERT INTO public.sources (type, url, file) VALUES
  ('web', 'https://teamworknation.org', 'manual_entry');

-- ============================================================
-- Sample Materials
-- ============================================================

INSERT INTO public.materials (name) VALUES
  ('Paper'), ('Tape'), ('Scissors'), ('Glue Stick'), ('Markers'),
  ('Cardboard'), ('String'), ('Rubber Bands'), ('Paper Clips'), ('Craft Sticks'),
  ('Straws'), ('Cups'), ('Aluminum Foil'), ('Cotton Balls'), ('Pipe Cleaners'),
  ('Index Cards'), ('Newspaper'), ('Plastic Bags'), ('Binder Clips'), ('Ruler')
ON CONFLICT DO NOTHING;
