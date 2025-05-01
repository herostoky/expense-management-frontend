import HeroSection from "./components/home/HeroSection";
import FeaturesSection from "./components/home/FeaturesSection";
import FooterSection from "./components/home/FooterSection";

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
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection features={features} />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
