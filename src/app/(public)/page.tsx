"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const STEAM_WORDS = [
  { letter: "T", word: "echnology" },
  { letter: "E", word: "ngineering" },
  { letter: "A", word: "rt" },
  { letter: "M", word: "ath" },
  { letter: "S", word: "cience" },
];

const SOFT_SKILLS = [
  { letter: "T", word: "eamwork" },
  { letter: "E", word: "mpathy" },
  { letter: "A", word: "ttitude" },
  { letter: "M", word: "entoring" },
  { letter: "S", word: "ervice" },
];

export default function LandingPage() {
  const [showSteam, setShowSteam] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => setShowSteam((prev) => !prev), 7000);
    return () => clearInterval(interval);
  }, []);

  const words = showSteam ? STEAM_WORDS : SOFT_SKILLS;

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-4rem)] items-center">
      {/* Left Panel */}
      <div className="flex-1 flex flex-col items-center justify-center gap-6 p-8 lg:p-16">
        <h1 className="text-5xl lg:text-6xl font-bold tracking-tight">
          <span className="text-yellow-500">Teamwork</span>
          <span className="text-green-600">Nation</span>
        </h1>
        <p className="text-xl text-muted-foreground text-center max-w-md">
          Where <strong>Teamwork</strong> meets Imagi
          <strong>Nation</strong>
        </p>
        <Button asChild size="lg">
          <Link href="/login">
            Sign In <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </div>

      {/* Right Panel */}
      <div className="flex-1 flex flex-col items-center justify-center p-8 lg:p-16 bg-muted/30">
        <p className="text-sm font-semibold uppercase tracking-widest text-muted-foreground mb-6">
          We&apos;re All About
        </p>
        <div
          className="transition-opacity duration-400"
          style={{ opacity: 1 }}
          key={showSteam ? "steam" : "soft"}
        >
          <ul className="space-y-3">
            {words.map(({ letter, word }) => (
              <li key={letter + word} className="text-3xl lg:text-4xl font-light">
                <span className="font-bold text-primary">{letter}</span>
                {word}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
