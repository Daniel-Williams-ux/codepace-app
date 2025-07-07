"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function DataBootcampPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="px-6 py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#CA8A04] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Data Analysis Bootcamp
          </motion.h1>
          <p className="text-lg text-slate-700 mb-6">
            Learn data cleaning, analysis, and visualization using Python, SQL,
            and modern tools — with expert mentorship and portfolio-driven
            learning.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 rounded-md shadow transition"
            >
              Apply Now
            </Link>
            <Link
              href="/contact"
              className="border border-[#CA8A04] text-[#CA8A04] px-6 py-3 rounded-md font-semibold hover:bg-yellow-100 transition"
            >
              Book a Free Call
            </Link>
          </div>
        </div>
      </section>

      {/* WHY DATA ANALYSIS */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">
          Why Learn Data Analysis?
        </h2>
        <p className="text-lg text-slate-700">
          Every business needs insights. Data analysts turn raw numbers into
          real-world decisions. It&#39;s one of the most flexible,
          remote-friendly, and beginner-accessible tech careers.
        </p>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">What You’ll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Python for Data Analysis",
              "Data Cleaning with Pandas",
              "SQL Queries & Joins",
              "Data Visualization (Matplotlib, Seaborn)",
              "Exploratory Data Analysis (EDA)",
              "Real-world Portfolio Projects",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO IT’S FOR */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-4">Who This Is For</h3>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Career switchers entering tech</li>
          <li>Beginners with no coding background</li>
          <li>Analysts who want to level up with Python</li>
          <li>People exploring data science paths</li>
        </ul>
      </section>

      {/* CURRICULUM */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-semibold text-center mb-8">
            Curriculum Overview
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                stage: "Milestone 1",
                content: "Intro to Python & Jupyter Notebooks",
              },
              {
                stage: "Milestone 2",
                content: "Data Cleaning & Manipulation with Pandas",
              },
              {
                stage: "Milestone 3",
                content: "SQL for Data Analysis",
              },
              {
                stage: "Milestone 4",
                content: "Data Visualization & EDA",
              },
              {
                stage: "Milestone 5",
                content: "Capstone: Analyze a Real Dataset",
              },
              {
                stage: "Milestone 6",
                content: "Portfolio & Career Support",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#CA8A04]"
              >
                <h4 className="font-bold mb-1 text-[#CA8A04]">{item.stage}</h4>
                <p className="text-slate-700">{item.content}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-8 max-w-2xl mx-auto">
            Move forward only when you’re ready. Review. Reflect. Master. Then
            build.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Projects You’ll Build</h3>
        <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
          Hands-on analysis of real-world data. Build portfolio pieces that
          demonstrate your skills clearly and confidently.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Cleaning a Messy Dataset",
              desc: "Use Pandas to transform and clean a raw CSV file with inconsistent values.",
            },
            {
              title: "SQL Business Dashboard",
              desc: "Write SQL queries to extract metrics from a normalized database.",
            },
            {
              title: "Exploratory Data Analysis",
              desc: "Visualize trends and outliers using Matplotlib, Seaborn, and insights.",
            },
          ].map((proj, i) => (
            <div key={i} className="bg-yellow-50 p-5 rounded-xl shadow-sm">
              <h4 className="font-semibold text-[#CA8A04] mb-2">
                {proj.title}
              </h4>
              <p className="text-slate-700">{proj.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* MENTOR */}
      <section className="bg-yellow-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
          <p className="text-lg text-slate-700 mb-6">
            Learn from a data analyst with industry experience across fintech,
            healthcare, and consumer tech. You&#39;ll get practical advice and
            personal support.
          </p>

          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <div>
              <p className="text-slate-800 font-semibold">Your Data Mentor</p>
              <p className="text-slate-600 text-sm">
                6+ years in analytics and BI roles. Loves making data simple and
                impactful.
              </p>
              <p className="text-yellow-700 text-sm mt-2 font-medium">
                &quot;We&#39;ll focus on clarity, not just code.&quot;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBILITY */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Flexible Learning</h3>
        <p className="text-lg text-slate-700 mb-6">
          Full-time job? Family responsibilities? No problem. This course adapts
          to your pace — with support when you need it.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          {[
            " Weekly 1-on-1 check-ins",
            " Go at your own speed",
            " Lifetime access to content",
          ].map((line, i) => (
            <div
              key={i}
              className="bg-yellow-100 px-4 py-3 rounded-xl font-medium text-yellow-800"
            >
              {line}
            </div>
          ))}
        </div>
      </section>

      {/* DIFFERENTIATORS */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-8">
          What Makes Studira Different
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            "1-on-1 guidance, not generic videos",
            "Mentor feedback on every project",
            "Portfolio-first mindset",
            "Designed for real beginners",
            "Mastery over memorization",
            "Supportive, not stressful",
          ].map((point, i) => (
            <div key={i} className="p-6 bg-yellow-100/40 rounded-xl shadow">
              <p className="text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#CA8A04] text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Become a Confident Data Analyst
        </h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Learn real skills, build real projects, and launch your data career
          with guidance that works.
        </p>
        <Link
          href="/pricing"
          className="bg-white text-[#CA8A04] font-semibold px-8 py-4 rounded-md shadow hover:bg-yellow-100 transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}