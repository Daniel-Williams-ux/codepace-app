"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function BackendPage() {
  return (
    <>
      <Head>
        <title>
          Backend Engineering Course for Beginners | 1-on-1 Mentorship | Studira
        </title>
        <meta
          name="description"
          content="Learn backend development from scratch with a personal mentor. Build real APIs, master Node.js, databases, authentication, and deployment — at your own pace."
        />
        <link rel="canonical" href="https://studira.tech/courses/backend" />
      </Head>

      <main className="bg-white text-slate-800">
        {/* HERO */}
        <section className="px-6 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
          <div className="max-w-3xl mx-auto">
            <motion.h1
              className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Backend Engineering Bootcamp
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-slate-700">
                Learn APIs · Databases · Architecture · Deployment
              </span>
            </motion.h1>

            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Master backend development with real human mentorship. Learn
              Node.js, databases, authentication, and scalable backend systems —
              step by step, at your own pace. No experience required.
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

        {/* WHY BACKEND */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Why Learn Backend Engineering?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Backend developers build the engines that power modern applications.
            Every product — mobile apps, web apps, SaaS platforms — relies on
            secure, scalable backend systems. This skill is high-demand,
            well-paid, and perfect for career switchers.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-blue-900">
              What You’ll Learn (Beginner → Job-Ready Backend Developer)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Node.js & Express Framework",
                "Designing REST APIs",
                "Authentication, Sessions & JWTs",
                "SQL & NoSQL Databases (PostgreSQL & MongoDB)",
                "Docker, Containerization & Deployment",
                "Backend Architecture & Scalable System Design",
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
            <li>Total beginners with no prior coding skills</li>
            <li>Frontend developers expanding to full-stack</li>
            <li>Career switchers entering backend roles</li>
            <li>Anyone excited to build real systems, APIs, and infrastructure</li>
          </ul>
        </section>

        {/* CURRICULUM */}
        <section className="bg-gray-50 py-16 px-6">
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-semibold text-center mb-8 text-blue-900">
              Curriculum Overview (Mastery-Based Learning)
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  stage: "Milestone 1",
                  content: "JavaScript Fundamentals + Intro to Node.js runtime",
                },
                {
                  stage: "Milestone 2",
                  content: "Building REST APIs with Express — routes, controllers, middleware",
                },
                {
                  stage: "Milestone 3",
                  content:
                    "Authentication Deep Dive — JWTs, sessions, cookies, access control",
                },
                {
                  stage: "Milestone 4",
                  content:
                    "Databases (SQL & NoSQL) — schemas, relationships, indexing & querying",
                },
                {
                  stage: "Milestone 5",
                  content: "Docker, CI/CD basics & deploying real backend services",
                },
                {
                  stage: "Milestone 6",
                  content:
                    "Final Project + Portfolio: system design, documentation & GitHub polish",
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
              Move forward only when confident. No deadlines. No stress. Total
              support from a real mentor.
            </p>
          </div>
        </section>

        {/* PROJECTS (Upgraded) */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Projects You’ll Build
          </h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build real backend systems that employers care about — including
            authentication, APIs, databases, containerization and deployment.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Secure Auth API + Admin Dashboard",
                desc: "Implement a full authentication system with JWTs, sessions, salted hashing, protected routes, and role-based permissions. You’ll also build a small admin interface that consumes your API.",
              },
              {
                title: "RESTful Blog Platform (PostgreSQL)",
                desc: "Create a production-ready CRUD API using Express and PostgreSQL. Includes relationships, pagination, validation, error handling, file structure best practices, and deployment to a live server.",
              },
              {
                title: "Advanced Task Manager (MongoDB + Filtering System)",
                desc: "Design a NoSQL schema, build complex queries, integrate Mongoose models, and implement filtering, sorting, search, user-level permissions, and deployment with Docker.",
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
            You will graduate with real projects, real deployments, and a
            job-ready backend portfolio.
          </p>
        </section>

        {/* MENTOR SPOTLIGHT */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              Meet Your Mentor
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Work 1-on-1 with a real engineer who guides you through every
              challenge. This is mentorship built for confidence, clarity, and
              real-world skills.
            </p>

            <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <div>
                <p className="text-slate-800 font-semibold">Your Backend Coach</p>
                <p className="text-slate-600 text-sm">
                  5+ years building backend systems, APIs, databases, and
                  services. Passionate about coaching beginners and creating
                  clean, scalable architecture.
                </p>
                <p className="text-blue-700 text-sm mt-2 font-medium">
                  “Backend isn’t about memorizing — it’s about building with
                  confidence.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FLEXIBLE SCHEDULING */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Flexible Scheduling
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Learn at the times that work for you — evenings, weekends, or slow
            and steady. Your mentor adapts to your life, not the other way
            around.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              "✅ Evenings & weekends friendly",
              "✅ Learn faster — no waiting for cohorts",
              "✅ Take breaks anytime — progress never expires",
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

        {/* MASTERY-FIRST */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Mastery Comes First
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            No rushing. No deadlines. No pressure. You move forward only when
            you fully understand — with unlimited feedback, corrections, and
            practice.
          </p>

          <div className="flex justify-center">
            <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
              No Deadlines · Unlimited Repeats · Human Feedback
            </div>
          </div>
        </section>

        {/* FAQ SECTION */}
        <section className="bg-blue-50 py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center text-blue-900">
            Backend Bootcamp FAQs
          </h3>

          <div className="space-y-6 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need to be good at math?
              </h4>
              <p>
                Not at all. Backend development focuses on logic, structure, and
                real-world systems — not advanced mathematics. If you can follow
                instructions, think clearly, and enjoy problem-solving, you can
                learn backend.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Is backend harder than frontend?
              </h4>
              <p>
                They require different strengths. Backend focuses more on data,
                problem-solving, and reliability. We teach everything step-by-step
                with real mentorship, so beginners succeed too.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Will I need to learn DevOps or cloud tools?
              </h4>
              <p>
                You’ll learn the essentials — Docker, basic cloud deployment,
                and CI/CD workflows — enough to deploy real backend services,
                without needing deep cloud expertise.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need to finish in a certain number of weeks?
              </h4>
              <p>
                No deadlines here. You learn at your own pace, whether fast or
                slow. Your mentor stays with you until you’re truly confident,
                not until a calendar runs out.
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
              "1-on-1 mentoring from real backend engineers",
              "Move at your own pace — no pressure, no rush",
              "Build a portfolio of real backend systems",
              "Human support — not automated grading",
              "Custom learning paths for each student",
              "Direct access to your mentor anytime you need help",
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
            Start Your Backend Journey Today
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Build real backend systems, real APIs, and real skills — with full
            human support and no deadlines. Learn the right way, at your pace.
          </p>

          <Link
            href="/pricing"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
          >
            Enroll Now
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
            <Link href="/courses/frontend" className="hover:text-blue-700 underline">
              Frontend Engineering
            </Link>
            <Link href="/courses/ai-ml" className="hover:text-blue-700 underline">
              AI & Machine Learning
            </Link>
            <Link href="/courses/cloud-bootcamp" className="hover:text-blue-700 underline">
              Cloud Engineering
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}