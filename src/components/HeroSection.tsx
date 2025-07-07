import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section className="w-full pt-0 pb-20 px-4 md:px-12 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900 leading-tight">
            Real Tech Mentorship. <br className="hidden md:inline" />
            Built for Mastery, Not Deadlines.
          </h1>

          <p className="text-lg text-slate-700">
            Learn one-on-one with a human instructor. Go at your own pace. No
            pressure — just personalized support until you're confident and
            job-ready.
          </p>

          <div className="grid gap-2 text-slate-800 text-base">
            <p>✅ One-on-One Human Teaching</p>
            <p>✅ No Deadlines — Graduate When Ready</p>
            <p>✅ $1,500–$2,000 Total — No Hidden Fees</p>
            <p>✅ Full Scholarships Available Globally</p>
          </div>

          <p className="text-green-700 font-semibold text-base">
            From Nigeria to Nepal — we offer full scholarships to high-potential
            learners in underserved regions.{" "}
            <Link
              href="/scholarships"
              className="underline hover:text-green-600"
            >
              Learn more
            </Link>
          </p>

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
            alt="Student learning with mentor on screen"
            width={500}
            height={500}
            className="rounded-xl shadow-xl object-cover"
            priority
          />
        </div>
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
      "You're matched with a real human instructor who guides you throughout your journey.",
    image: "/images/one-on-one.png",
  },
  {
    title: "Pace-Flexible Curriculum",
    description:
      "Learn at your own speed — with full support, no pressure, and no arbitrary deadlines.",
    image: "/images/pace-flexible.png",
  },
  {
    title: "Confidence-Based Graduation",
    description:
      "You graduate when you're ready — not just when the calendar says you're done.",
    image: "/images/confidence-exit.png",
  },
  {
    title: "Global Access & Scholarships",
    description:
      "We support learners across the world, offering full scholarships to high-potential students.",
    image: "/images/global-access.png", // Replace this with your own illustration
  },
];
