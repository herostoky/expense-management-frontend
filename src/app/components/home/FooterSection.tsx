import Link from "next/link";

export default function FooterSection() {
  return (
    <footer className="w-full py-16 border-t border-border/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold hover:text-primary transition-colors">
                Expense Management
              </h2>
            </Link>
            <p className="text-muted-foreground">
              Take control of your financial future
            </p>
          </div>
          <div className="flex space-x-8">
            <Link
              href="#features"
              className="text-primary hover:underline transition-colors"
            >
              Features
            </Link>
            <Link
              href="https://linkedin.com/in/herostoky"
              className="text-primary hover:underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border/30 text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Expense Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
