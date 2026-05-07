import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { CoursesSection } from "./components/CoursesSection";
import { PricingSection } from "./components/PricingSection";
import { Footer } from "./components/Footer";
import Stats from "./components/Stats";

export default function App() {
  return (
    <div
      className="min-h-screen w-full bg-white"
      style={{ fontFamily: "'Poppins', sans-serif" }}
    >
      <div className="fixed right-6 bottom-10 z-50">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105">
          Konsultasi Gratis
        </button>
      </div>
      <Navbar />
      <HeroSection />
      <Stats />
      <FeaturesSection />
      <CoursesSection />
      <PricingSection />
      <Footer />
    </div>
  );
}
