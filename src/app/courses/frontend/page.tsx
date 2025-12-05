"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function FrontendPage() {
  return (
    <>
      <Head>
        <title>
          Frontend Engineering Bootcamp | HTML · CSS · JavaScript · React | Studira
        </title>
        <meta
          name="description"
          content="Learn modern frontend development with 1-on-1 mentorship. Master HTML, CSS, JavaScript, React, responsive design, APIs, and real-world projects — at your own pace."
        />
        <link rel="canonical" href="https://studira.tech/courses/frontend" />
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
              Frontend Engineering Bootcamp
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-slate-700">
                Learn HTML · CSS · JavaScript · React — Beginner to Job-Ready
              </span>
            </motion.h1>

            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Build beautiful, responsive apps and websites from scratch —
              with personal mentorship, mastery-paced learning, and real-world
              projects that employers want to see.
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
          <h2 className="text-3xl font-semibold mb-4 text-[#1D4ED8]">
            Why Learn Frontend Development?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Frontend developers shape the web. From animations to UI layouts to
            interactive apps, they bring digital ideas to life. It’s creative,
            high-demand, remote-friendly — and one of the easiest ways to break
            into tech.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-blue-900">
              What You’ll Learn (Beginner → Confident Developer)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "HTML, CSS & Responsive Layouts",
                "JavaScript (ES6+) & DOM Manipulation",
                "React, Hooks & Component Architecture",
                "State Management & API Integration",
                "Git, GitHub & Version Control",
                "Deploying Websites & Apps (Netlify, Vercel)",
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
            <li>Total beginners entering tech for the first time</li>
            <li>Junior devs who want stronger fundamentals</li>
            <li>Designers who want to build production interfaces</li>
            <li>Anyone switching careers into frontend engineering</li>
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
                  stage: "Milestone 1",
                  content:
                    "HTML, CSS, Flexbox, Grid, and Responsive Design fundamentals.",
                },
                {
                  stage: "Milestone 2",
                  content:
                    "JavaScript basics, DOM manipulation, events, and browser APIs.",
                },
                {
                  stage: "Milestone 3",
                  content:
                    "Advanced JS, Async programming, APIs, Git & GitHub workflows.",
                },
                {
                  stage: "Milestone 4",
                  content:
                    "React, Hooks, components, props/state, forms & state management.",
                },
                {
                  stage: "Milestone 5",
                  content:
                    "Capstone: Full React application + professional portfolio site.",
                },
                {
                  stage: "Milestone 6",
                  content:
                    "Mock interviews, resume help, and job-ready preparation.",
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
              You move forward only when confident. No deadlines. No rushing.
              Just true mastery.
            </p>
          </div>
        </section>

        {/* PROJECTS (UPGRADED LIKE BACKEND/AI-ML) */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Projects You’ll Build
          </h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build beautiful, functional web apps that prove you’re job-ready.
            Each project comes with personal feedback and guidance.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Responsive Blog Platform",
                desc: "Build a fully responsive blog layout using HTML, CSS, Grid, and Flexbox — complete with theme colors and typography.",
              },
              {
                title: "Weather App (API + Async JS)",
                desc: "Use fetch(), async/await, error handling, and clean UI components to pull real data from an external API.",
              },
              {
                title: "React Todo Dashboard",
                desc: "A complete React application with custom components, local storage, filtering, and reusable UI patterns.",
              },
              {
                title: "Startup Landing Page",
                desc: "Design and build a professional landing page with animations, CTA sections, and clean mobile-first layout.",
              },
              {
                title: "Recipe Search App",
                desc: "Use React + APIs to build a fast search interface, display results, handle loading states, and manage state cleanly.",
              },
              {
                title: "Personal Portfolio Website",
                desc: "Deploy your own professional portfolio on Netlify or Vercel — showcasing your frontend apps to employers.",
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
        </section>

        {/* MENTOR */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              Meet Your Mentor
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn from a frontend engineer who’s built real production UIs
              across startups and enterprise. You get clear guidance, code
              reviews, and support every step of the way.
            </p>

            <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
              <div className="w-24 h-24 bg-gray-200 rounded-full" />
              <div>
                <p className="text-slate-800 font-semibold">Your Frontend Coach</p>
                <p className="text-slate-600 text-sm">
                  5+ years building modern React apps. Loves teaching clean UI,
                  accessibility, and component thinking.
                </p>
                <p className="text-blue-700 text-sm mt-2 font-medium">
                  “You don’t just learn — you ship.”
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 px-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            Frontend Bootcamp FAQs
          </h3>

          <div className="space-y-6 text-slate-700">
            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Do I need to know design?
              </h4>
              <p>
                No! You’ll learn practical UI principles, layout systems,
                spacing, and how to make clean modern interfaces without being a
                designer.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Is frontend easier than backend?
              </h4>
              <p>
                Frontend has its own complexity — but we break it down simply.
                You’ll learn both UI design structure and deeper logic (JS,
                APIs, React).
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Will I learn responsive/mobile layouts?
              </h4>
              <p>
                Yes — every project is mobile-first, using Flexbox, Grid, and
                real-world responsive techniques.
              </p>
            </div>

            <div>
              <h4 className="font-bold text-slate-800 mb-2">
                Can this help me get a job?
              </h4>
              <p>
                Absolutely — if you show up and complete your projects, we’ll
                help you build a strong portfolio, refine your resume, and
                prepare for interviews.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6 bg-[#1D4ED8] text-white text-center">
          <h3 className="text-3xl font-bold mb-4">
            Start Your Frontend Journey Today
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Learn real skills, build real projects, and grow with real
            mentorship — at your own pace.
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
            <Link href="/courses/ai-ml" className="hover:text-blue-700 underline">
              AI & Machine Learning
            </Link>
            <Link href="/courses/data-analysis-bootcamp" className="hover:text-blue-700 underline">
              Data Analysis
            </Link>
            <Link href="/courses/backend" className="hover:text-blue-700 underline">
              Backend Engineering
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