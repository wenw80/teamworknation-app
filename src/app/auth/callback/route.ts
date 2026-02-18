import { createClient } from "@/lib/supabase/server";
import { NextResponse } from "next/server";

/**
 * Auth callback handler for Supabase.
 * Handles OAuth redirects (Google) and email confirmation links.
 * Exchanges the auth code for a session, then redirects to the app.
 */
export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const redirect = searchParams.get("redirect") || "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      return NextResponse.redirect(`${origin}${redirect}`);
    }
  }

  // If code exchange failed or no code, redirect to verify-email with error
  return NextResponse.redirect(
    `${origin}/verify-email?error=Could not verify your account. Please try again.`
  );
}
