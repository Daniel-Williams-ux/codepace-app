"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function BackendPage() {
  return (
    <main className="bg-white text-slate-800">
      {/* HERO */}
      <section className="px-6 py-20 bg-gradient-to-b from-blue-50 to-white text-center">
        <div className="max-w-3xl mx-auto">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#1D4ED8] mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Backend Engineering Bootcamp
          </motion.h1>
          <p className="text-lg text-slate-700 mb-6">
            Learn Node.js, APIs, databases, authentication, and more — taught by
            real humans. Go from beginner to backend job-ready with
            confidence-first learning and full support.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/pricing"
              className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-3 rounded-md shadow transition"
            >
              Enroll Now
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
        <h2 className="text-3xl font-semibold mb-4">Why Learn Backend?</h2>
        <p className="text-lg text-slate-700">
          Backend developers power the logic, data, and infrastructure behind
          every modern app. It’s a foundational, high-demand role across tech.
        </p>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">What You’ll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Node.js & Express",
              "REST APIs & Authentication",
              "PostgreSQL & MongoDB",
              "Docker & Deployment",
              "Testing & Debugging",
              "Backend Architecture & Design Patterns",
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
          <li>Career switchers with no prior coding experience</li>
          <li>Frontend developers ready to go full stack</li>
          <li>Tech enthusiasts interested in APIs and databases</li>
          <li>Anyone serious about launching a backend career</li>
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
                content: "JavaScript Fundamentals + Node.js Intro",
              },
              {
                stage: "Milestone 2",
                content: "Building REST APIs with Express",
              },
              {
                stage: "Milestone 3",
                content: "Authentication, Sessions, and JWTs",
              },
              {
                stage: "Milestone 4",
                content: "Databases: SQL & NoSQL (Postgres & MongoDB)",
              },
              {
                stage: "Milestone 5",
                content: "Docker, Testing, and Deployment",
              },
              {
                stage: "Milestone 6",
                content: "Final Project, Portfolio & Career Prep",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#1D4ED8]"
              >
                <h4 className="font-bold mb-1 text-[#1D4ED8]">{item.stage}</h4>
                <p className="text-slate-700">{item.content}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-slate-600 text-sm mt-8 max-w-2xl mx-auto">
            You’ll master each milestone at your own pace — with no pressure and
            no deadlines. Just confident, lasting skill-building.
          </p>
        </div>
      </section>

      {/* STUDENT PROJECT SHOWCASE */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">What You will Build</h3>
        <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
          These are example projects you will create in the backend bootcamp —
          real-world APIs, databases, and backend systems built with production
          tools.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Auth API + Admin Dashboard",
              desc: "Build a secure authentication system with JWTs, sessions, and role-based access. Includes protected routes and an admin interface.",
            },
            {
              title: "RESTful Blog Platform",
              desc: "A complete CRUD API with Express and PostgreSQL, complete with pagination, error handling, and deployment.",
            },
            {
              title: "Task Manager with MongoDB",
              desc: "Design a NoSQL schema, integrate Mongoose, and build a clean REST API with filtering, sorting, and auth.",
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
          Every project comes with full code reviews, feedback, and deployment
          help. You will graduate with a GitHub portfolio and real-world backend
          skills.
        </p>
      </section>

      {/* MENTOR SPOTLIGHT */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
          <p className="text-lg text-slate-700 mb-6">
            Your guide isn’t just some video — you’ll work 1-on-1 with a real
            engineer who’s been where you are and knows how to help you grow. We
            don’t just teach backend — we coach, support, and cheer you on.
          </p>
          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <div>
              <p className="text-slate-800 font-semibold">Your Backend Coach</p>
              <p className="text-slate-600 text-sm">
                5+ years in backend development across startups & enterprise.
                Loves PostgreSQL, clean architecture, and seeing students ship
                their first real API.
              </p>
              <p className="text-blue-700 text-sm mt-2 font-medium">
                “My job is to help you stop doubting and start shipping.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBLE SCHEDULE EXAMPLES */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Flexible Scheduling</h3>
        <p className="text-lg text-slate-700 mb-6">
          Whether you’re working full-time, raising kids, or learning part-time,
          our backend program adapts to your life. You set the pace.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          {[
            "✅ Nights & Weekends Friendly",
            "✅ Go faster if you want — no waiting on cohorts",
            "✅ Take breaks as needed — your progress is saved",
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

      {/* MASTERY-FIRST LEARNING */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Mastery Comes First</h3>
        <p className="text-lg text-slate-700 mb-6">
          We don’t push you ahead until you’re confident. This is learning
          without deadlines, stress, or racing the clock. True mastery takes
          time — and that’s okay.
        </p>
        <div className="flex justify-center">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            No Deadlines · Unlimited Repeats · Human Feedback
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="bg-blue-50 py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Backend Bootcamp FAQs
        </h3>
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Do I need to be good at math?
            </h4>
            <p>
              Nope. Backend engineering is about logic, structure, and systems —
              not calculus. If you can follow a recipe and fix a broken IKEA
              shelf, you can learn backend.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Is backend harder than frontend?
            </h4>
            <p>
              Not harder — just different. Backend focuses more on data, logic,
              and reliability. We teach it step by step, with real support.
              You’ll get it.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Will I need to learn DevOps or cloud stuff?
            </h4>
            <p>
              We’ll teach you just enough infrastructure to be dangerous. You’ll
              deploy real projects with Docker and cloud tools — no deep AWS
              experience needed.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Do I need to finish in a certain number of weeks?
            </h4>
            <p>
              Nope. There are no hard deadlines here. You move forward when
              you’re confident — not when the calendar says so. This is
              mastery-first learning.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT MAKES US DIFFERENT */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-8">
          What Makes Studira Different
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            "1-on-1 mentoring from real backend engineers",
            "Learn at your own pace — no stress, no rush",
            "Real-world backend project portfolio",
            "Supportive feedback — not robotic grading",
            "Custom learning paths based on your pace",
            "Need help? Book a human call anytime",
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
        <p className="text-lg mb-6">
          Learn backend development with full human support. Build real APIs,
          real apps, and a real future — with no pressure and no deadlines.
        </p>
        <Link
          href="/pricing"
          className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
        >
          Enroll Now
        </Link>
      </section>
    </main>
  );
}
