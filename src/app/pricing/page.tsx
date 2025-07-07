import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FaCheckCircle } from "react-icons/fa";

export default function PricingPage() {
  return (
    <main className="max-w-6xl mx-auto px-4 py-12 space-y-16 bg-[#F9FAFB]">
      {/* HERO */}
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-[#0F172A]">
          Simple, transparent pricing
        </h1>
        <p className="text-lg text-[#475569]">
          Real instructors. Personalized learning. No pressure. Just progress —
          at your pace.
        </p>
      </section>

      {/* PLANS */}
      <section className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Essentials */}
        <Card className="rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-[#0F172A]">
              Essentials Plan
            </CardTitle>
            <p className="text-[#64748B] text-sm">For early-stage learners</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-3xl font-bold text-[#0F172A]">$1,500</p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> 1-on-1 mentorship
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Flexible schedule
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Personalized
                roadmap
              </li>
            </ul>
            <Link
              href="/payment?plan=essentials"
              className="inline-block mt-4 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-xl transition"
            >
              Enroll Now
            </Link>
          </CardContent>
        </Card>

        {/* Full Access */}
        <Card className="rounded-2xl shadow-xl border-2 border-[#1D4ED8]">
          <CardHeader>
            <CardTitle className="text-xl text-[#1D4ED8]">
              Full Access Plan
            </CardTitle>
            <p className="text-[#64748B] text-sm">
              For serious career-changers
            </p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-3xl font-bold text-[#0F172A]">$2,000</p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Everything in
                Essentials
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Lifetime career
                support
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Interview prep &
                projects
              </li>
            </ul>
            <Link
              href="/payment?plan=full"
              className="inline-block mt-4 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-xl transition"
            >
              Enroll Now
            </Link>
          </CardContent>
        </Card>

        {/* Custom Plan */}
        <Card className="rounded-2xl shadow-xl">
          <CardHeader>
            <CardTitle className="text-xl text-[#0F172A]">
              Custom Plan
            </CardTitle>
            <p className="text-[#64748B] text-sm">Tailored for your needs</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-3xl font-bold text-[#0F172A]">
              Starts at $1,500
            </p>
            <ul className="space-y-2 text-[#475569]">
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Pay-as-you-go
                sessions
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Ideal for
                part-timers
              </li>
              <li className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" /> Customized to your
                goals
              </li>
            </ul>
            <Link
              href="/payment?plan=custom"
              className="inline-block mt-4 bg-[#1D4ED8] hover:bg-[#1E40AF] text-white px-4 py-2 rounded-xl transition"
            >
              Enroll Now
            </Link>
          </CardContent>
        </Card>
      </section>

      {/* VALUE */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h2 className="text-2xl font-semibold text-[#0F172A]">
          Why it’s worth it
        </h2>
        <p className="text-[#475569] text-lg">
          Traditional bootcamps cost $10,000+ and rush you through. We give you
          a personal guide and unlimited support — until you succeed. You’ll
          only pay once, and never face a deadline.
        </p>
      </section>

      {/* FAQ */}
      <section className="max-w-3xl mx-auto space-y-6">
        <h3 className="text-xl font-semibold text-[#0F172A]">
          Common Questions
        </h3>
        <div className="space-y-4">
          <div>
            <h4 className="font-medium text-[#0F172A]">
              Is there a payment plan?
            </h4>
            <p className="text-[#475569]">
              Yes — we offer 3- to 6-month payment plans, interest-free.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#0F172A]">
              What if I need more time?
            </h4>
            <p className="text-[#475569]">
              There are no time limits. We teach until you master the material.
            </p>
          </div>
          <div>
            <h4 className="font-medium text-[#0F172A]">
              Can I try before I commit?
            </h4>
            <p className="text-[#475569]">
              Yes — we offer a free trial session. No pressure, no credit card.
            </p>
          </div>
        </div>
      </section>

      {/* CTA SCHOLARSHIP */}
      <section className="bg-[#F0F4FF] rounded-2xl p-8 max-w-4xl mx-auto text-center space-y-4 shadow-md">
        <h4 className="text-2xl font-semibold text-[#F59E0B]">
          Financial barrier? We&rsquo;ve got you.
        </h4>
        <p className="text-[#334155]">
          We offer full-ride scholarships to learners from underserved countries
          — because talent is everywhere, not just where it&rsquo;s funded.
        </p>
        <Link
          href="/scholarships"
          className="inline-block bg-[#F59E0B] hover:bg-[#D97706] text-white px-6 py-2 rounded-xl transition"
        >
          Learn about Scholarships
        </Link>
      </section>
    </main>
  );
}