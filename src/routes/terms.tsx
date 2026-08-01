import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/blocks";
import { LegalBody, LegalSection } from "@/components/site/legal";
import { COMPANY } from "@/data/site";

const title = "Terms & Conditions — Tooggle Global Software Services";
const description =
  "Terms and conditions governing the use of Tooggle Global websites, Android applications, software products, subscriptions and development services.";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        description="These terms govern your use of Tooggle Global websites, applications, software products and professional services."
      />
      <LegalBody updated="Last updated: 1 January 2025">
        <LegalSection title="1. Acceptance of Terms">
          <p>
            By accessing our website, downloading our applications, or engaging Tooggle Global for software
            services, you agree to be bound by these Terms & Conditions. If you do not agree, please do not
            use our products or services.
          </p>
        </LegalSection>
        <LegalSection title="2. Services">
          <p>
            Tooggle Global provides Android application development, enterprise software, cloud platforms,
            AI-powered solutions, automation and digital transformation services, along with licensed
            products such as retail, restaurant, pharmacy and spiritual platforms. The scope, deliverables,
            fees and timelines of any engagement are defined in a separate proposal, order form or statement
            of work, which forms part of these terms.
          </p>
        </LegalSection>
        <LegalSection title="3. Accounts and Eligibility">
          <p>
            You must provide accurate information when creating an account and are responsible for
            safeguarding your credentials and for all activity under your account. You must be legally
            capable of entering into a binding contract in your jurisdiction.
          </p>
        </LegalSection>
        <LegalSection title="4. Acceptable Use">
          <ul>
            <li>Do not use our services for unlawful, fraudulent or infringing purposes.</li>
            <li>Do not reverse engineer, decompile or attempt to extract source code except as permitted by law.</li>
            <li>Do not resell, sublicense or redistribute our software without written authorisation.</li>
            <li>Do not upload malicious code or attempt to disrupt, overload or gain unauthorised access to our systems.</li>
          </ul>
        </LegalSection>
        <LegalSection title="5. Licence and Intellectual Property">
          <p>
            Subject to payment of applicable fees, Tooggle Global grants you a non-exclusive,
            non-transferable licence to use the software for your internal business purposes. All
            intellectual property in our products, frameworks, pre-existing components, designs and
            documentation remains the property of Tooggle Global. Ownership of custom deliverables transfers
            only where expressly stated in the applicable statement of work and after full payment.
          </p>
        </LegalSection>
        <LegalSection title="6. Customer Responsibilities">
          <p>
            You agree to provide timely access to information, systems, approvals and stakeholders required
            for delivery. Delays caused by outstanding inputs may affect agreed timelines and costs. You are
            responsible for the legality and accuracy of the content and data you process using our software.
          </p>
        </LegalSection>
        <LegalSection title="7. Fees, Payment and Taxes">
          <p>
            Fees are invoiced as set out in the applicable proposal or subscription plan. Unless stated
            otherwise, invoices are payable within 15 days. Late payments may attract interest and suspension
            of services. All fees are exclusive of GST and other applicable taxes, which are payable by you.
          </p>
        </LegalSection>
        <LegalSection title="8. Subscriptions and Renewal">
          <p>
            Subscription plans renew automatically for successive terms unless cancelled before the renewal
            date. Fees paid are non-refundable except where required by law or expressly agreed in writing.
          </p>
        </LegalSection>
        <LegalSection title="9. Third-Party Services">
          <p>
            Our products may integrate third-party services such as cloud hosting, payment gateways,
            messaging and analytics. Your use of those services is subject to their own terms, and we are
            not responsible for their availability or performance.
          </p>
        </LegalSection>
        <LegalSection title="10. Warranties and Disclaimers">
          <p>
            We warrant that services will be performed in a professional and workmanlike manner. Except as
            expressly stated, our products and services are provided "as is" without warranties of any kind,
            including implied warranties of merchantability, fitness for a particular purpose and
            non-infringement. We do not warrant uninterrupted or error-free operation.
          </p>
        </LegalSection>
        <LegalSection title="11. Limitation of Liability">
          <p>
            To the maximum extent permitted by law, Tooggle Global shall not be liable for indirect,
            incidental, special, consequential or punitive damages, or for loss of profits, revenue or data.
            Our aggregate liability arising out of or relating to the services shall not exceed the fees paid
            by you for the services in the three months preceding the claim.
          </p>
        </LegalSection>
        <LegalSection title="12. Confidentiality">
          <p>
            Each party will protect the other's confidential information with at least the same care it uses
            for its own, and will use it only for the purposes of the engagement.
          </p>
        </LegalSection>
        <LegalSection title="13. Term and Termination">
          <p>
            Either party may terminate an engagement for material breach that remains uncured for 30 days
            after written notice. Upon termination you must cease use of the software and pay all amounts due
            for work performed up to the termination date.
          </p>
        </LegalSection>
        <LegalSection title="14. Support and Maintenance">
          <p>
            Support levels, response times and maintenance windows are defined in the applicable service
            agreement. Enhancements outside the agreed scope are chargeable.
          </p>
        </LegalSection>
        <LegalSection title="15. Force Majeure">
          <p>
            Neither party is liable for delays or failures caused by events beyond reasonable control,
            including natural disasters, war, strikes, network or infrastructure failures and governmental
            actions.
          </p>
        </LegalSection>
        <LegalSection title="16. Governing Law and Jurisdiction">
          <p>
            These terms are governed by the laws of India. The courts at the registered office location of
            Tooggle Global shall have exclusive jurisdiction over any disputes.
          </p>
        </LegalSection>
        <LegalSection title="17. Changes to These Terms">
          <p>
            We may update these Terms & Conditions from time to time. Continued use of our products or
            services after an update constitutes acceptance of the revised terms.
          </p>
        </LegalSection>
        <LegalSection title="18. Contact">
          <p>
            Questions about these terms can be sent to{" "}
            <a href={`mailto:${COMPANY.email}`}>{COMPANY.email}</a> or {COMPANY.phone}.
          </p>
        </LegalSection>
      </LegalBody>
    </>
  );
}