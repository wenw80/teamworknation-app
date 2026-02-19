import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy - TeamworkNation",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">
        TeamworkNation Inc. &mdash; Privacy Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Effective: August 2025 | Last updated: September 12, 2025
      </p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_h3]:text-foreground [&_strong]:text-foreground">
        <section>
          <h2>1. Who We Are and Scope of This Policy</h2>
          <p>
            TeamworkNation Inc. (&ldquo;TeamworkNation,&rdquo; &ldquo;we,&rdquo;
            &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is a nonprofit organization
            that provides websites, applications, after-school enrichment and
            mentoring programs, and related services (collectively, the
            &ldquo;Services&rdquo;). This Privacy Policy describes how we
            collect, use, share, and protect personal information when you
            access or use our Services.
          </p>
          <p>
            Our Services are primarily designed for users in the United States.
            If you are outside the U.S., please see Section 10.
          </p>
        </section>

        <section>
          <h2>2. Personal Information We Collect</h2>
          <h3>A. Information You Provide</h3>
          <p>
            Identifiers and account data (name, email address, password, role
            selection), commercial information (donation history), content you
            submit (challenge responses, reviews, comments), and mentor
            eligibility/safety information.
          </p>
          <h3>B. Donations &amp; Payments</h3>
          <p>
            Donations are processed via Stripe. We do not store credit card
            numbers.
          </p>
          <h3>C. Automatically Collected Information</h3>
          <p>
            Device and usage data (browser type, OS, IP address, pages visited),
            and cookies as described in Section 6.
          </p>
          <h3>D. Information from Third Parties</h3>
          <p>
            SSO providers (e.g., Google OAuth) may share your name and email.
          </p>
        </section>

        <section>
          <h2>3. How We Use Personal Information</h2>
          <p>
            We use personal information to: provide and secure the Services;
            operate and improve the platform; communicate with you; ensure
            mentor/youth safety; personalize your experience; and comply with
            applicable law.
          </p>
        </section>

        <section>
          <h2>4. EEA/UK Notice</h2>
          <p>
            Our Services are not currently directed at users in the EEA or UK.
            Contact{" "}
            <a href="mailto:privacy@teamworknation.org">privacy@teamworknation.org</a>{" "}
            if applicable.
          </p>
        </section>

        <section>
          <h2>5. How We Share Information</h2>
          <p>
            We do not sell personal information. We may share with: service
            providers, organizational customers (e.g., schools), law enforcement
            when required, and in connection with business transfers. We may
            share aggregated or de-identified data.
          </p>
        </section>

        <section>
          <h2>6. Cookies, Authentication, and Tracking</h2>
          <p>
            We use essential authentication cookies, session state cookies,
            security cookies, and analytics cookies. We do not use cross-site
            tracking or sell data for advertising.
          </p>
        </section>

        <section>
          <h2>7. Data Security and Retention</h2>
          <p>
            We employ administrative, technical, and physical safeguards.
            Retention: account data 12&ndash;24 months post-closure; transaction
            records 7 years; analytics/logs 12&ndash;24 months; mentor/youth
            communications 12&ndash;18 months.
          </p>
        </section>

        <section>
          <h2>8. Students, Youth Participants, and Mentors</h2>
          <p>
            We do not knowingly collect data from children under 13 without
            parental consent. Mentor accounts require age 13+. We comply with
            SOPIPA and FERPA for K&ndash;12 contexts. Contact{" "}
            <a href="mailto:privacy@teamworknation.org">privacy@teamworknation.org</a>{" "}
            for COPPA rights.
          </p>
        </section>

        <section>
          <h2>9. Your Privacy Rights</h2>
          <p>
            You may request to access, correct, or delete your data; opt out of
            marketing; and opt out of sale/sharing (we do not sell data).
            Contact{" "}
            <a href="mailto:privacy@teamworknation.org">privacy@teamworknation.org</a>.
          </p>
        </section>

        <section>
          <h2>10. International Data Transfers</h2>
          <p>
            Data may be processed in the United States. We use Standard
            Contractual Clauses for EEA/UK transfers where applicable.
          </p>
        </section>

        <section>
          <h2>11. Do Not Track</h2>
          <p>
            We honor Global Privacy Control (GPC) signals where required by law.
          </p>
        </section>

        <section>
          <h2>12. Changes to This Policy</h2>
          <p>
            We may update this Policy and will indicate the &ldquo;Last
            updated&rdquo; date. Material changes will be communicated as
            required by law.
          </p>
        </section>

        <section>
          <h2>13. Contact Us</h2>
          <p>
            <a href="mailto:privacy@teamworknation.org">privacy@teamworknation.org</a>
            {" | "}
            <a href="mailto:info@teamworknation.org">info@teamworknation.org</a>
            {" | "}
            <Link href="/contact" className="underline">teamworknation.org/contact</Link>
          </p>
        </section>

        <p>
          See also:{" "}
          <Link href="/code-of-conduct" className="underline">
            Mentor/Intern Code of Conduct
          </Link>
        </p>
      </div>
    </div>
  );
}
