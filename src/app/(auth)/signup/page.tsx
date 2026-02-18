"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function SignupPage() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Create Account</CardTitle>
        <CardDescription>
          Join TeamworkNation to access challenges, training, and programs.
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* TODO: Phase 5 — Signup form with role selection */}
        <p className="text-sm text-muted-foreground">Signup form coming in Phase 5.</p>
      </CardContent>
    </Card>
  );
}
