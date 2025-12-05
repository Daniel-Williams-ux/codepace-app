"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Head from "next/head";

export default function CloudBootcampPage() {
  return (
    <>
      <Head>
        <title>
          Cloud Engineering Course for Beginners | AWS · GCP · DevOps | Studira
        </title>
        <meta
          name="description"
          content="Learn Cloud Engineering and DevOps from scratch with personal mentorship. Master AWS, GCP, Docker, CI/CD, Terraform, and scalable cloud deployments at your own pace."
        />
        <link rel="canonical" href="https://studira.tech/courses/cloud-bootcamp" />
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
              Cloud Engineering Bootcamp
              <span className="block text-2xl md:text-3xl mt-2 font-semibold text-slate-700">
                AWS · GCP · DevOps · Infrastructure · Deployment
              </span>
            </motion.h1>

            <p className="text-lg text-slate-700 mb-6 max-w-2xl mx-auto">
              Become a cloud engineer by learning real infrastructure, CI/CD,
              security, automation, and deployment — with hands-on mentorship and
              mastery-paced learning. No experience required.
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

        {/* WHY CLOUD ENGINEERING */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-semibold mb-4 text-blue-900">
            Why Learn Cloud Engineering?
          </h2>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Cloud engineering is one of the fastest-growing fields in tech.
            Companies everywhere need people who can deploy apps, automate
            workflows, build scalable systems, and keep infrastructures secure.
            This bootcamp makes cloud skills accessible, practical, and
            beginner-friendly — with a mentor guiding you every step.
          </p>
        </section>

        {/* WHAT YOU'LL LEARN */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-5xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-8 text-blue-900">
              What You’ll Learn (Beginner → Cloud-Ready Engineer)
            </h3>

            <div className="grid md:grid-cols-3 gap-6 text-left">
              {[
                "Linux, CLI & System Basics",
                "Docker & Containerization",
                "AWS Core Services (EC2, S3, IAM, VPC)",
                "Google Cloud Essentials (Compute Engine, IAM, App Engine)",
                "Terraform & Infrastructure-as-Code Automation",
                "CI/CD Pipelines with GitHub Actions",
                "Monitoring, Logging, Scaling & Cloud Security",
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
            <li>Beginners entering DevOps or cloud careers</li>
            <li>Frontend/backend developers transitioning to infrastructure</li>
            <li>Career switchers seeking high-demand tech roles</li>
            <li>Startup founders needing reliable cloud deployments</li>
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
                    "Linux, CLI navigation, system basics, permissions, and Git version control.",
                },
                {
                  stage: "Milestone 2",
                  content:
                    "Docker fundamentals — images, containers, Dockerfiles, multi-container workflows.",
                },
                {
                  stage: "Milestone 3",
                  content:
                    "AWS services: EC2, IAM, VPC networking, S3 storage, monitoring with CloudWatch.",
                },
                {
                  stage: "Milestone 4",
                  content:
                    "Infrastructure-as-Code with Terraform — provisioning, variables, modules & automation.",
                },
                {
                  stage: "Milestone 5",
                  content:
                    "CI/CD pipelines with GitHub Actions — automated testing, building & deployment.",
                },
                {
                  stage: "Milestone 6",
                  content:
                    "Capstone Project: architect, deploy & document a full cloud application with career prep.",
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
              Move forward only when confident — with full support, no deadlines,
              and stress-free learning.
            </p>
          </div>
        </section>

        {/* PROJECTS (Upgraded Like AI-ML & Backend) */}
        <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-4 text-blue-900">
            Projects You’ll Build
          </h3>
          <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
            Build real cloud infrastructure — automated, secure, scalable, and
            production-ready. These projects become part of your cloud portfolio.
          </p>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              {
                title: "Dockerized Backend App (Local + Cloud)",
                desc: "Containerize a full backend service with Dockerfiles, multi-stage builds, environment configs, and cloud deployment. Learn how modern apps ship in containers.",
              },
              {
                title: "AWS Deployment with EC2 & VPC",
                desc: "Provision and secure cloud servers, configure networking, IAM roles, storage, monitoring, and deploy real services following AWS best practices.",
              },
              {
                title: "CI/CD Pipeline + Terraform Infrastructure",
                desc: "Automate the entire deployment process with GitHub Actions, Terraform, and cloud providers. Build infrastructure that updates itself when you push code.",
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
            You’ll graduate with real deployments, automation pipelines, and a
            portfolio showcasing true cloud engineering skills.
          </p>
        </section>

        {/* MENTOR */}
        <section className="bg-blue-50 py-16 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-semibold mb-4 text-blue-900">
              Meet Your Mentor
            </h3>
            <p className="text-lg text-slate-700 mb-6">
              Learn directly from a cloud/DevOps engineer who's deployed real
              systems at scale. You get guidance, clarity, and problem-solving
              support — not pre-recorded videos.
            </p>

          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <div>
              <p className="text-slate-800 font-semibold">Your Cloud Mentor</p>
              <p className="text-slate-600 text-sm">
                5+ years in DevOps, cloud engineering, and infrastructure
                automation. Passionate about helping beginners break into cloud roles.
              </p>
              <p className="text-blue-700 text-sm mt-2 font-medium">
                “Cloud isn’t just tools — it’s systems thinking. I’ll help you master both.”
              </p>
            </div>
          </div>
          </div>
        </section>

        {/* FLEXIBLE LEARNING */}
        <section className="py-16 px-6 max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-4 text-blue-900">
            Flexible Learning for Any Schedule
          </h3>
          <p className="text-lg text-slate-700 mb-6">
            Whether you're learning part-time or full-time, this program adapts
            to your life. No deadlines. No rushing. Just clarity and confidence.
          </p>

          <div className="grid md:grid-cols-3 gap-4 text-left">
            {[
              "✅ Learn evenings or weekends",
              "✅ Pause & resume anytime",
              "✅ Mentor support whenever you’re stuck",
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

        {/* DIFFERENTIATORS */}
        <section className="py-16 px-6 max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8 text-blue-900">
            What Makes Studira Different
          </h3>

          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "1-on-1 cloud mentorship with real engineers",
              "Beginner-friendly, mastery-paced learning",
              "Real deployments on AWS & GCP",
              "Human support — not automated grading",
              "Portfolio-ready projects employers value",
              "Clear guidance and a stress-free learning journey",
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
            Start Your Cloud Engineering Journey Today
          </h3>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Learn cloud engineering the right way — with mentorship, practical
            projects, and confidence-first learning. No pressure. Just real
            growth.
          </p>
          <Link
            href="/pricing"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
          >
            Apply Now
          </Link>
        </section>

        {/* INTERNAL LINKS (SEO Boost) */}
        <section className="py-12 px-6 text-center text-sm text-slate-500">
          <p>Explore more programs:</p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link href="/courses/ai-ml" className="hover:text-blue-700 underline">
              AI & Machine Learning
            </Link>
            <Link href="/courses/data-analysis-bootcamp" className="hover:text-blue-700 underline">
              Data Analysis
            </Link>
            <Link href="/courses/frontend" className="hover:text-blue-700 underline">
              Frontend Engineering
            </Link>
            <Link href="/courses/backend" className="hover:text-blue-700 underline">
              Backend Engineering
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}