import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Code of Conduct - TeamworkNation",
};

export default function CodeOfConductPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-4">Mentor/Intern Code of Conduct</h1>

      <p className="text-muted-foreground mb-8">
        This Code applies to all high-school mentors/interns (ages 13&ndash;17)
        and any adult volunteers who interact with youth through TeamworkNation
        programs. It supplements the{" "}
        <Link href="/terms" className="underline">Terms of Service</Link> and{" "}
        <Link href="/privacy" className="underline">Privacy Policy</Link>.
        Participation requires accepting and following this Code at all times.
      </p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground">
        <section>
          <h2>1. Core Principles</h2>
          <ul>
            <li><strong>Safety first</strong> &mdash; The physical and emotional safety of all participants is the top priority.</li>
            <li><strong>Respect &amp; inclusion</strong> &mdash; Treat everyone with dignity regardless of background, ability, or identity.</li>
            <li><strong>Professional boundaries</strong> &mdash; Maintain appropriate boundaries with all participants.</li>
            <li><strong>Integrity</strong> &mdash; Be honest, reliable, and accountable.</li>
          </ul>
        </section>

        <section>
          <h2>2. Eligibility &amp; Onboarding</h2>
          <p>
            Mentors must be 13+. Parent/guardian acknowledgment is required for
            minors. All mentors must complete required training, use their real
            name, and sign this Code annually.
          </p>
        </section>

        <section>
          <h2>3. Communication &amp; Boundaries</h2>
          <p>
            Use program-approved channels only. If personal email is used,
            always CC a program adult or parent/guardian. No disappearing
            messages, no sensitive personal data. No private 1:1 DMs with youth
            on social media or personal texting apps. No personal social media
            friend/follow requests. Maintain professional tone during
            reasonable hours.
          </p>
        </section>

        <section>
          <h2>4. Meetings &amp; Events</h2>
          <p>
            Prefer group settings or two-adult visibility. No private
            one-on-one spaces. Use program-approved tools for virtual sessions.
            Consent required for recordings/photos; store in approved systems
            only.
          </p>
        </section>

        <section>
          <h2>5. Content Standards</h2>
          <p>
            Use age-appropriate materials only. No harassment, hate speech,
            bullying, sexual content, or illegal activity. No pressure regarding
            politics, religion, or personal beliefs. Respect copyright.
          </p>
        </section>

        <section>
          <h2>6. Data Protection &amp; Privacy</h2>
          <p>
            Protect participant information. No downloading, screenshotting, or
            re-sharing outside approved systems. Use strong passwords; no shared
            logins. Follow retention rules; no youth data on personal devices
            longer than necessary.
          </p>
        </section>

        <section>
          <h2>7. Safety Concerns &amp; Mandatory Reporting</h2>
          <p>
            If you become aware of self-harm, abuse, neglect, threats, or other
            safety risks: notify program staff at{" "}
            <a href="mailto:safety@teamworknation.org">safety@teamworknation.org</a>{" "}
            immediately. <strong>In emergencies, call 911 first.</strong> Do not
            investigate yourself. Preserve messages/evidence. Cooperate with
            investigations.
          </p>
        </section>

        <section>
          <h2>8. Conflicts of Interest &amp; Gifts</h2>
          <p>
            Disclose close personal ties with participants. No gifts over $25
            per year without program approval.
          </p>
        </section>

        <section>
          <h2>9. Consequences</h2>
          <p>
            Violations may result in removal from the program, account
            suspension or termination, and reports to schools or authorities
            as warranted.
          </p>
        </section>

        <section>
          <h2>10. Questions &amp; Reporting</h2>
          <p>
            When in doubt, ask your program lead or contact{" "}
            <a href="mailto:support@teamworknation.org">support@teamworknation.org</a>.
          </p>
        </section>

        <section>
          <h2>11. Acknowledgment</h2>
          <p>
            By participating as a mentor/intern, you agree to follow this Code.
            For mentors under 18, a parent/guardian acknowledgment may be
            required by the program.
          </p>
        </section>

        <p className="mt-8">
          <Link href="/privacy" className="underline">
            &larr; Back to Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
}
