/**
 * Seed test users with roles into Supabase Auth.
 *
 * Usage:
 *   npx tsx scripts/seed-users.ts
 *
 * Requires environment variables:
 *   NEXT_PUBLIC_SUPABASE_URL
 *   SUPABASE_SERVICE_ROLE_KEY
 */

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  console.error(
    "Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY"
  );
  console.error("Set them in .env.local or export them before running.");
  process.exit(1);
}

const supabase = createClient(supabaseUrl, serviceRoleKey);

const TEST_USERS = [
  { role: "admin", email: "admin@teamworknation.org" },
  { role: "intern", email: "intern@teamworknation.org" },
  { role: "mentor", email: "mentor@teamworknation.org" },
  { role: "student", email: "student@teamworknation.org" },
  { role: "parent", email: "parent@teamworknation.org" },
  { role: "demoAdmin", email: "demoadmin@teamworknation.org" },
];

async function main() {
  console.log("Seeding test users...\n");

  for (const { role, email } of TEST_USERS) {
    const { data, error } = await supabase.auth.admin.createUser({
      email,
      password: "testpassword123",
      email_confirm: true,
      app_metadata: { role },
    });

    if (error) {
      if (error.message.includes("already been registered")) {
        console.log(`  [skip] ${email} (${role}) — already exists`);
      } else {
        console.error(`  [error] ${email} (${role}) — ${error.message}`);
      }
    } else {
      console.log(`  [created] ${email} (${role}) — id: ${data.user.id}`);
    }
  }

  console.log("\nDone. All test users use password: testpassword123");
}

main();
