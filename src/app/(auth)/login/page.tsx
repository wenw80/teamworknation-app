"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function LoginPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Log in</CardTitle>
        <CardDescription>
          Sign in to your TeamworkNation account.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* TODO: Phase 5 — Login form with email/password + Google OAuth */}
        <p className="text-sm text-muted-foreground">Login form coming in Phase 5.</p>
      </CardContent>
    </Card>
  );
}
