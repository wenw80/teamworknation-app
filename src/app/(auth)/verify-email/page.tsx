"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function VerifyEmailPage() {
  const searchParams = useSearchParams();
  const error = searchParams.get("error");

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Verification Failed</CardTitle>
          <CardDescription>
            There was a problem verifying your email.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-destructive">{error}</p>
          <p className="mt-2 text-sm text-muted-foreground">
            Please try signing up again or contact support.
          </p>
        </CardContent>
        <CardFooter className="justify-center">
          <Link
            href="/signup"
            className="text-primary hover:underline text-sm"
          >
            Back to sign up
          </Link>
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl">Verify Your Email</CardTitle>
        <CardDescription>
          We&apos;ve sent a verification link to your email address.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Click the link in the email to verify your account. Once verified,
          you&apos;ll be able to log in.
        </p>
      </CardContent>
      <CardFooter className="justify-center">
        <Link href="/login" className="text-primary hover:underline text-sm">
          Back to login
        </Link>
      </CardFooter>
    </Card>
  );
}
