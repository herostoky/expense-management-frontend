import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Landmark, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Privacy Policy | Expense Management",
  description: "Privacy policy for Expense Management application",
};

export default function PrivacyPage() {
  const privacyContent = [
    {
      id: 1,
      title: "Information We Collect",
      content:
        "We collect information you provide directly to us when you create an account, such as your name, email address, and password. We also collect data about your expenses, incomes, and financial categories you create within the application.",
    },
    {
      id: 2,
      title: "How We Use Your Information",
      content:
        "We use the information we collect to provide, maintain, and improve our services, process your transactions, send you technical notices and support messages, and respond to your inquiries.",
    },
    {
      id: 3,
      title: "Data Security",
      content:
        "We implement appropriate technical and organizational measures to protect the security of your personal information. However, no internet transmission is completely secure, so we cannot guarantee the absolute security of your data.",
    },
    {
      id: 4,
      title: "Data Retention",
      content:
        "We retain your personal information for as long as necessary to provide the services you have requested, or for other essential purposes such as complying with our legal obligations or resolving disputes.",
    },
    {
      id: 5,
      title: "Your Rights",
      content:
        "Depending on your location, you may have certain rights regarding your personal information, including the right to access, correct, delete, or restrict processing of your data. You can exercise these rights by contacting us.",
    },
    {
      id: 6,
      title: "Third-Party Services",
      content:
        "Our service may contain links to third-party websites or services that are not owned or controlled by Expense Management. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party websites or services.",
    },
    {
      id: 7,
      title: "Changes to Privacy Policy",
      content:
        "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the 'Last updated' date.",
    },
    {
      id: 8,
      title: "Contact Us",
      content:
        "If you have any questions about this Privacy Policy, please contact us at privacy@expensemanagement.com.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center p-4 sm:p-8">
      <div className="w-full max-w-4xl">
        <Link href="/" className="flex items-center mb-6">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors mr-3">
            <Landmark className="h-5 w-5 text-primary" />
          </div>
          <h1 className="text-xl font-bold tracking-tight hover:text-primary/90 transition-colors">
            Expense Management
          </h1>
        </Link>

        <Button variant="ghost" size="sm" className="mb-6" asChild>
          <Link href="/">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Link>
        </Button>

        <div className="rounded-lg p-6">
          <div className="mb-6">
            <div className="flex items-center">
              <Shield className="h-6 w-6 text-primary mr-2" />
              <h1 className="text-primary text-2xl font-bold">
                Privacy Policy
              </h1>
            </div>
            <p className="text-muted-foreground mb-6">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            {privacyContent.map((section) => (
              <section
                key={section.id}
                className="pb-4 border-b last:border-b-0"
              >
                <h2 className="text-lg font-semibold mb-2">{section.title}</h2>
                <p className="text-muted-foreground">{section.content}</p>
              </section>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
