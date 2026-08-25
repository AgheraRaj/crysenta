import type { Metadata } from "next";
import LegalHero from "@/components/legal/legal-hero";

export const metadata: Metadata = {
  title: "Privacy Policy | Crysenta International",
};

const sections = [
  {
    heading: "1. Introduction",
    body: `Crysenta International ("Crysenta," "we," "us," or "our") respects your privacy and is committed to protecting the personal information you share with us. This Privacy Policy explains what information we collect, how we use it, and the choices you have, when you visit our website or interact with us regarding our fertilizer and crop nutrition products.`,
  },
  {
    heading: "2. Information We Collect",
    body: `We may collect information you provide directly to us, such as your name, email address, phone number, company or farm details, and any message content when you fill out a contact form, request a quote, or otherwise communicate with us. We may also automatically collect certain technical information, such as your IP address, browser type, device information, and pages visited, through standard website analytics tools.`,
  },
  {
    heading: "3. How We Use Your Information",
    body: `We use the information we collect to respond to your inquiries, provide product information and quotes, process and fulfil orders, improve our website and services, and communicate with you about products, promotions, or updates you have requested. We do not sell your personal information to third parties.`,
  },
  {
    heading: "4. Cookies & Similar Technologies",
    body: `Our website may use cookies and similar tracking technologies to improve your browsing experience, understand how visitors use our site, and remember your preferences. You can control or disable cookies through your browser settings; note that some parts of the website may not function properly if cookies are disabled.`,
  },
  {
    heading: "5. Sharing of Information",
    body: `We do not share your personal information with third parties except: with service providers who help us operate our website, communications, or logistics (under confidentiality obligations); when required by law, regulation, or legal process; or with your consent.`,
  },
  {
    heading: "6. Data Security",
    body: `We take reasonable technical and organizational measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet or electronic storage is completely secure, and we cannot guarantee absolute security.`,
  },
  {
    heading: "7. Your Rights",
    body: `Depending on your location, you may have the right to access, correct, or request deletion of your personal information, or to object to or restrict certain processing. To exercise any of these rights, please contact us using the details below.`,
  },
  {
    heading: "8. Children's Privacy",
    body: `Our website and services are intended for business and agricultural use and are not directed at children. We do not knowingly collect personal information from individuals under the age of 18.`,
  },
  {
    heading: "9. Changes to This Policy",
    body: `We may update this Privacy Policy from time to time to reflect changes in our practices or for legal, operational, or regulatory reasons. Any changes will be posted on this page with an updated "Last updated" date.`,
  },
  {
    heading: "10. Contact Us",
    body: `If you have any questions about this Privacy Policy or how we handle your personal information, please contact us at crysenta@gmail.com or +91 9998945296, or write to us at Plot No. 10, Section-6, Jay Industrial Park, Dhoraji Junagadh Road, At. - Makhiyala, Tal. & Dist. - Junagadh - 362011, Gujarat, India.`,
  },
];

export default function PrivacyPolicyPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" updated="August 25, 2026" />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 sm:py-20">
          <div className="space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}