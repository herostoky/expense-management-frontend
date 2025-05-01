import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Landmark } from "lucide-react";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Terms of Service | Expense Management",
  description: "Terms and conditions for using Expense Management",
};

export default function TermsPage() {
  const termsContent = [
    {
      id: 1,
      title: "Introduction",
      content:
        "Welcome to Expense Management. By using our service, you agree to these terms.",
    },
    {
      id: 2,
      title: "User Accounts",
      content:
        "You are responsible for maintaining the security of your account and password. The company cannot and will not be liable for any loss or damage from your failure to comply with this security obligation.",
    },
    {
      id: 4,
      title: "Service Usage",
      content:
        "You may use our service for managing personal or business expenses. You agree not to use the service for any illegal or unauthorized purpose. You must not transmit any worms or viruses or any code of a destructive nature.",
    },
    {
      id: 5,
      title: "Payment & Fees",
      content:
        "Expense Management offers both free and premium features. Premium features require payment as described on our pricing page. We reserve the right to modify our pricing with reasonable notice.",
    },
    {
      id: 6,
      title: "Termination",
      content:
        "We may terminate or suspend your account and access to the service immediately, without prior notice or liability, for any reason including, without limitation, if you breach the Terms.",
    },
    {
      id: 7,
      title: "Changes to Terms",
      content:
        "We reserve the right to modify these terms at any time. We will provide notice of significant changes by updating the date at the top of these terms and by maintaining a current version of the terms on our website.",
    },
    {
      id: 8,
      title: "Contact",
      content:
        "If you have any questions about these Terms, please contact us at support@expensemanagement.com.",
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
            <h1 className="text-primary text-2xl font-bold">
              Terms of Service
            </h1>
            <p className="text-muted-foreground">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className="space-y-6 text-sm leading-relaxed">
            {termsContent.map((section) => (
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
