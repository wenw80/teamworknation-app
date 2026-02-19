import type { Metadata } from "next";
import { Target, Eye } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Our Values - TeamworkNation",
};

export default function LearnMorePage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4 space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Our Values</h1>
        <p className="text-lg text-muted-foreground">
          Building tomorrow&apos;s leaders through collaboration and creativity
        </p>
      </div>

      <Card>
        <CardContent className="pt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Target className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Our Mission</h2>
          </div>
          <p className="text-muted-foreground">
            Teamwork Nation empowers youth to grow as leaders, collaborators,
            and life-long learners through team-based challenges, mentorship,
            and curriculum grounded in creativity, purpose, and community.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6 space-y-3">
          <div className="flex items-center gap-3">
            <Eye className="h-6 w-6 text-primary" />
            <h2 className="text-2xl font-bold">Our Vision</h2>
          </div>
          <p className="text-muted-foreground">
            We imagine a world where every child knows their strengths, every
            parent and educator knows how to nurture them, and every community
            rises through purposeful collaboration.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
