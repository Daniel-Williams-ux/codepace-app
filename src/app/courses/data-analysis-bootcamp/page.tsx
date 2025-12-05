"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function DataBootcampPage() {
  return (
    <>
      <Head>
        <title>
          Data Analysis Course for Beginners | Python · SQL · Analytics | Studira
        </title>
        <meta
          name="description"
          content="Learn data analysis from scratch with personal mentorship. Master Python, SQL, data cleaning, visualization, and real portfolio projects — at your own pace."
        />
        <link
          rel="canonical"
          href="https://studira.tech/courses/data-analysis-bootcamp"
        />
      </Head>

      <main className="bg-white text-slate-800">

        {/* HERO */}
        <section className="px-6 py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#CA8A04] mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Data Analysis Bootcamp
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-slate-700">
                Learn Python · SQL · Visualization · Analytics
              </span>
            </motion.h1>

            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Master the foundations of data cleaning, analysis, and visualization —
              with real mentorship and portfolio-driven learning. Beginner-friendly,
              flexible, and designed for real results.
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
          <h2 className="text-3xl font-semibold mb-4 text-[#CA8A04]">
            Why Learn Data Analysis?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Data analysts help companies understand customers, optimize
            operations, and make smarter decisions. It's one of the most
            beginner-friendly tech roles — remote-friendly, well paid, and in
            constant demand across every industry.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-yellow-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-[#CA8A04]">
              What You’ll Learn (Beginner → Confident Analyst)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Python for Data Analysis (Beginner-Friendly)",
                "Data Cleaning & Transformation with Pandas",
                "SQL Queries, Aggregations & Joins",
                "Visualization with Matplotlib & Seaborn",
                "Exploratory Data Analysis (EDA) Techniques",
                "Storytelling with Data & Portfolio Projects",
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
          <h3 className="text-2xl font-semibold mb-4 text-[#CA8A04]">
            Who This Bootcamp Is For
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Beginners entering tech with no coding background</li>
            <li>Career switchers exploring data paths</li>
            <li>Analysts ready to upgrade from Excel to Python/SQL</li>
            <li>People preparing for data science or BI roles</li>
          </ul>
        </section>

        {/* CURRICULUM */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-[#CA8A04]">
              Curriculum Overview (Mastery-Based)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  stage: "Milestone 1",
                  content:
                    "Intro to Python, Jupyter Notebooks & analysis mindset.",
                },
                {
                  stage: "Milestone 2",
                  content:
                    "Data cleaning, missing values, transformations & Pandas workflows.",
                },
                {
                  stage: "Milestone 3",
                  content:
                    "SQL queries, JOINS, filtering, aggregations & database fundamentals.",
                },
                {
                  stage: "Milestone 4",
                  content:
                    "Visualization (Matplotlib, Seaborn) + Exploratory Data Analysis.",
                },
                {
                  stage: "Milestone 5",
                  content:
                    "Capstone Project: Analyze a real dataset & derive insights.",
                },
                {
                  stage: "Milestone 6",
                  content:
                    "Portfolio development, GitHub setup & career guidance.",
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
              Move forward only when you’re confident. Mastery-first. No rushing.
            </p>
          </div>
        </section>

        {/* PROJECTS (UPGRADED LIKE OTHER COURSES) */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-[#CA8A04]">
            Projects You’ll Build
          </h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build practical data projects that prove your skills to employers —
            from cleaning messy datasets to analyzing business patterns.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Data Cleaning & Transformation Challenge",
                desc: "Work with a messy real dataset. Fix missing values, correct inconsistencies, standardize formats, and prepare it for analysis using Pandas.",
              },
              {
                title: "SQL Business Insights Dashboard",
                desc: "Use SQL queries to answer real business questions: revenue trends, customer behavior, segmentation, and operational performance.",
              },
              {
                title: "Exploratory Data Analysis + Visual Report",
                desc: "Perform EDA using Python visualizations, uncover trends, outliers, and correlations. Present findings in a clean, professional portfolio report.",
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
            <h3 className="text-2xl font-semibold mb-4 text-[#CA8A04]">
              Meet Your Mentor
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn from an experienced data analyst who's worked across fintech,
              healthcare, and consumer tech. Get practical insights and real
              professional guidance.
            </p>

            <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <div>
                <p className="text-slate-800 font-semibold">Your Data Mentor</p>
                <p className="text-slate-600 text-sm">
                  6+ years in analytics & BI. Focused on helping beginners build
                  confidence and clarity with data.
                </p>
                <p className="text-yellow-700 text-sm mt-2 font-medium">
                  “Good analysis is clarity — not just code.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBILITY */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-[#CA8A04]">
            Flexible Learning
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Learn evenings, weekends, or slowly over months — your mentor adapts
            to your schedule. No deadlines. No pressure.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              "✅ Weekly 1-on-1 check-ins",
              "✅ Go at your own pace",
              "✅ Lifetime access to materials",
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
          <h3 className="text-2xl font-semibold mb-8 text-[#CA8A04]">
            What Makes Studira Different
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "1-on-1 personalized mentorship",
              "Feedback on every project",
              "Portfolio-focused training",
              "Beginner-friendly approach",
              "Mastery over memorization",
              "Supportive and human-centered",
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
            Learn practical skills, build real projects, and launch your data
            career with personal mentorship and a mastery-first approach.
          </p>

          <Link
            href="/pricing"
            className="bg-white text-[#CA8A04] font-semibold px-8 py-4 rounded-md shadow hover:bg-yellow-100 transition"
          >
            Apply Now
          </Link>
        </section>

        {/* INTERNAL LINKS (SEO BOOST) */}
        <section className="py-12 px-6 text-center text-sm text-slate-500">
          <p>Explore more programs:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/courses/ai-ml" className="hover:text-yellow-700 underline">
              AI & Machine Learning
            </Link>
            <Link href="/courses/frontend" className="hover:text-yellow-700 underline">
              Frontend Engineering
            </Link>
            <Link href="/courses/backend" className="hover:text-yellow-700 underline">
              Backend Engineering
            </Link>
            <Link href="/courses/cloud-bootcamp" className="hover:text-yellow-700 underline">
              Cloud Engineering
            </Link>
          </div>
        </section>

      </main>
    </>
  );
}