import { createClient } from "@/lib/supabase/server";
import { supabaseAdmin } from "@/lib/supabase/admin";
import { NextResponse } from "next/server";

/**
 * GET /api/auth/age-verification
 * Returns the current user's age verification status.
 */
export async function GET() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json({
    is_over_13: user.user_metadata?.is_over_13 ?? null,
    age_verified_at: user.user_metadata?.age_verified_at ?? null,
  });
}

/**
 * POST /api/auth/age-verification
 * Records the user's age verification (COPPA compliance).
 * Expects: { is_over_13: boolean }
 */
export async function POST(request: Request) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { is_over_13 } = await request.json();

  if (typeof is_over_13 !== "boolean") {
    return NextResponse.json(
      { error: "is_over_13 must be a boolean" },
      { status: 400 }
    );
  }

  const ip = request.headers.get("x-forwarded-for") || "unknown";

  const { error } = await supabaseAdmin.auth.admin.updateUserById(user.id, {
    user_metadata: {
      ...user.user_metadata,
      is_over_13,
      age_verified_at: new Date().toISOString(),
      age_verification_ip: ip,
    },
  });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ is_over_13 });
}
