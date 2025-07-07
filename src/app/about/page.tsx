"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="bg-white text-slate-800 px-4 md:px-12 py-20 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="text-center mb-20">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Learn Tech. Build Confidence. <br />
          Move at Your Pace.
        </motion.h1>
        <motion.p
          className="mt-6 max-w-2xl mx-auto text-lg text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          At Studira, we deliver one-on-one instruction combined with hands-on
          learning so you grow into a confident developer— on your schedule, at
          your pace.
        </motion.p>
      </section>

      {/* Mission & Vision */}
      <section className="grid md:grid-cols-2 gap-10 items-start mb-24">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Mission
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We empower aspiring developers through personalised, one-on-one tech
            education. Our goal is to build confidence, sharpen skills, and
            support every learner’s journey — step by step, at their own pace.
            <br className="hidden md:block" />
            <span className="block mt-4 text-blue-800 font-medium">
              We especially support learners in underserved countries with
              full-ride scholarships.
              <Link
                href="/scholarships"
                className="ml-1 underline hover:text-blue-700"
              >
                Explore opportunities
              </Link>
              .
            </span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Vision
          </h2>
          <p className="text-slate-600 leading-relaxed">
            We make high-quality, hands-on tech education accessible to anyone,
            anywhere. By bridging learning gaps with real human support, we help
            learners thrive in a digital future.
          </p>
        </motion.div>
      </section>

      {/* Core Values */}
      <section className="mb-24">
        <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">
          What We Stand For
        </h2>
        <ul className="grid md:grid-cols-3 gap-8">
          {[
            "Accessibility",
            "Personalization",
            "Hands-On Learning",
            "Excellence",
            "Empowerment",
            "Innovation",
            "Integrity",
          ].map((value, i) => (
            <motion.li
              key={value}
              className="bg-slate-50 border border-blue-100 rounded-xl p-6 shadow-sm hover:shadow-md transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="text-lg font-medium text-blue-800">{value}</h3>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Problem & Solution */}
      <section className="grid md:grid-cols-2 gap-12 mb-24 items-start">
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            The Problem
          </h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>Bootcamps are expensive and rigid.</li>
            <li>Self-paced platforms lack real support.</li>
            <li>
              Many learners feel lost or stuck due to pace or life challenges.
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-800 mb-4">
            Our Solution
          </h2>
          <ul className="list-disc pl-6 text-slate-600 space-y-2">
            <li>One-on-one, personalised teaching from real humans.</li>
            <li>Student-paced — we teach until you truly get it.</li>
            <li>Affordable, accessible, and progress-driven.</li>
          </ul>
        </div>
      </section>

      {/* Trust CTA */}
      <section className="bg-slate-50 py-16 px-6 rounded-xl text-center shadow-inner">
        <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
          Have Questions? Want to Chat First?
        </h2>
        <p className="text-slate-600 mb-6 max-w-xl mx-auto">
          We’re humans — not bots. If you’re unsure, curious, or just want to
          speak directly, you can message us personally.
        </p>
        <a
          href="https://wa.me/2347033112571"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition"
          aria-label="Chat with us on WhatsApp"
        >
          <FaWhatsapp className="text-white text-xl" />
          Chat on WhatsApp
        </a>
      </section>

      {/* Enroll CTA */}
      <section className="text-center mt-16">
        <Link
          href="/pricing"
          className="inline-block bg-blue-700 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-800 transition"
        >
          Get Started Today
        </Link>
        <p className="text-slate-500 mt-2 text-sm">
          No deadlines. No pressure. Just progress. Slow and steady.
        </p>
      </section>
    </main>
  );
}