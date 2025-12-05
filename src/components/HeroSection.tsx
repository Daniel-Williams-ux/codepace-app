import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full pt-0 pb-20 px-4 md:px-12 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">

          {/* SEO-Optimized H1 */}
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            One-on-One Coding Tutorship<br className="hidden md:inline" />
            Designed for Beginners.
          </h1>

          {/* SEO subtext */}
          <p className="text-lg text-slate-700">
            Learn tech with real human mentors. Studira gives you affordable, 
            personalized one-on-one training in software development, frontend, 
            backend, cloud, AI, and more — at your pace, with zero overwhelm.
          </p>

          {/* Improved SEO Bullet Points */}
          <div className="grid gap-2 text-slate-800 text-base">
            <p>✅ Learn with a real human coding tutor</p>
            <p>✅ One-on-one mentorship — not pre-recorded videos</p>
            <p>✅ Zero deadlines — progress at your own speed</p>
            <p>✅ $1,500–$2,000 total — no hidden fees</p>
            <p>✅ Full scholarships available globally</p>
          </div>

          {/* Scholarships line (kept same but improved SEO wording) */}
          <p className="text-green-700 font-semibold text-base">
            We provide full scholarships to high-potential learners in underserved regions.{" "}
            <Link href="/scholarships" className="underline hover:text-green-600">
              Learn more
            </Link>
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <Button
              asChild
              className="bg-blue-700 text-white px-6 py-2 font-semibold hover:bg-blue-800"
            >
              <Link href="/pricing">Enroll Now</Link>
            </Button>

            <Button variant="outline" asChild>
              <Link href="/#programs">Browse Programs</Link>
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/images/hero-mentorship.png"
            alt="Student learning coding with a one-on-one tech mentor"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </div>
      </div>

      {/* SEO Intro Section Below Hero */}
      <div className="mt-16 text-center max-w-3xl mx-auto">
        <p className="text-slate-700 text-base leading-relaxed">
          Studira is an online tech tutoring platform offering personalized, 
          human-led mentorship in web development, frontend engineering, 
          backend engineering, cloud computing, AI fundamentals, and data 
          analysis. Whether you're a beginner or switching careers, our 
          one-on-one mentorship ensures you understand every concept, build 
          real projects, and gain confidence in tech.
        </p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-20">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="p-5 bg-blue-50 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              width={80}
              height={80}
              className="mx-auto mb-4"
            />
            <h3 className="text-lg font-semibold text-blue-900">
              {feature.title}
            </h3>
            <p className="text-sm text-slate-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const features = [
  {
    title: "One-on-One Teaching",
    description:
      "You're matched with a real human instructor who guides your entire tech journey.",
    image: "/images/one-on-one.png",
  },
  {
    title: "Pace-Flexible Curriculum",
    description:
      "Learn at your own speed with full mentor support, no pressure, and no deadlines.",
    image: "/images/pace-flexible.png",
  },
  {
    title: "Confidence-Based Graduation",
    description:
      "Graduate only when you're ready — we teach until you achieve mastery.",
    image: "/images/confidence-exit.png",
  },
  {
    title: "Global Access & Scholarships",
    description:
      "We support learners worldwide, offering full scholarships to high-potential students.",
    image: "/images/global-access.png",
  },
];