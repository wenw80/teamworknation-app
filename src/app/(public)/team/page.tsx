"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
const BOARD_MEMBERS = [
  {
    name: "Becky Chu",
    title: "CEO & President",
    bio: 'Founder of TeamworkNation. Seasoned technology executive whose career spans engineering leadership at Yahoo and Walmart Labs, Lockheed Martin, and, most recently, the role of Chief Technology Officer at IPShark. Becky pairs her tech pedigree with deep nonprofit service, spearheading district-wide STEAM initiatives, Destination Imagination programs, and PTA advocacy. She holds a B.A. in Molecular & Cell Biology from UC Berkeley and an M.Eng. in Computer Science from Cornell University.',
  },
  {
    name: "Aaron McDaniel",
    title: "Vice President",
    bio: "Co-founder and head of product of international business expansion platform Global Copilot. Seasoned business leader whose career spans corporate leadership at AT&T\u2014where he became one of the youngest Regional Vice Presidents\u2014to founding three companies that were acquired. Aaron pairs his global strategy expertise with a passion for education, co-authoring the Wall Street Journal and National Bestseller Global Class, and teaching entrepreneurship at UC Berkeley\u2019s Haas School of Business. He recently served as board chair of non-profit Create the Change and is a national advisory board member for AP Business Principles at The College Board. He holds a B.A. in Business Administration from UC Berkeley.",
  },
  {
    name: "Audrey Pao",
    title: "CFO & Treasurer",
    bio: "Audrey Pao spent more than a decade in the software industry as a software engineer before redirecting her talents toward family and community. A graduate of UC Irvine with a B.S. in Information & Computer Science, she now channels her problem-solving skills into nurturing her children\u2019s passions for music and sports and into hands-on service with local nonprofits.",
  },
  {
    name: "Sean Xiang Wu",
    title: "VP Programs",
    bio: "Xiang (Sean) Wu brings a scientific background to his passion for community service and youth mentorship. Holding a Ph.D. in Biochemistry and Molecular Biology, Sean spent more than a decade driving innovation in drug discovery within the pharmaceutical industry before co-founding Quintara Discovery, a company focused on drug discovery services, in 2012. Sean has been actively involved in numerous non-profit initiatives focused on strengthening local communities and fostering the next generation of thinkers. He has served as a Team Manager for Destination Imagination for more than 10 years, guiding and inspiring young students to develop creativity, teamwork, and problem-solving skills.",
  },
  {
    name: "Cathy Huang",
    title: "Secretary",
    bio: "Dr. Cathy Huang, a board-certified pediatrician, is passionate about caring for underserved communities. She has led medical missions abroad and served as community service chair at a megachurch in Southern California. More locally, she co-led efforts to bring Night to Shine sponsored by the Tim Tebow Foundation to our county and has served on the board of boys team charity. Currently a hospitalist at Contra Costa County, she continues to seek ways to build partnerships where community, faith, and life-giving endeavors for our youth intersect. She holds a B.A. in MCB-Genetics from UC Berkeley, M.D. from University of Pittsburgh, and residency from Cedars-Sinai/UCLA.",
  },
  {
    name: "Jason Chan",
    title: "Director of Education & Compliance",
    bio: "Experienced business leader/manager in biotech/pharmaceutical industry. Jason is currently involved in entrepreneurial ventures and teaching at two community colleges \u2014 Chemistry at Los Medanos College & Business at Diablo Valley College. He\u2019s passionate about opportunities to give back to our communities and to help develop our future leaders. He holds a B.S. in Bioengineering from UC Berkeley, an M.S.E. in Bioengineering from the University of Washington, and an M.B.A. from UC Irvine\u2019s Paul Merage School of Business.",
  },
  {
    name: "Wen Wei",
    title: "Director of Governance & Strategic Finance",
    bio: "Serial entrepreneur and startup executive with a track record of building and scaling companies across consumer, technology, and food sectors. Wen draws on a strong foundation in computer science and private equity to drive strategic growth, operational efficiency, and capital execution. He has led multiple M&A transactions for startups he co-founded, combining technical fluency with financial acumen. Outside of work, he\u2019s a dedicated volunteer soccer coach, committed to mentoring youth and giving back to his community. He holds a B.S. in Computer Science from UCLA and an M.Eng. in Computer Science from Cornell University.",
  },
];

function MemberCard({
  name,
  title,
  bio,
}: {
  name: string;
  title: string;
  bio: string;
}) {
  const [expanded, setExpanded] = useState(false);
  const truncated = bio.length > 250 ? bio.slice(0, 250) + "..." : bio;

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">{title}</p>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          {expanded ? bio : truncated}
        </p>
        {bio.length > 250 && (
          <Button
            variant="link"
            size="sm"
            className="px-0 mt-1"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less" : "Read More"}
          </Button>
        )}
      </CardContent>
    </Card>
  );
}

export default function TeamPage() {
  return (
    <div className="container mx-auto max-w-5xl py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Our Board of Directors</h1>
        <p className="text-lg text-muted-foreground">
          Meet the passionate individuals behind TeamworkNation
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {BOARD_MEMBERS.map((member) => (
          <MemberCard key={member.name} {...member} />
        ))}
      </div>
    </div>
  );
}
