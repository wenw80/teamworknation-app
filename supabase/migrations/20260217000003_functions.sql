-- ============================================================
-- TeamworkNation Database Functions
-- Phase 2: Helper functions for complex operations
-- ============================================================

-- ============================================================
-- Material get-or-create
-- Used when saving challenge materials to avoid duplicates
-- ============================================================

CREATE OR REPLACE FUNCTION public.get_or_create_material(p_name TEXT)
RETURNS INTEGER AS $$
DECLARE
  mat_id INTEGER;
BEGIN
  SELECT material_id INTO mat_id FROM public.materials WHERE name = p_name;
  IF NOT FOUND THEN
    INSERT INTO public.materials (name) VALUES (p_name) RETURNING material_id INTO mat_id;
  END IF;
  RETURN mat_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- Challenge status transition
-- Enforces business rules: only admins can lock challenges
-- ============================================================

CREATE OR REPLACE FUNCTION public.update_challenge_status(
  p_challenge_id INTEGER,
  p_new_status public.content_status
) RETURNS VOID AS $$
BEGIN
  IF p_new_status = 'locked' AND public.user_role() NOT IN ('admin', 'intern') THEN
    RAISE EXCEPTION 'Only admins and interns can lock challenges';
  END IF;

  UPDATE public.challenges SET
    status = p_new_status,
    locked_by = CASE WHEN p_new_status = 'locked' THEN auth.uid() ELSE NULL END,
    locked_at = CASE WHEN p_new_status = 'locked' THEN NOW() ELSE NULL END
  WHERE id = p_challenge_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- Lesson plan status transition
-- Same pattern as challenges
-- ============================================================

CREATE OR REPLACE FUNCTION public.update_lesson_plan_status(
  p_lesson_plan_id INTEGER,
  p_new_status public.content_status
) RETURNS VOID AS $$
BEGIN
  IF p_new_status = 'locked' AND public.user_role() NOT IN ('admin', 'intern') THEN
    RAISE EXCEPTION 'Only admins and interns can lock lesson plans';
  END IF;

  UPDATE public.lesson_plans SET
    status = p_new_status,
    locked_by = CASE WHEN p_new_status = 'locked' THEN auth.uid() ELSE NULL END,
    locked_at = CASE WHEN p_new_status = 'locked' THEN NOW() ELSE NULL END
  WHERE id = p_lesson_plan_id;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- Soft delete / restore challenge
-- ============================================================

CREATE OR REPLACE FUNCTION public.soft_delete_challenge(p_challenge_id INTEGER)
RETURNS VOID AS $$
BEGIN
  IF public.user_role() NOT IN ('admin', 'intern') THEN
    RAISE EXCEPTION 'Only admins and interns can delete challenges';
  END IF;

  UPDATE public.challenges
  SET deleted_at = NOW()
  WHERE id = p_challenge_id AND deleted_at IS NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

CREATE OR REPLACE FUNCTION public.restore_challenge(p_challenge_id INTEGER)
RETURNS VOID AS $$
BEGIN
  IF public.user_role() NOT IN ('admin', 'intern') THEN
    RAISE EXCEPTION 'Only admins and interns can restore challenges';
  END IF;

  UPDATE public.challenges
  SET deleted_at = NULL
  WHERE id = p_challenge_id AND deleted_at IS NOT NULL;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- Toggle bookmark (upsert/delete pattern)
-- ============================================================

CREATE OR REPLACE FUNCTION public.toggle_bookmark(p_challenge_id INTEGER)
RETURNS BOOLEAN AS $$
DECLARE
  existing_id BIGINT;
BEGIN
  SELECT id INTO existing_id
  FROM public.user_bookmarks
  WHERE challenge_id = p_challenge_id AND user_id = auth.uid();

  IF FOUND THEN
    DELETE FROM public.user_bookmarks WHERE id = existing_id;
    RETURN false;  -- bookmark removed
  ELSE
    INSERT INTO public.user_bookmarks (challenge_id, user_id)
    VALUES (p_challenge_id, auth.uid());
    RETURN true;   -- bookmark added
  END IF;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- ============================================================
-- Get bookmark count for a challenge
-- ============================================================

CREATE OR REPLACE FUNCTION public.bookmark_count(p_challenge_id INTEGER)
RETURNS BIGINT AS $$
  SELECT COUNT(*) FROM public.user_bookmarks WHERE challenge_id = p_challenge_id;
$$ LANGUAGE sql STABLE SECURITY DEFINER;
