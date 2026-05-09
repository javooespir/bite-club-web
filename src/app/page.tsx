import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MarqueeStrip from "@/components/MarqueeStrip";
import MenuSection from "@/components/MenuSection";
import ExtrasSection from "@/components/ExtrasSection";
import BrandSection from "@/components/BrandSection";
import DeliverySection from "@/components/DeliverySection";
import HoursSection from "@/components/HoursSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <MarqueeStrip />
      <MenuSection />
      <ExtrasSection />
      <BrandSection />
      <DeliverySection />
      <HoursSection />
      <Footer />
    </main>
  );
}
