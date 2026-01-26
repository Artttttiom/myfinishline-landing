import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import LogoCloud from "@/components/LogoCloud";
import QuestSelection from "@/components/QuestSelection";
import HowItWorks from "@/components/HowItWorks";
import Participation from "@/components/Participation";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <LogoCloud />
      <QuestSelection />
      <HowItWorks />
      <Participation />
      <FAQ />
      <CTA />
      <Testimonials />
      <Footer />
    </main>
  );
}
