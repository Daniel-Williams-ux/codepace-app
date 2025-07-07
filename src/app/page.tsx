import HeroSection from "@/components/HeroSection";
import FeaturedPrograms from "@/components/FeaturedPrograms";
import Testimonials from "@/components/Testimonials";
import HowItWorks from "@/components/HowItWorks";
import CTABanner from "@/components/CTABanner";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  return (
    <>
      <HeroSection />

      <svg
        viewBox="0 0 1440 100"
        className="w-full -mt-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon fill="#f8fafc" points="0,0 1440,100 0,100" />
      </svg>

      <FeaturedPrograms />

      <svg
        viewBox="0 0 1440 100"
        className="w-full -mt-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon fill="#f8fafc" points="0,0 1440,100 0,100" />
      </svg>

      <Testimonials />

      <svg
        viewBox="0 0 1440 100"
        className="w-full -mt-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon fill="#f8fafc" points="0,0 1440,100 0,100" />
      </svg>

      <HowItWorks />

      <svg
        viewBox="0 0 1440 100"
        className="w-full -mt-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon fill="#f8fafc" points="0,0 1440,100 0,100" />
      </svg>

      <CTABanner />

      <svg
        viewBox="0 0 1440 100"
        className="w-full -mt-4"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <polygon fill="#f8fafc" points="0,0 1440,100 0,100" />
      </svg>

      <FAQSection />
    </>
  );
}