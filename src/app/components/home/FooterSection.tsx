export default function FooterSection() {
  return (
    <footer className="w-full py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold">Expense Management</h2>
            <p className="text-muted-foreground">
              Take control of your financial future
            </p>
          </div>
          <div className="flex space-x-8">
            <a
              href="#features"
              className="text-foreground hover:text-primary transition-colors"
            >
              Features
            </a>
            <a
              href="https://linkedin.com/in/herostoky"
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-border text-center text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Expense Management. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
