'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Head from 'next/head';

export default function AIMLPage() {
  return (
    <>
      <Head>
        <title>
          AI & Machine Learning Course for Beginners | 1-on-1 Mentorship |
          Studira
        </title>
        <meta
          name="description"
          content="Learn AI and Machine Learning from scratch with a personal mentor. Beginner-friendly Python, ML fundamentals, projects, and mastery-paced learning. Perfect for career switchers and early learners."
        />
        <link rel="canonical" href="https://studira.tech/courses/ai-ml" />
      </Head>

      <main className="bg-white text-slate-800">
        {/* HERO */}
        <section className="px-6 py-20 bg-gradient-to-b from-yellow-50 to-white text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              AI & Machine Learning Fundamentals
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-slate-700">
                Beginner-Friendly · Mentor-Led · Mastery-Paced
              </span>
            </motion.h1>

            <p className="text-lg text-slate-700 mb-6">
              Learn Python, data analysis, and machine learning with personal,
              1-on-1 mentorship. No experience required — we teach you
              step-by-step until you’re confident.
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
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Why Learn AI & Machine Learning?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            AI is one of the fastest-growing fields in tech. But most ML courses
            are overwhelming, overly theoretical, or designed for people with
            heavy math backgrounds. Studira makes AI accessible with practical
            lessons, real mentorship, and a pace that fits your life.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-blue-900">
              What You’ll Learn (Beginner → Confident ML Practitioner)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                'Python for Data & ML (Beginner Friendly)',
                'Pandas, Numpy, and Data Manipulation',
                'Supervised & Unsupervised Learning',
                'Feature Engineering & Model Tuning',
                'Model Evaluation & Real Workflows',
                'End-to-End AI Projects for Your Portfolio',
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
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Who This Bootcamp Is For
          </h3>
          <ul className="list-disc pl-6 space-y-2 text-slate-700">
            <li>Complete beginners with zero coding or math background</li>
            <li>Career switchers exploring ML, data, or AI paths</li>
            <li>Developers who want to add ML to their skillset</li>
            <li>Anyone curious about real AI projects and workflows</li>
          </ul>
        </section>

        {/* CURRICULUM */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-900">
              Curriculum Overview (Mastery-Based)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  stage: 'Milestone 1',
                  content: 'Python Programming for ML Foundations',
                },
                {
                  stage: 'Milestone 2',
                  content: 'Data Analysis with Pandas & Visualization Tools',
                },
                {
                  stage: 'Milestone 3',
                  content: 'Supervised & Unsupervised Learning Techniques',
                },
                {
                  stage: 'Milestone 4',
                  content: 'Model Evaluation, Optimization & Deployment Basics',
                },
                {
                  stage: 'Milestone 5',
                  content: 'Capstone Project: Build a Complete AI System',
                },
                {
                  stage: 'Milestone 6',
                  content: 'Portfolio, GitHub, Resume & Career Guidance',
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
              You move forward only when confident. No deadlines. No rushing. No
              falling behind.
            </p>
          </div>
        </section>

        {/* PROJECTS */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Projects You’ll Build
          </h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build practical projects that demonstrate real AI/ML understanding —
            perfect for your portfolio.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: 'Titanic Survival Prediction',
                desc: 'Learn classification, feature engineering, and evaluation using real data.',
              },
              {
                title: 'House Price Prediction',
                desc: 'Build regression models and deploy your project online.',
              },
              {
                title: 'Customer Segmentation',
                desc: 'Apply clustering techniques to uncover insights from real datasets.',
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
            You’ll get continuous feedback, code reviews, and help preparing
            your portfolio for employers.
          </p>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-blue-50 py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-900">
            AI/ML Bootcamp FAQs
          </h3>

          <div className="space-y-6 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need a math background?
              </h4>
              <p>
                Nope! We focus on practical understanding and real workflows.
                You’ll use tools, visualizations, and guided explanations — not
                heavy math or formulas.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Is this too advanced for beginners?
              </h4>
              <p>
                Not at all. We start from scratch with Python and build upward.
                No coding experience? No problem — your mentor teaches you step
                by step until you’re confident.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Will I learn deep learning or just ML?
              </h4>
              <p>
                This bootcamp focuses on core ML skills first. Once you’re
                confident, your mentor can guide you into deep learning, neural
                networks, and more advanced topics.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need to finish in a fixed number of weeks?
              </h4>
              <p>
                No deadlines. No cohort. No stress. You learn at your own pace —
                whether that’s fast, slow, or somewhere in between. We stay with
                you until mastery.
              </p>
            </div>
          </div>
        </section>

        {/* DIFFERENTIATORS */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-blue-900">
            What Makes Studira Different
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              '1-on-1 Mentorship From Real ML Professionals',
              'Mastery-Paced Learning — Move When Ready',
              'Practical Projects, Not Just Theory',
              'Human Support (No AI-Only Teaching)',
              'Career Guidance & Portfolio Building',
              'Scholarships for High-Potential Learners',
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
            Start Your AI Journey — With a Mentor Who Teaches at Your Pace
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Whether you're a total beginner or switching careers, we’ll guide
            you step-by-step until you truly understand machine learning.
          </p>
          <Link
            href="/pricing"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
          >
            Apply Now
          </Link>
        </section>

        {/* INTERNAL LINKS (SEO BOOST) */}
        <section className="py-12 px-6 text-center text-sm text-slate-500">
          <p>Explore more programs:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/courses/data-analysis-bootcamp"
              className="hover:text-blue-700 underline"
            >
              Data Analysis
            </Link>
            <Link
              href="/courses/frontend"
              className="hover:text-blue-700 underline"
            >
              Frontend Engineering
            </Link>
            <Link
              href="/courses/backend"
              className="hover:text-blue-700 underline"
            >
              Backend Engineering
            </Link>
            <Link
              href="/courses/cloud-bootcamp"
              className="hover:text-blue-700 underline"
            >
              Cloud Engineering
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}