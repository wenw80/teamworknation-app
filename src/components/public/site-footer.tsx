import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t bg-muted/50">
      <div className="container py-12">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="font-bold text-lg">
              <span className="text-yellow-500">Teamwork</span>
              <span className="text-green-600">Nation</span>
            </h3>
            <p className="text-sm text-muted-foreground">
              Empowering youth to grow as leaders, collaborators, and life-long
              learners through team-based challenges, mentorship, and curriculum
              grounded in creativity, purpose, and community.
            </p>
          </div>

          {/* About Us */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">About Us</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/learn-more"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Our Values
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Our Team
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/partner"
                  className="text-muted-foreground hover:text-foreground"
                >
                  Partner With Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="font-semibold text-sm">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@teamworknation.org"
                  className="text-muted-foreground hover:text-foreground"
                >
                  info@teamworknation.org
                </a>
              </li>
              <li>
                <a
                  href="mailto:careers@teamworknation.org"
                  className="text-muted-foreground hover:text-foreground"
                >
                  careers@teamworknation.org
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-2 py-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} TeamworkNation. All rights
            reserved.
          </p>
          <div className="flex gap-4 text-xs">
            <Link
              href="/privacy"
              className="text-muted-foreground hover:text-foreground"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-muted-foreground hover:text-foreground"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
