import Link from "next/link";
import type { Metadata } from "next";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Atom,
  Pencil,
  Briefcase,
  Heart,
  Users,
  Sparkles,
  Calendar,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Partner With Us - TeamworkNation",
};

export default function PartnerPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 px-4 space-y-20">
      {/* Hero */}
      <section className="text-center space-y-8">
        <h1 className="text-4xl font-bold">
          Bring <span className="text-yellow-500">Teamwork</span>
          <span className="text-green-600">Nation</span> to Your Community
        </h1>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Atom, label: "STEM", desc: "Hands-on science and tech challenges." },
            { icon: Pencil, label: "Arts & Writing", desc: "Creative storytelling and design." },
            { icon: Briefcase, label: "Business", desc: "Entrepreneurial mindset and soft skills." },
            { icon: Heart, label: "Civic Engagement", desc: "Community problem-solving." },
          ].map(({ icon: Icon, label, desc }) => (
            <Card key={label}>
              <CardContent className="pt-6 text-center">
                <Icon className="h-8 w-8 mx-auto mb-3 text-primary" />
                <h3 className="font-semibold">{label}</h3>
                <p className="text-sm text-muted-foreground mt-1">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Button asChild>
          <Link href="/contact">
            Start a Conversation <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </section>

      {/* Partner Program */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Users className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our Partner Program</h2>
        </div>

        <p className="text-muted-foreground">
          We work with schools, after-school programs, community organizations,
          and enrichment providers to deliver hands-on, team-based challenges
          that build critical thinking, collaboration, and creativity.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Sparkles,
              title: "TeamSparks! Challenges",
              desc: "Access our library of ready-to-run challenges designed for all ages and skill levels.",
            },
            {
              icon: Users,
              title: "Training & Support",
              desc: "Comprehensive facilitator training and ongoing support to ensure successful implementation.",
            },
            {
              icon: Calendar,
              title: "Flexible Scheduling",
              desc: "Programs that fit your schedule\u2014from one-time events to semester-long curricula.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <Card key={title}>
              <CardHeader>
                <Icon className="h-6 w-6 text-primary mb-2" />
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="space-y-3">
          <h3 className="font-semibold text-lg">What Partners Receive</h3>
          <ul className="grid gap-2 sm:grid-cols-2">
            {[
              "Access to TeamSparks! Challenge Library",
              "Facilitator training materials and videos",
              "Materials lists and setup guides",
              "Student engagement tracking tools",
              "Dedicated partnership coordinator",
              "Customizable programs for your needs",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2 text-sm">
                <CheckCircle2 className="h-4 w-4 text-green-600 mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <Card className="bg-primary/5 border-primary/20">
          <CardContent className="pt-6 text-center space-y-3">
            <p className="font-semibold">
              Ready to bring TeamworkNation to your community?
            </p>
            <p className="text-sm text-muted-foreground">
              Let&apos;s discuss how we can create a program that fits your
              goals and audience.
            </p>
            <Button asChild>
              <Link href="/contact">
                Contact Us <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Coming Soon — Events */}
      <section className="space-y-8">
        <div className="flex items-center gap-3">
          <Calendar className="h-6 w-6 text-primary" />
          <h2 className="text-3xl font-bold">Our Own Events</h2>
          <span className="inline-flex items-center gap-1 text-xs bg-muted px-2 py-1 rounded-full">
            <Clock className="h-3 w-3" /> Coming Soon
          </span>
        </div>

        <p className="text-muted-foreground">
          We&apos;re excited to announce that we&apos;ll soon be hosting our
          own events! Work with us to determine the right format for your
          community.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: "One-Night STEAM Night",
              desc: "A single evening of hands-on challenges perfect for family engagement nights, school open houses, or community events. Great for introducing TeamworkNation to new audiences.",
            },
            {
              title: "Enrichment Program Integration",
              desc: "Partner with existing enrichment programs to add TeamworkNation challenges as a complementary offering. Perfect for after-school programs, summer camps, and youth organizations.",
            },
            {
              title: "Custom Events",
              desc: "Have something specific in mind? We\u2019ll work with you to design an event that meets your unique goals\u2014from corporate team-building to district-wide STEAM competitions.",
            },
          ].map(({ title, desc }) => (
            <Card key={title}>
              <CardHeader>
                <CardTitle className="text-lg">{title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-muted/50">
          <CardContent className="pt-6 text-center space-y-3">
            <p className="font-semibold">Interested in Hosting an Event?</p>
            <p className="text-sm text-muted-foreground">
              Get on our early interest list to be among the first to know when
              we launch our event programs.
            </p>
            <Button asChild variant="outline">
              <Link href="/contact">
                Express Interest <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Already a Partner */}
      <section className="text-center space-y-4 pb-8">
        <h2 className="text-2xl font-bold">Already a Partner?</h2>
        <p className="text-muted-foreground">
          Access your resources and manage your programs in the Member Portal.
        </p>
        <Button asChild variant="outline">
          <Link href="/login">
            Go to Member Portal <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </section>
    </div>
  );
}
