"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          <span className="text-yellow-500">Teamwork</span>
          <span className="text-green-600">Nation</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6">
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              About Us
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-popover border rounded-md shadow-md py-1 min-w-[160px]">
                <Link
                  href="/learn-more"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                >
                  Our Values
                </Link>
                <Link
                  href="/our-story"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                >
                  Our Story
                </Link>
                <Link
                  href="/team"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                >
                  Our Team
                </Link>
                <Link
                  href="/contact"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
          <div className="relative group">
            <button className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Get Involved
            </button>
            <div className="absolute top-full left-0 pt-2 hidden group-hover:block z-50">
              <div className="bg-popover border rounded-md shadow-md py-1 min-w-[160px]">
                <Link
                  href="/partner"
                  className="block px-4 py-2 text-sm hover:bg-accent"
                >
                  Partner With Us
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-2">
          <Button asChild size="sm" className="hidden md:flex">
            <Link href="/login">
              Member Portal <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <button
            className="md:hidden p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-2">
            <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              About Us
            </p>
            <Link
              href="/learn-more"
              className="block py-1 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Our Values
            </Link>
            <Link
              href="/our-story"
              className="block py-1 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Our Story
            </Link>
            <Link
              href="/team"
              className="block py-1 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Our Team
            </Link>
            <Link
              href="/contact"
              className="block py-1 text-sm"
              onClick={() => setMobileOpen(false)}
            >
              Contact Us
            </Link>
            <div className="border-t pt-2 mt-2">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Get Involved
              </p>
              <Link
                href="/partner"
                className="block py-1 text-sm"
                onClick={() => setMobileOpen(false)}
              >
                Partner With Us
              </Link>
            </div>
            <div className="pt-2">
              <Button asChild size="sm" className="w-full">
                <Link href="/login">
                  Member Portal <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
