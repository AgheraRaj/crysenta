import type { Metadata } from "next";
import LegalHero from "@/components/legal/legal-hero";
import StaggerReveal from "@/components/motion/stagger-reveal";
import StaggerItem from "@/components/motion/stagger-item";

export const metadata: Metadata = {
  title: "Terms of Services | Crysenta International",
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    body: `By accessing or using the Crysenta International website ("Site"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Site.`,
  },
  {
    heading: "2. Use of the Website",
    body: `This Site is provided for informational purposes about Crysenta's products, including water soluble fertilizers, micronutrients, and liquid fertilizers, and to facilitate inquiries and orders. You agree to use the Site only for lawful purposes and in a manner that does not infringe the rights of, or restrict or inhibit the use of, this Site by any third party.`,
  },
  {
    heading: "3. Product Information & Disclaimer",
    body: `We make reasonable efforts to ensure product descriptions, nutrient compositions, dosages, and usage recommendations on this Site are accurate and up to date. However, actual crop response can vary based on soil conditions, climate, application method, and other factors outside our control. Product labels and packaging should always be consulted for the most current application instructions. Crysenta is not liable for outcomes resulting from improper storage, handling, or application that deviates from recommended usage.`,
  },
  {
    heading: "4. Orders & Quotes",
    body: `Enquiries, quote requests, or orders submitted through this Site do not constitute a binding contract until confirmed in writing by Crysenta International. Pricing, availability, and packaging are subject to change without prior notice.`,
  },
  {
    heading: "5. Intellectual Property",
    body: `All content on this Site, including text, graphics, logos, product images, and the Crysenta brand name and marks, is the property of Crysenta International or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works from this content without our prior written consent.`,
  },
  {
    heading: "6. User Conduct",
    body: `You agree not to misuse the Site, including by attempting to gain unauthorized access to our systems, introducing malicious code, or submitting false or misleading information through our contact or enquiry forms.`,
  },
  {
    heading: "7. Limitation of Liability",
    body: `To the fullest extent permitted by law, Crysenta International shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of this Site or our products, including but not limited to loss of crop yield, revenue, or business opportunity.`,
  },
  {
    heading: "8. Third-Party Links",
    body: `This Site may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of any linked third-party sites.`,
  },
  {
    heading: "9. Governing Law",
    body: `These Terms of Service shall be governed by and construed in accordance with the laws of India, and any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Junagadh, Gujarat.`,
  },
  {
    heading: "10. Changes to These Terms",
    body: `We may revise these Terms of Service from time to time. Continued use of the Site after changes are posted constitutes your acceptance of the revised terms.`,
  },
  {
    heading: "11. Contact Us",
    body: `For questions about these Terms of Service, please contact us at crysenta@gmail.com or +91 9998945296, or write to us at Plot No. 10, Section-6, Jay Industrial Park, Dhoraji Junagadh Road, At. - Makhiyala, Tal. & Dist. - Junagadh - 362011, Gujarat, India.`,
  },
];

export default function TermsOfServicesPage() {
  return (
    <>
      <LegalHero title="Privacy Policy" updated="August 25, 2026" />

      <section className="bg-white">
        <div className="mx-auto max-w-[900px] px-6 py-16 sm:px-10 sm:py-20">
          <StaggerReveal className="space-y-10">
            {sections.map((section) => (
              <StaggerItem key={section.heading}>
                <h2 className="text-xl font-semibold text-neutral-900 sm:text-2xl">
                  {section.heading}
                </h2>
                <p className="mt-3 text-base leading-7 text-neutral-600">
                  {section.body}
                </p>
              </StaggerItem>
            ))}
          </StaggerReveal>
        </div>
      </section>
    </>
  );
}