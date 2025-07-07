"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FrontendPage() {
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
            Frontend Engineering Bootcamp
          </motion.h1>
          <p className="text-lg text-slate-700 mb-6">
            Learn HTML, CSS, JavaScript, React and more — taught by real humans.
            Go from zero to job-ready with confidence-based learning and
            personal support.
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

      {/* WHY FRONTEND */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-4">Why Learn Frontend?</h2>
        <p className="text-lg text-slate-700">
          Frontend developers bring ideas to life on the web. It’s one of the
          most in-demand, creative, and rewarding tech careers today.
        </p>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">What You’ll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "HTML, CSS, Responsive Design",
              "Modern JavaScript (ES6+)",
              "React & React Hooks",
              "Git & GitHub",
              "APIs & JSON",
              "Portfolio Projects",
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
          <li>Career switchers with no tech background</li>
          <li>Junior developers looking to solidify frontend skills</li>
          <li>Designers wanting to code their own interfaces</li>
          <li>Anyone serious about launching a career in tech</li>
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
                content: "HTML, CSS, Layout & Responsive Design",
              },
              {
                stage: "Milestone 2",
                content: "JavaScript Basics + DOM Manipulation",
              },
              {
                stage: "Milestone 3",
                content: "Async JS, APIs, Git & GitHub",
              },
              {
                stage: "Milestone 4",
                content: "React, Hooks, Component Architecture",
              },
              {
                stage: "Milestone 5",
                content: "Capstone Projects & Portfolio Development",
              },
              {
                stage: "Milestone 6",
                content: "Mock Interviews, Resume, and Career Prep",
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
            You’ll progress through each milestone at your own pace — mastering
            each skill set before moving on. No pressure, no deadlines — just
            real growth.
          </p>
        </div>
      </section>

      {/* Mastery-First Learning */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Mastery Comes First</h3>
        <p className="text-lg text-slate-700 mb-6">
          At Studira, you don’t move on until you truly understand. No fixed
          deadlines, no pressure. You progress when you’re confident — with
          support every step of the way.
        </p>
        <div className="flex justify-center">
          <div className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-semibold">
            No Deadlines · Unlimited Repeats · Human Feedback
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
            "Real 1-on-1 teaching, not pre-recorded lectures",
            "Learn at your own pace without pressure",
            "Confidence-based learning: move forward only when ready",
            "No fillers. Just job-ready skills.",
            "Dedicated human mentor to support you all the way",
            "Scholarships available to support your journey",
          ].map((point, i) => (
            <div key={i} className="p-6 bg-blue-100/40 rounded-xl shadow">
              <p className="text-slate-800">{point}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHAT YOU’LL BUILD */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4">What You’ll Build</h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            These are the kinds of real-world projects you’ll create during the
            bootcamp — apps that show your skills with HTML, CSS, JS, React, and
            APIs.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "A mobile-friendly blog platform with custom CSS and flexbox layout",
              "A weather dashboard pulling live data from an API",
              "A to-do list app built with React and local storage",
              "A personal portfolio site deployed on Netlify",
              "A responsive landing page for a fake startup",
              "A recipe search app using async fetch and real APIs",
            ].map((item, i) => (
              <div
                key={i}
                className="bg-blue-50 p-6 rounded-xl shadow hover:shadow-md transition"
              >
                <p className="font-medium text-slate-800">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-slate-600 text-sm mt-8 max-w-xl mx-auto">
            Every project comes with 1-on-1 feedback and review — so you not
            only ship, but ship well.
          </p>
        </div>
      </section>

      {/* MENTOR SPOTLIGHT */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
          <p className="text-lg text-slate-700 mb-6">
            You won’t be learning alone. You’ll work directly with a mentor
            who’s built production-grade UIs — and knows how to guide beginners
            to real results.
          </p>
          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <div>
              <p className="text-slate-800 font-semibold">
                Your Frontend Coach
              </p>
              <p className="text-slate-600 text-sm">
                5+ years of professional UI/UX and React development. Passionate
                about accessibility, clean CSS, and helping learners gain real
                confidence.
              </p>
              <p className="text-blue-700 text-sm mt-2 font-medium">
                “I’m here to help you stop watching and start building.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-16 px-6 max-w-4xl mx-auto">
        <h3 className="text-2xl font-semibold mb-8 text-center">
          Frontend Bootcamp FAQs
        </h3>
        <div className="space-y-6 text-slate-700">
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Do I need to be “good at design” to do frontend?
            </h4>
            <p>
              Nope! We’ll teach you how to build well-structured, beautiful UIs
              even if you’ve never opened Figma. You’ll learn layout systems,
              spacing, color use, and best practices.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Is frontend easier than backend?
            </h4>
            <p>
              It’s not about easy vs hard — frontend has its own depth. You’ll
              learn both logic (JavaScript, APIs) and structure (HTML/CSS) in a
              way that feels approachable and fun.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Will I learn to build responsive/mobile layouts?
            </h4>
            <p>
              Absolutely. Every project includes mobile-first principles,
              flexbox/grid, and hands-on layout skills to make your sites look
              great on any screen.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-slate-800 mb-2">
              Can I really get a job from this?
            </h4>
            <p>
              Yes — if you show up, do the work, and ship strong projects, we’ll
              support you with portfolio prep, resume help, and mock interviews.
              Your work will speak for itself.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#1D4ED8] text-white text-center">
        <h3 className="text-3xl font-bold mb-4">
          Start Your Frontend Journey Today
        </h3>
        <p className="text-lg mb-6">
          Don’t just watch tutorials — get real mentorship, build real projects,
          and land real opportunities.
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