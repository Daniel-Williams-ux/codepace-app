"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa";
import Head from "next/head";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>About Studira | One-on-One Tech Mentorship</title>
        <meta
          name="description"
          content="Studira offers personalized, one-on-one tech mentorship that moves at your pace. Learn hands-on with real humans, not AI bots."
        />
      </Head>

      <main className="bg-white text-slate-800 px-4 md:px-12 py-20 max-w-7xl mx-auto">
        {/* Hero */}
        <section className="text-center mb-20">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Learn Tech. Build Confidence.
            <br />
            Move at Your Pace.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-slate-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            Studira delivers one-on-one instruction with real humans, combining
            mentorship and hands-on practice. Grow at your speed, build your
            confidence.
          </motion.p>
        </section>

        {/* Mission & Vision */}
        <section className="grid md:grid-cols-2 gap-10 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Mission
            </h2>
            <p className="text-slate-600">
              We empower aspiring developers through personal mentorship. Our
              aim is to help learners grow in confidence, one step at a time.
              <br />
              <span className="block mt-4 text-blue-800 font-medium">
                We especially support underserved countries with full
                scholarships.
                <Link
                  href="/scholarships"
                  className="underline ml-1 hover:text-blue-600"
                >
                  See details
                </Link>
                .
              </span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Vision
            </h2>
            <p className="text-slate-600">
              We’re building a future where access to tech education is not
              limited by cost or geography. Studira exists to make learning
              possible for all.
            </p>
          </motion.div>
        </section>

        {/* Core Values */}
        <section className="mb-24">
          <h2 className="text-3xl font-semibold text-blue-900 text-center mb-12">
            Our Core Values
          </h2>
          <ul className="grid md:grid-cols-3 gap-6">
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
                className="bg-slate-50 p-6 border border-slate-200 rounded-xl text-center hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <span className="text-blue-800 font-medium">{value}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* Problem & Solution */}
        <section className="grid md:grid-cols-2 gap-10 mb-24">
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              The Problem
            </h2>
            <ul className="list-disc text-slate-600 space-y-2 pl-5">
              <li>Bootcamps are expensive and one-size-fits-all.</li>
              <li>Self-paced courses often leave learners stranded.</li>
              <li>Life challenges slow down progress with no support.</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">
              Our Solution
            </h2>
            <ul className="list-disc text-slate-600 space-y-2 pl-5">
              <li>One-on-one mentorship with real humans.</li>
              <li>Student-paced progress. No pressure. No expiry.</li>
              <li>Supportive and accessible — built for real life.</li>
            </ul>
          </div>
        </section>

        {/* WhatsApp CTA */}
        <section className="bg-slate-50 px-6 py-12 text-center rounded-xl shadow-inner">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
            Have Questions? Talk to Us
          </h2>
          <p className="text-slate-600 max-w-xl mx-auto mb-6">
            No bots. No pressure. If you're unsure or curious, chat directly
            with a team member now.
          </p>
          <a
            href="https://wa.me/2347033112571"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-600 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-green-700 transition"
          >
            <FaWhatsapp className="text-xl" />
            Chat on WhatsApp
          </a>
        </section>

        {/* CTA */}
        <section className="text-center mt-16">
          <Link
            href="/pricing"
            className="inline-block bg-blue-700 text-white px-8 py-3 rounded-full shadow-md font-semibold hover:bg-blue-800 transition"
          >
            Get Started
          </Link>
          <p className="text-sm text-slate-500 mt-2">
            No subscriptions. No pressure. Learn your way.
          </p>
        </section>
      </main>
    </>
  );
}
