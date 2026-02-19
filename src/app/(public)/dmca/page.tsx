import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "DMCA Policy - TeamworkNation",
};

export default function DmcaPage() {
  return (
    <div className="container mx-auto max-w-3xl py-16 px-4">
      <h1 className="text-4xl font-bold mb-2">
        Digital Millennium Copyright Act (&ldquo;DMCA&rdquo;) Policy
      </h1>
      <p className="text-sm text-muted-foreground mb-8">
        Last updated: September 12, 2025
      </p>

      <div className="prose prose-sm max-w-none space-y-8 text-muted-foreground [&_h2]:text-foreground [&_strong]:text-foreground">
        <p>
          TeamworkNation Inc. (&ldquo;TeamworkNation&rdquo;) respects
          intellectual property rights and will respond to valid DMCA notices
          in accordance with the Digital Millennium Copyright Act (17 U.S.C.
          &sect;512).
        </p>

        <section>
          <h2>Designated Agent for DMCA Notices</h2>
          <p>TeamworkNation Inc.</p>
          <p>
            Email:{" "}
            <a href="mailto:legal@teamworknation.org">
              legal@teamworknation.org
            </a>
          </p>
          <p>Subject Line: DMCA Takedown Request</p>
        </section>

        <section>
          <h2>Required Information (per 17 U.S.C. &sect;512(c)(3))</h2>
          <ol>
            <li>
              A physical or electronic signature of the copyright owner or
              authorized agent.
            </li>
            <li>
              Identification of the copyrighted work claimed to have been
              infringed.
            </li>
            <li>
              Identification of the material that is claimed to be infringing,
              with enough detail to locate it.
            </li>
            <li>Your contact information (address, phone, email).</li>
            <li>
              A statement that you have a good faith belief that the use is not
              authorized by the copyright owner, its agent, or the law.
            </li>
            <li>
              A statement, under penalty of perjury, that the information in the
              notification is accurate and that you are authorized to act on
              behalf of the copyright owner.
            </li>
          </ol>
        </section>

        <section>
          <h2>Our Response</h2>
          <p>
            Upon receiving a valid DMCA notice, we may remove or disable access
            to the allegedly infringing material. We may also terminate accounts
            of repeat infringers. A counter-notification process is available.
          </p>
        </section>

        <section>
          <h2>Repeat Infringers</h2>
          <p>
            We maintain a policy of terminating accounts of users who are
            subject to multiple valid DMCA notices. This applies to
            user-submitted material only, not TeamworkNation&apos;s own
            curriculum.
          </p>
        </section>

        <section>
          <h2>Counter-Notification (per 17 U.S.C. &sect;512(g))</h2>
          <p>If you believe material was removed in error, you may submit a counter-notification including:</p>
          <ol>
            <li>Your physical or electronic signature.</li>
            <li>
              Identification of the material that was removed and its prior
              location.
            </li>
            <li>
              A statement under penalty of perjury that you have a good faith
              belief the material was removed by mistake.
            </li>
            <li>
              Your name, address, and consent to the jurisdiction of the federal
              court in your district.
            </li>
          </ol>
          <p>
            We may restore the material unless the complaining party files a
            court action within 10&ndash;14 business days.
          </p>
        </section>

        <section>
          <h2>Related Policies</h2>
          <ul>
            <li>
              <Link href="/terms" className="underline">Terms of Service</Link>
            </li>
            <li>
              <Link href="/privacy" className="underline">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/code-of-conduct" className="underline">Code of Conduct</Link>
            </li>
          </ul>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            <a href="mailto:legal@teamworknation.org">
              legal@teamworknation.org
            </a>
            {" | "}
            <Link href="/contact" className="underline">
              teamworknation.org/contact
            </Link>
          </p>
        </section>
      </div>
    </div>
  );
}
