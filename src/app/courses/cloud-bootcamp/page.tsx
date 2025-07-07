"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CloudBootcampPage() {
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
            Cloud Engineering Bootcamp
          </motion.h1>
          <p className="text-lg text-slate-700 mb-6">
            Learn cloud infrastructure, DevOps, and deployment pipelines — with
            1-on-1 mentorship and mastery-first pacing. AWS/GCP, Docker, CI/CD
            and more.
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
        <h2 className="text-3xl font-semibold mb-4">
          Why Learn Cloud Engineering?
        </h2>
        <p className="text-lg text-slate-700">
          Cloud skills are in high demand — and growing fast. From startups to
          enterprise tech, companies need engineers who can deploy, scale, and
          secure modern apps. This course makes that path accessible.
        </p>
      </section>

      {/* WHAT YOU'LL LEARN */}
      <section className="bg-blue-50 py-16 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h3 className="text-2xl font-semibold mb-8">What You’ll Learn</h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            {[
              "Linux & CLI Essentials",
              "Docker & Containerization",
              "AWS Core Services (EC2, S3, IAM)",
              "Google Cloud Services(Virtual Machines, App Engine, IAM)",
              "Terraform & Infrastructure as Code",
              "CI/CD Pipelines (GitHub Actions)",
              "Monitoring, Logging, and Security",
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
          <li>Beginner devs looking to enter DevOps or cloud roles</li>
          <li>Software engineers transitioning into infrastructure</li>
          <li>Career switchers seeking remote tech roles</li>
          <li>Startup founders wanting scalable deployments</li>
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
                content: "Linux, Command Line, and Version Control (Git)",
              },
              {
                stage: "Milestone 2",
                content: "Docker & Container Fundamentals",
              },
              {
                stage: "Milestone 3",
                content: "AWS: EC2, IAM, VPC, S3, and CloudWatch",
              },
              {
                stage: "Milestone 4",
                content: "Terraform & Infrastructure Automation",
              },
              {
                stage: "Milestone 5",
                content: "CI/CD with GitHub Actions",
              },
              {
                stage: "Milestone 6",
                content: "Capstone Project & Career Support",
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
            Learn at your own pace. Pause anytime. Progress only when you&#39;re
            confident.
          </p>
        </div>
      </section>

      {/* PROJECTS */}
      <section className="bg-white py-16 px-6 max-w-6xl mx-auto text-center">
        <h3 className="text-2xl font-bold mb-4">Projects You’ll Build</h3>
        <p className="text-lg text-slate-700 mb-10 max-w-2xl mx-auto">
          Build full cloud deployments — with automation, monitoring, and
          real-world architecture.
        </p>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            {
              title: "Dockerized Node App",
              desc: "Containerize and run a backend service locally and in the cloud.",
            },
            {
              title: "AWS EC2 Deployment",
              desc: "Provision and secure a VM in AWS using best practices.",
            },
            {
              title: "CI/CD Pipeline",
              desc: "Set up automated deployment for a full-stack app using GitHub Actions.",
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
          <h3 className="text-2xl font-semibold mb-4">Meet Your Mentor</h3>
          <p className="text-lg text-slate-700 mb-6">
            Learn from a DevOps/cloud engineer who’s worked across startups and
            global infra teams. Real projects. Real systems. Real support.
          </p>
          <div className="bg-white shadow-md rounded-xl p-6 text-left flex flex-col md:flex-row items-center gap-6 max-w-2xl mx-auto">
            <div className="w-24 h-24 bg-gray-200 rounded-full" />
            <div>
              <p className="text-slate-800 font-semibold">Your Cloud Mentor</p>
              <p className="text-slate-600 text-sm">
                5+ years in infrastructure, DevOps, and SRE. Passionate about
                teaching modern deployments the right way.
              </p>
              <p className="text-blue-700 text-sm mt-2 font-medium">
                “You’ll leave confident, not confused.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FLEXIBILITY */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <h3 className="text-2xl font-semibold mb-4">Flexible Learning</h3>
        <p className="text-lg text-slate-700 mb-6">
          Learn evenings, weekends, or between shifts — it’s designed to fit
          around your life.
        </p>
        <div className="grid md:grid-cols-3 gap-4 text-left">
          {[
            " Study part-time or full-time",
            " Pause & resume anytime",
            " Personal check-ins and help",
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
        <h3 className="text-2xl font-semibold mb-8">
          What Makes Studira Different
        </h3>
        <div className="grid md:grid-cols-3 gap-6 text-left">
          {[
            "1-on-1 cloud mentorship",
            "Real AWS/GCP deployments",
            "Mastery over speed",
            "Support that’s human, not robotic",
            "Job prep + portfolio building",
            "No fluff. No burnout. Just results.",
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
          Build a Career in Cloud — With Confidence
        </h3>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Join the next generation of cloud engineers. Get the skills, support,
          and clarity you need to thrive.
        </p>
        <Link
          href="/pricing"
          className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-8 py-4 rounded-md shadow transition"
        >
          Apply Now
        </Link>
      </section>
    </main>
  );
}