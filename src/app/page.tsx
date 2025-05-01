// import FeaturesSection from "./components/home/FeaturesSection";
// import FooterSection from "./components/home/FooterSection";
// import HeroSection from "./components/home/HeroSection";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

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
    <main className="min-h-screen flex flex-col items-center">
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
            <Link href="/sign-up">
              <Button
                size="lg"
                className="w-full sm:w-auto hover:cursor-pointer"
              >
                Sign Up
              </Button>
            </Link>
            <Link href="/sign-in">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto hover:cursor-pointer"
              >
                Sign In
              </Button>
            </Link>
          </div>
        </div>
        <div className="flex-1 relative">
          <Card className="aspect-square max-w-md mx-auto rounded-2xl shadow-xl border-border/40">
            <CardHeader>
              <div className="flex justify-between items-center">
                <CardTitle className="text-black">Expense Overview</CardTitle>
                <span className="text-sm text-muted-foreground">
                  August 2023
                </span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="h-40 bg-muted/30 rounded-lg mb-6 flex items-center justify-center">
                <div className="w-full h-32 flex items-end justify-around px-4">
                  <div className="w-1/5 bg-chart-1 h-[60%] rounded-t-md" />
                  <div className="w-1/5 bg-chart-2 h-[80%] rounded-t-md" />
                  <div className="w-1/5 bg-chart-3 h-[40%] rounded-t-md" />
                  <div className="w-1/5 bg-chart-4 h-[70%] rounded-t-md" />
                  <div className="w-1/5 bg-chart-5 h-[50%] rounded-t-md" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Groceries</span>
                  <span className="font-medium text-muted-foreground">
                    10 000 MGA
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Transportation</span>
                  <span className="font-medium text-muted-foreground">
                    5 000 MGA
                  </span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-border">
                  <span className="text-muted-foreground">Entertainment</span>
                  <span className="font-medium text-muted-foreground">
                    1 500 MGA
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Features Section */}
      <section className="w-full py-20 bg-primary/5" id="features">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text bg-gradient-to-r">
              Powerful Features
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your personal finances effectively.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={`${index}-${feature.title}`}
                className="border-border/40 shadow-md hover:shadow-xl hover:border-primary/30 transition-all duration-300 group"
              >
                <CardContent className="pt-6 items-center text-center">
                  <div className="text-4xl mb-4 bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl text-primary font-semibold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
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
    </main>
  );
}
