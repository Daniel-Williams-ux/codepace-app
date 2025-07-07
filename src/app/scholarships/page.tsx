"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const scholarships = [
  {
    title: "Need-Based Aid",
    description:
      "For students with financial challenges. Just show us your situation — no red tape.",
  },
  {
    title: "Career Switcher Boost",
    description:
      "Changing careers? We offer partial scholarships to help make your leap smoother.",
  },
  {
    title: "Underrepresented Groups",
    description:
      "For learners from historically underserved or underrepresented communities in tech — we’re here to help you thrive.",
  },
];

export default function ScholarshipsPage() {
  return (
    <main
      className="flex flex-col items-center text-center text-slate-900 bg-slate-50"
      aria-labelledby="scholarship-page-heading"
    >
      {/* Hero Section */}
      <section className="w-full py-20 px-4 sm:px-6 md:px-10 max-w-4xl">
        <motion.h1
          id="scholarship-page-heading"
          className="text-4xl md:text-5xl font-bold mb-4 text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Scholarships That Empower
        </motion.h1>
        <motion.p
          className="text-lg max-w-2xl mx-auto text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          We believe in access over privilege. Apply for need-based scholarships
          and unlock personalized tech education.
        </motion.p>
      </section>

      {/* Why Scholarships */}
      <section className="w-full py-12 px-4 sm:px-6 max-w-3xl">
        <motion.h2
          className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Why Scholarships?
        </motion.h2>
        <motion.p
          className="text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Education should be driven by potential, not limited by cost. Our
          scholarships are designed to help learners who need extra support —
          financially or personally.
        </motion.p>
      </section>

      {/* Scholarship Types */}
      <section
        className="w-full py-12 px-4 sm:px-6 max-w-6xl grid gap-6 sm:grid-cols-2 md:grid-cols-3"
        aria-labelledby="scholarship-types-heading"
      >
        {scholarships.map((s, index) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card
              className="bg-white border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition"
              aria-labelledby={`scholarship-${index}-title`}
            >
              <CardHeader>
                <CardTitle
                  id={`scholarship-${index}-title`}
                  className="text-blue-700 font-semibold text-lg"
                >
                  {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{s.description}</p>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </section>

      {/* CTA - How to Apply */}
      <section
        className="w-full py-20 px-4 sm:px-6 bg-gradient-to-b from-slate-100 via-slate-50 to-white"
        aria-labelledby="how-to-apply-heading"
      >
        <div className="max-w-xl mx-auto text-center">
          <motion.h2
            id="how-to-apply-heading"
            className="text-2xl md:text-3xl font-semibold mb-4 text-blue-800"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            How to Apply
          </motion.h2>
          <motion.p
            className="text-slate-600 mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            It’s simple. Fill out a short form with your goals and challenges.
            We’ll reach out within 48 hours.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <Link href="/apply" passHref>
              <Button className="text-white text-base sm:text-lg px-6 py-3 cursor-pointer rounded-xl bg-amber-500 hover:bg-amber-600 transition focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-400">
                Apply for a Scholarship
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Encouragement */}
      <section className="w-full py-12 px-4 sm:px-6 max-w-3xl">
        <motion.h3
          className="text-xl md:text-2xl font-semibold mb-2 text-blue-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          Not sure if you qualify?
        </motion.h3>
        <motion.p
          className="text-slate-600"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          We evaluate every story personally. If you’re motivated to learn,
          apply anyway — we are here for you.
        </motion.p>
      </section>
    </main>
  );
}