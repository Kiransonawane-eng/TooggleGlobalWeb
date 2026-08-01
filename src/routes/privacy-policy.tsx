import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { LegalBody, LegalSection } from "@/components/site/legal";
import { COMPANY } from "@/data/site";

const title = "Privacy Policy — Tooggle Global Apps & Services";
const description =
  "Tooggle Global privacy policy covering data we collect in our Android applications and services, how it is used, shared, stored, and your rights and choices.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description="This policy explains how Tooggle Global collects, uses and protects personal information across our websites, Android applications and enterprise services."
      />
      <LegalBody updated="Last updated: 1 January 2025">
        <LegalSection title="1. Introduction">
          <p>
            Tooggle Global ("Tooggle Global", "we", "us" or "our") builds Android applications, enterprise
            software and cloud platforms. This Privacy Policy applies to our website
            {" "}{COMPANY.website}, to the mobile applications we publish on Google Play, and to the
            services we operate for our customers. By using our applications or services you agree to the
            practices described here.
          </p>
        </LegalSection>
        <LegalSection title="2. Information We Collect">
          <ul>
            <li>
              <strong>Information you provide:</strong> name, email address, phone number, company name,
              billing details, support requests and any content you submit through forms or in-app features.
            </li>
            <li>
              <strong>Account and authentication data:</strong> credentials, profile details and access
              roles required to operate your account.
            </li>
            <li>
              <strong>Device and log data:</strong> device model, operating system version, unique device
              identifiers, app version, crash logs, diagnostic data, IP address and timestamps.
            </li>
            <li>
              <strong>Usage data:</strong> features used, screens viewed, session duration and interaction
              events, collected to improve reliability and usability.
            </li>
            <li>
              <strong>Optional permissions:</strong> camera (barcode and document scanning), storage or
              media (uploading invoices, prescriptions and images), location (store, delivery and
              temple-locator features), notifications and contacts, each requested only when the related
              feature is used and only with your consent. You may revoke permissions at any time in your
              device settings.
            </li>
            <li>
              <strong>Transaction data:</strong> order, billing, donation or payment references processed
              through our payment partners. We do not store complete card numbers.
            </li>
          </ul>
        </LegalSection>
        <LegalSection title="3. How We Use Information">
          <ul>
            <li>To provide, operate, maintain and improve our applications and services.</li>
            <li>To authenticate users, secure accounts and prevent fraud or abuse.</li>
            <li>To process transactions, invoices, subscriptions and donations.</li>
            <li>To deliver customer support and respond to enquiries.</li>
            <li>To send service notifications and, where permitted, product updates.</li>
            <li>To analyse performance, diagnose crashes and enhance features.</li>
            <li>To comply with legal, tax and regulatory obligations.</li>
          </ul>
        </LegalSection>
        <LegalSection title="4. Legal Bases for Processing">
          <p>
            Where applicable law requires a legal basis, we rely on your consent, the performance of a
            contract with you, our legitimate interests in operating and securing our services, and
            compliance with legal obligations.
          </p>
        </LegalSection>
        <LegalSection title="5. Sharing and Disclosure">
          <p>
            We do not sell personal information. We share information only with: service providers who host,
            analyse or support our platforms (such as cloud hosting, analytics, crash reporting, payment and
            communication providers) under contractual confidentiality obligations; the business customer who
            operates the application you are using; and authorities where disclosure is required by law or to
            protect rights and safety. In a merger, acquisition or asset transfer, information may be
            transferred subject to this policy.
          </p>
        </LegalSection>
        <LegalSection title="6. Third-Party Services">
          <p>
            Our applications may use third-party services including Google Play Services, Firebase
            (authentication, cloud messaging, analytics and crash reporting), cloud infrastructure providers
            and payment gateways. These providers process data in accordance with their own privacy policies.
          </p>
        </LegalSection>
        <LegalSection title="7. Data Retention">
          <p>
            We retain personal information only for as long as necessary to provide the services, to comply
            with legal, accounting or reporting requirements, and to resolve disputes. When data is no longer
            required it is deleted or irreversibly anonymised.
          </p>
        </LegalSection>
        <LegalSection title="8. Data Security">
          <p>
            We apply industry-standard safeguards including encryption in transit, access controls,
            role-based permissions, audit logging and regular security reviews. No method of transmission or
            storage is completely secure, and we cannot guarantee absolute security.
          </p>
        </LegalSection>
        <LegalSection title="9. Children's Privacy">
          <p>
            Our applications are not directed to children under 13 (or the minimum age required in your
            jurisdiction). We do not knowingly collect personal information from children. If we learn that
            such data has been collected, we will delete it promptly.
          </p>
        </LegalSection>
        <LegalSection title="10. Your Rights and Choices">
          <p>
            Subject to applicable law you may request access to, correction of, or deletion of your personal
            information, object to or restrict certain processing, withdraw consent, and request a copy of
            your data in a portable format. To exercise these rights, or to request account and data
            deletion, email <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>. We respond to verified
            requests within the timeframes required by law.
          </p>
        </LegalSection>
        <LegalSection title="11. International Transfers">
          <p>
            Information may be processed in countries other than your own. Where required, we implement
            appropriate safeguards for such transfers.
          </p>
        </LegalSection>
        <LegalSection title="12. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time. Material changes will be notified through
            our website or within the application, and the revision date above will be updated.
          </p>
        </LegalSection>
        <LegalSection title="13. Contact Us">
          <p>
            {COMPANY.legal}
            <br />
            Email: <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a>
            <br />
            Support: <a href={`mailto:${COMPANY.support}`}>{COMPANY.support}</a>
            <br />
            Phone: {COMPANY.phone}
            <br />
            Address: {COMPANY.address}
            <br />
            GSTIN: {COMPANY.gstin}
            <br />
            PAN: {COMPANY.pan}
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}