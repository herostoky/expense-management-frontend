import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-8 bg-background">
      <div className="max-w-4xl w-full space-y-10">
        {/* Hero Section */}
        <div className="text-center space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Take Control of Your <span className="text-primary">Finances</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Track expenses, monitor income, and visualize your financial journey
            with our intuitive expense management platform.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a
              href="/signup"
              className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Sign Up
            </a>
            <a
              href="/signin"
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Sign In
            </a>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Track Expenses</h3>
            <p className="text-muted-foreground">
              Keep track of where your money goes with detailed expense
              categories and reporting.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <path d="M18 6 7 17l-5-5" />
                <path d="m22 10-7.5 7.5L13 16" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Manage Income</h3>
            <p className="text-muted-foreground">
              Record all your income sources to get a complete picture of your
              financial health.
            </p>
          </div>

          <div className="bg-card p-6 rounded-lg shadow-sm border border-border">
            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 text-primary"
              >
                <rect width="18" height="18" x="3" y="3" rx="2" />
                <path d="M9 9h6v6H9z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Custom Categories</h3>
            <p className="text-muted-foreground">
              Create personalized categories that reflect your unique spending
              and income patterns.
            </p>
          </div>
        </div>

        {/* Testimonial Section */}
        <div className="bg-accent/30 p-8 rounded-lg border border-border">
          <div className="flex flex-col items-center text-center">
            <div className="relative w-16 h-16 mb-4 rounded-full overflow-hidden bg-muted">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute inset-0 w-full h-full text-muted-foreground"
              >
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
            </div>
            <blockquote className="text-lg italic mb-4 max-w-2xl">
              &quot;This expense management app has completely transformed how I
              handle my finances. Now I can see exactly where my money is going
              and make better decisions.&quot;
            </blockquote>
            <cite className="text-sm font-medium not-italic text-foreground">
              — Sarah J., Financial Planner
            </cite>
          </div>
        </div>

        {/* Footer */}
        <footer className="py-6 text-center text-sm text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Expense Management. All rights
            reserved.
          </p>
        </footer>
      </div>
    </main>
  );
}
