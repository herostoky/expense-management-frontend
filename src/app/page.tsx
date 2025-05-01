import FeaturesSection from "./components/home/FeaturesSection";
import FooterSection from "./components/home/FooterSection";
import HeroSection from "./components/home/HeroSection";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center text-foreground">
      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Footer */}
      <FooterSection />
    </main>
  );
}
