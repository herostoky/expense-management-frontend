// import FeaturesSection from "./components/home/FeaturesSection";
// import FooterSection from "./components/home/FooterSection";
// import HeroSection from "./components/home/HeroSection";

export default function Home() {
  const features = [
    {
      title: "Expense Tracking",
      description:
        "Log and categorize your expenses with ease. Keep track of where your money goes.",
      icon: "📊",
    },
    {
      title: "Income Management",
      description:
        "Record all your income sources and see your earnings at a glance.",
      icon: "💰",
    },
    {
      title: "Custom Categories",
      description:
        "Create personalized categories that match your specific financial needs.",
      icon: "🏷️",
    },
  ];

  return (
    <main className="min-h-screen flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
            <span className="text-primary">Manage</span> your finances with ease
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
            Track expenses, monitor income, and take control of your financial
            future with our intuitive expense management app.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="aspect-square max-w-md rounded-2xl bg-card p-6 shadow-xl border border-border">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-semibold">Expense Overview</h3>
              <span className="text-sm text-muted-foreground">August 2023</span>
            </div>
            <div className="space-y-4">
              <div className="h-40 bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-full h-32 flex items-end justify-around px-4">
                  <div className="w-1/5 bg-chart-1 h-[60%] rounded-t-md"></div>
                  <div className="w-1/5 bg-chart-2 h-[80%] rounded-t-md"></div>
                  <div className="w-1/5 bg-chart-3 h-[40%] rounded-t-md"></div>
                  <div className="w-1/5 bg-chart-4 h-[70%] rounded-t-md"></div>
                  <div className="w-1/5 bg-chart-5 h-[50%] rounded-t-md"></div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Groceries</span>
                  <span className="font-medium">$350.00</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Transportation</span>
                  <span className="font-medium">$120.50</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span>Entertainment</span>
                  <span className="font-medium">$85.75</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-blue-50" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your personal finances effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={`${index}-${feature.title}`}
                className="bg-background/80 backdrop-blur-sm rounded-xl p-6 border border-border/40 shadow-lg hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="text-4xl mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
