"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function AIMLPage() {
  return (
    <>
      <Head>
        <title>AI & ML Bootcamp | Studira</title>
        <meta
          name="description"
          content="Master AI and Machine Learning at your pace with personalized, one-on-one mentorship on Studira."
        />
        <link rel="canonical" href="https://studira.tech/courses/ai-ml" />
      </Head>
      <main className="bg-white text-slate-800">
        {/* HERO */}
        <section className="px-6 py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI/ML Fundamentals Bootcamp
            </motion.h1>
            <p className="text-lg text-slate-700 mb-6">
              Learn Python, machine learning, and real-world AI workflows — with
              1-on-1 mentorship and a mastery-first pace. No stress. No burnout.
              Just results.
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
                className="border border-[#1D4ED8] text-[#1D4ED8] px-6 py-3 rounded-md font-semibold hover:bg-blue-50 transition"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </section>

        {/* WHY AI/ML */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4">Why Learn AI/ML?</h2>
          <p className="text-lg text-slate-700">
            AI is transforming every industry — from finance to education. But
            most courses are overwhelming, academic, and isolating. We make it
            practical, personalized, and fully human.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8">What You’ll Learn</h3>
            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Python for Data & ML",
                "Pandas, Numpy, Matplotlib",
                "Scikit-learn & Model Training",
                "Data Cleaning & Feature Engineering",
                "Model Evaluation & Tuning",
                "End-to-End AI Projects",
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
            <li>Career switchers with zero coding or math background</li>
            <li>Developers curious about machine learning</li>
            <li>Non-technical folks exploring the AI space</li>
            <li>Anyone eager to build real AI projects</li>
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
                  content: "Python Programming for ML Foundations",
                },
                {
                  stage: "Milestone 2",
                  content: "Data Analysis with Pandas & Visualization Tools",
                },
                {
                  stage: "Milestone 3",
                  content: "Supervised & Unsupervised Learning",
                },
                {
                  stage: "Milestone 4",
                  content: "Model Evaluation, Tuning, and Deployment",
                },
                {
                  stage: "Milestone 5",
                  content: "Capstone Project: Real AI Workflow",
                },
                {
                  stage: "Milestone 6",
                  content: "Portfolio, GitHub, Resume & Career Support",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#1D4ED8]"
                >
                  <h4 className="font-bold mb-1 text-[#1D4ED8]">
                    {item.stage}
                  </h4>
                  <p className="text-slate-700">{item.content}</p>
                </div>
              ))}
            </div>
            <p className="text-center text-slate-600 text-sm mt-8 max-w-2xl mx-auto">
              Move at your own pace. We won’t move forward until you’re
              confident — no pressure, no rushing.
            </p>
          </div>
        </section>

        {/* STUDENT PROJECT SHOWCASE */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Projects You’ll Build</h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build complete, real-world AI projects with mentorship and reviews.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Titanic Survival Prediction",
                desc: "Clean real data, train classification models, and evaluate results — step by step.",
              },
              {
                title: "House Price Predictor",
                desc: "Use regression models to predict prices from structured data. Deploy your model online.",
              },
              {
                title: "Customer Segmentation",
                desc: "Apply unsupervised learning to identify customer groups using real-world datasets.",
              },
            ].map((proj, i) => (
              <div key={i} className="bg-blue-50 p-5 rounded-xl shadow-sm">
                <h4 className="font-semibold text-[#1D4ED8] mb-2">
                  {proj.title}
                </h4>
                <p className="text-slate-700">{proj.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-slate-600 text-sm max-w-xl mx-auto">
            Get full code reviews, deployment help, and a GitHub-ready
            portfolio.
          </p>
        </section>

        {/* MENTOR SPOTLIGHT */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn from engineers who’ve worked in AI — not just watched it
              from the sidelines. Real mentorship. Real experience. Real
              results.
            </p>
            <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <div>
                <p className="text-slate-800 font-semibold">
                  Your AI/ML Mentor
                </p>
                <p className="text-slate-600 text-sm">
                  7+ years in ML, data science, and edtech. Passionate about
                  making machine learning human-first and practical.
                </p>
                <p className="text-blue-700 text-sm mt-2 font-medium">
                  “We don’t do gatekeeping. We do growth.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBLE SCHEDULE */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Flexible Scheduling</h3>
          <p className="text-lg text-slate-700 mb-6">
            Whether you’re working full-time or raising kids — this bootcamp
            flexes with your life. You’re in control.
          </p>
          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              "✅ Learn on evenings or weekends",
              "✅ No cohort deadlines or rush",
              "✅ Take breaks anytime — we’ll be here",
            ].map((line, i) => (
              <div
                key={i}
                className="bg-blue-100 px-4 py-3 rounded-xl font-medium text-blue-800"
              >
                {line}
              </div>
            ))}
          </div>
        </section>

        {/* MASTERY FIRST */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">Mastery Over Speed</h3>
          <p className="text-lg text-slate-700 mb-6">
            No pressure. No rushing. Just true understanding and
            confidence-first learning. Repeat as needed — we’ll never leave you
            behind.
          </p>
          <div className="flex justify-center">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              1-on-1 Support · No Deadlines · Repeat Until Mastery
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-blue-50 py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            AI/ML Bootcamp FAQs
          </h3>
          <div className="space-y-6 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need a math background?
              </h4>
              <p>
                Nope! We focus on practical understanding and workflows. You’ll
                use tools, not derive formulas.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Is this too advanced for beginners?
              </h4>
              <p>
                We start from scratch. No coding experience? No problem. You’ll
                get personal support every step.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Will I learn deep learning or just ML?
              </h4>
              <p>
                This course focuses on core ML skills first. You’ll be ready for
                deep learning afterward — and we’ll help guide that journey too.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need to finish in a fixed number of weeks?
              </h4>
              <p>
                Not at all. There’s no fixed timeline. Learn at your pace — slow
                or fast — with full support.
              </p>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">
            What Makes Studira Different
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "1-on-1 mentoring from ML professionals",
              "Learn at your pace — not someone else’s",
              "Real AI projects with real feedback",
              "Human support, not robotic grading",
              "Career prep and project portfolio",
              "Scholarships for underserved learners",
            ].map((point, i) => (
              <div key={i} className="p-6 bg-blue-100/40 rounded-xl shadow">
                <p className="text-slate-800">{point}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#1D4ED8] text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Learn AI with Confidence — at Your Own Pace
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Build a future in machine learning — with real support, real
            projects, and zero pressure. This is how it should feel to learn.
          </p>
          <Link
            href="/pricing"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
          >
            Apply Now
          </Link>
        </section>
      </main>
    </>
  );
}