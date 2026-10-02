import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import ProblemsSection from '@/components/ProblemsSection';
import SolutionSection from '@/components/SolutionSection';
import ProjectsSection from '@/components/ProjectsSection';
import LeadGenerationSection from '@/components/LeadGenerationSection';
import ServicesSection from '@/components/ServicesSection';
import ProcessSection from '@/components/ProcessSection';
import AboutSection from '@/components/AboutSection';
import WhyDMI from '@/components/WhyDMI';
import FAQSection from '@/components/FAQSection';
import ContactSection from '@/components/ContactSection';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#f8f9ff] text-[#131c26]">
      {/* Fixed Sticky Header Navigation */}
      <Navbar />

      <main className="flex-1 w-full">
        {/* 1. Hero Section */}
        <Hero />

        {/* 2. Trust & Capability Strip */}
        <TrustBar />

        {/* 3. Problems / Core Friction Section */}
        <ProblemsSection />

        {/* 4. Solution & Interactive Funnel Showcase */}
        <SolutionSection />

        {/* 5. Selected Roofing Projects Portfolio */}
        <ProjectsSection />

        {/* 6. Lead Generation 6-Stage Revenue Flow */}
        <LeadGenerationSection />

        {/* 7. Services & Offerings */}
        <ServicesSection />

        {/* 8. Execution Roadmap & 6-Step Process */}
        <ProcessSection />

        {/* 9. Meet Mohamed Islam D. / Real Developer Identity */}
        <AboutSection />

        {/* 10. Why DMI & Credibility Track Record */}
        <WhyDMI />

        {/* 11. Frequently Asked Questions */}
        <FAQSection />

        {/* 12. Free Website Audit & Direct Contact */}
        <ContactSection />

        {/* 13. Final Call to Action */}
        <FinalCTA />
      </main>

      {/* 14. Footer */}
      <Footer />
    </div>
  );
}
