"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import SparkleBackground from "@/components/SparkleBackground"; // Custom sparkle animation

export default function CTABanner() {
  return (
    <section
      aria-labelledby="cta-title"
      className="relative w-full py-24 px-4 md:px-12 bg-gradient-to-br from-blue-50 via-white to-slate-100 overflow-hidden"
    >
      {/* Background Sparkles */}
      <SparkleBackground />

      {/* Animated Blue Blob */}
      <motion.div
        className="absolute -top-[200px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 opacity-30 rounded-full blur-3xl pointer-events-none"
        animate={{ scale: [1, 1.05, 1], rotate: [0, 15, -15, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />

      {/* CTA Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto backdrop-blur-lg bg-white/70 border border-white/30 shadow-2xl rounded-3xl px-6 md:px-12 py-12 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2
          id="cta-title"
          className="text-3xl md:text-4xl font-extrabold text-blue-900 leading-tight"
        >
          Ready to Take Your First Step?
        </h2>

        <p className="text-slate-700 mt-4 text-lg md:text-xl max-w-xl mx-auto">
          Join learners from Nigeria, the UK, and the US transforming their
          future through one-on-one, human tech education.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            href="/pricing"
            className="bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-full shadow-md transition focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-600"
          >
            Get Started
          </Link>

          {/* Fix: browse all actual programs route (adjusted from `/courses`) */}
          <Link
            href="/#programs"
            className="text-blue-700 font-medium underline hover:text-blue-900 transition"
          >
            Browse Programs
          </Link>
        </div>
      </motion.div>
    </section>
  );
}