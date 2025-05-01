import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col">
      {/* Hero section */}
      <div className="flex flex-col items-center justify-center px-4 py-20 md:py-32 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground mb-6">
            Manage Your Finances{" "}
            <span className="text-primary">Effortlessly</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Track your expenses, monitor your income, and take control of your
            financial journey with our intuitive expense management app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/signup"
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/signin"
              className="px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-medium hover:bg-secondary/80 transition-colors"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>

      {/* Features section */}
      <div className="py-24 px-4 bg-gradient-to-b from-background to-background/60 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-primary/30 blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-60 h-60 rounded-full bg-secondary/30 blur-3xl"></div>
          <div className="absolute top-1/2 left-1/4 w-20 h-20 rounded-full bg-accent/20 blur-xl"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="flex flex-col items-center mb-20">
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              Powerful Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
              Everything You Need{" "}
              <span className="text-primary">In One Place</span>
            </h2>
            <p className="text-muted-foreground text-center max-w-2xl">
              Our comprehensive suite of tools makes financial management
              simple, intuitive, and even enjoyable.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Expense Tracking",
                description:
                  "Log and categorize your expenses with detailed insights and visual breakdowns of your spending habits.",
                icon: "💸",
                color: "from-blue-500/20 to-indigo-500/20",
                shadow: "shadow-blue-500/10",
              },
              {
                title: "Income Management",
                description:
                  "Track multiple income streams with automatic categorization and real-time analysis of your earning patterns.",
                icon: "💰",
                color: "from-emerald-500/20 to-green-500/20",
                shadow: "shadow-emerald-500/10",
              },
              {
                title: "Custom Categories",
                description:
                  "Create personalized categories with custom icons and rules that adapt to your unique financial organization needs.",
                icon: "🏷️",
                color: "from-amber-500/20 to-orange-500/20",
                shadow: "shadow-amber-500/10",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="group flex flex-col h-full rounded-2xl bg-card border border-border shadow-lg hover:shadow-xl transition-all duration-300 hover:border-primary/30 hover:-translate-y-1"
              >
                <div
                  className={`p-6 rounded-t-2xl bg-gradient-to-br ${feature.color}`}
                >
                  <div
                    className={`w-16 h-16 flex items-center justify-center rounded-2xl bg-background ${feature.shadow} text-4xl mb-4`}
                  >
                    {feature.icon}
                  </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed flex-1">
                    {feature.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-border">
                    <a
                      href="#"
                      className="inline-flex items-center text-sm font-medium text-primary"
                    >
                      Learn more
                      <svg
                        className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20 pt-10 border-t border-border/50 grid md:grid-cols-4 gap-6 text-center">
            {[
              { value: "10K+", label: "Active Users" },
              { value: "$2.5M", label: "Tracked Monthly" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Support" },
            ].map((stat, index) => (
              <div key={index} className="p-4">
                <div className="text-3xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial/CTA section */}
      <div className="bg-secondary/50 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to take control?</h2>
          <p className="text-lg text-muted-foreground mb-10">
            Join thousands of users who have transformed their financial
            management experience.
          </p>
          <a
            href="/signup"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors inline-block"
          >
            Start Your Journey
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="py-10 px-4 border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold text-primary">ExpenseTracker</h2>
          </div>
          <div className="flex gap-8">
            <a
              href="/about"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </a>
            <a
              href="/privacy"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy
            </a>
            <a
              href="/terms"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms
            </a>
            <a
              href="/contact"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
