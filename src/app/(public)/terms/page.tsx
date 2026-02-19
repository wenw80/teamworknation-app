import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service - TeamworkNation",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">
        TeamworkNation Inc. &mdash; Terms of Service
      </h1>
      <p className="text-sm text-muted-foreground mb-4">
        Effective: March 18, 2025 | Last updated: September 12, 2025
      </p>

      <div className="bg-muted/50 border rounded-lg p-4 mb-8 text-sm">
        <p>
          This is a legal contract between you and TeamworkNation Inc. By
          creating an account, accessing, or using the Services, you agree to
          these Terms and to our{" "}
          <Link href="/privacy" className="underline">Privacy Policy</Link>.
          If you do not agree, do not use the Services.
        </p>
      </div>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_strong]:text-foreground">
        <section>
          <h2>1. Who We Are; Scope</h2>
          <p>
            The Services include our websites, web applications, curriculum,
            and programs. These Terms incorporate our{" "}
            <Link href="/privacy" className="underline">Privacy Policy</Link>,{" "}
            <Link href="/code-of-conduct" className="underline">Code of Conduct</Link>,{" "}
            <Link href="/dmca" className="underline">DMCA Policy</Link>,
            and program-specific rules.
          </p>
        </section>

        <section>
          <h2>2. Eligibility &amp; Accounts</h2>
          <p>
            You must be at least 13 years old. High-school mentors (13&ndash;17)
            must accept the Code of Conduct. You are responsible for your
            account security.
          </p>
        </section>

        <section>
          <h2>3. Acceptable Use</h2>
          <p>
            You may not use the Services for illegal activity, harmful content,
            bullying, fraud, security probing, reverse engineering, API abuse,
            data harvesting, advertising to minors, or malware distribution.
          </p>
        </section>

        <section>
          <h2>4. Mentor/Intern Code of Conduct</h2>
          <p>
            All mentors and interns must comply with our{" "}
            <Link href="/code-of-conduct" className="underline">Code of Conduct</Link>.
            Violations may result in suspension or termination.
          </p>
        </section>

        <section>
          <h2>5. Privacy and Data Usage</h2>
          <p>
            Our <Link href="/privacy" className="underline">Privacy Policy</Link>{" "}
            governs data collection and use. We use third-party services
            including Supabase, Google, and Stripe.
          </p>
        </section>

        <section>
          <h2>6. User Content; Licenses</h2>
          <p>
            You retain ownership of your content. You grant TeamworkNation a
            worldwide, non-exclusive, royalty-free license to host and display
            it. See our <Link href="/dmca" className="underline">DMCA Policy</Link>{" "}
            for copyright concerns.
          </p>
        </section>

        <section>
          <h2>7. Intellectual Property</h2>
          <p>
            TeamSparks!&trade; curriculum is owned by TeamworkNation.
            AI-assisted and volunteer contributions become TeamworkNation
            property. All rights not expressly granted are reserved.
          </p>
        </section>

        <section>
          <h2>8. Payments</h2>
          <p>
            Processed by Stripe. We do not store card data. Payments are
            non-refundable except within 30 days by contacting{" "}
            <a href="mailto:billing@teamworknation.org">billing@teamworknation.org</a>.
          </p>
        </section>

        <section>
          <h2>9. Donations</h2>
          <p>Voluntary, generally non-refundable. Receipts issued.</p>
        </section>

        <section>
          <h2>10. Schools &amp; Educational Use</h2>
          <p>
            We comply with SOPIPA and FERPA. No targeted ads or selling of
            student data.
          </p>
        </section>

        <section>
          <h2>11. School vs. Personal Accounts</h2>
          <p>
            School SSO accounts: FERPA applies. Personal accounts: user must
            be 13+, governed by these Terms.
          </p>
        </section>

        <section>
          <h2>12. Safety and Enforcement</h2>
          <p>
            We may suspend accounts, remove content, and report to law
            enforcement as necessary.
          </p>
        </section>

        <section>
          <h2>13. AI and Beta Features</h2>
          <p>
            Provided &ldquo;AS IS.&rdquo; May be inaccurate. Your private
            content is not used for model training.
          </p>
        </section>

        <section>
          <h2>14&ndash;15. Security &amp; Disclaimers</h2>
          <p>
            Reasonable safeguards employed; no absolute guarantee. THE SERVICES
            ARE PROVIDED &ldquo;AS IS&rdquo; WITHOUT WARRANTIES.
          </p>
        </section>

        <section>
          <h2>16. Limitation of Liability</h2>
          <p>
            No indirect/consequential damages. Total liability capped at the
            greater of $100 or 6 months of payments.
          </p>
        </section>

        <section>
          <h2>17. Indemnification</h2>
          <p>
            You indemnify TeamworkNation for claims arising from your content,
            violations, or misuse.
          </p>
        </section>

        <section>
          <h2>18. Governing Law; Disputes</h2>
          <p>
            California law. 30-day informal resolution via{" "}
            <a href="mailto:legal@teamworknation.org">legal@teamworknation.org</a>,
            then binding arbitration (AAA, Contra Costa County, CA). Class
            action waiver applies.
          </p>
        </section>

        <section>
          <h2>19&ndash;22. General Provisions</h2>
          <p>
            US-focused. We may modify Terms with notice. Either party may
            terminate. Entire agreement; severability; no assignment by user.
          </p>
        </section>

        <section>
          <h2>23. Contact</h2>
          <p>
            <a href="mailto:legal@teamworknation.org">legal@teamworknation.org</a>
            {" | "}
            <Link href="/contact" className="underline">teamworknation.org/contact</Link>
          </p>
        </section>
      </div>
    </div>
  );
}
