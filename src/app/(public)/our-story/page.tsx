import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Story - TeamworkNation",
};

export default function OurStoryPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-8">Our Story</h1>

      <div className="prose prose-lg max-w-none space-y-6 text-muted-foreground">
        <p>
          TeamworkNation is a nonprofit platform empowering youth to grow as
          leaders, collaborators, and lifelong learners through team-based
          challenges rooted in creativity, purpose, and community.
        </p>

        <p>
          Founded by Becky Chu — a Silicon Valley technology leader with
          experience at Yahoo, Lockheed Martin, WalmartLabs, and as former CTO
          of a tech startup focused on intellectual property and applied AI —
          TeamworkNation began with a deeply personal question:
        </p>

        <blockquote className="border-l-4 border-primary pl-4 italic text-foreground">
          &ldquo;How can we prepare our children for a future that demands not
          just knowledge, but collaboration, creativity, and adaptability — a
          new way of thinking?&rdquo;
        </blockquote>

        <p>
          Inspired by her children&apos;s experience on a Destination
          Imagination team called &ldquo;One Spot, Two Spot, Red Spot, Blue
          Spot,&rdquo; Becky saw that the same team dynamics she&apos;d led in
          Silicon Valley — brainstorming under pressure, role negotiation,
          handling failure — were already present among third graders. These
          weren&apos;t soft skills, they were survival skills. And yet in the
          workforce, companies rely on 10+ rounds of interviews to evaluate
          something that test scores can&apos;t measure. The straight-A student
          or Ivy League grad isn&apos;t always the best teammate. If we wait
          until adulthood to teach real collaboration, we&apos;ve waited too
          long.
        </p>

        <p>
          That realization led to the creation of On-the-Spot Challenges —
          original, fast-paced, team-based activities drawing from STEAM
          competitions, business simulations, civic engagement, and research
          storytelling. These challenges help students build leadership, think
          across disciplines, and solve real-world problems within a team, using
          everyday materials and emerging technologies — fundamental components
          that AI cannot replace.
        </p>

        <p>
          That same team, now high schoolers, remains at the heart of
          TeamworkNation, helping lead a growing network of students across age
          groups. At the core of the platform is its Youth Advisory Board and AI
          Innovation Lab: a student-driven program where middle schoolers, high
          schoolers, and college students analyze team-based learning models and
          use AI to co-create new curriculum. Students serve not just as
          participants, but as researchers, creators, and architects of the
          program itself.
        </p>

        <p>
          Grassroots partnerships with schools and local communities have
          already demonstrated the impact of this model in real classrooms.
          We&apos;re excited to build on this momentum, not just to scale what
          works, but to co-create a modern vision for education with like-minded
          partners.
        </p>

        <p className="text-foreground font-semibold text-xl mt-8">
          At TeamworkNation, students don&apos;t just prepare for the future —
          they help build it.
        </p>
      </div>
    </div>
  );
}
