"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Frontend Engineering",
    description:
      "HTML, CSS, JavaScript, React/Next.js, and UI/UX design fundamentals.",
    image: "/images/programs/frontend.png",
    link: "/courses/frontend",
  },
  {
    title: "Backend Engineering",
    description: "Node.js, APIs, databases, system design and architecture.",
    image: "/images/programs/backend.png",
    link: "/courses/backend",
  },
  {
    title: "Cloud Engineering Bootcamp",
    description:
      "AWS, GCP, CI/CD, DevOps tools, and real deployment practices.",
    image: "/images/programs/cloud.png",
    link: "/courses/cloud-bootcamp",
  },
  {
    title: "AI & ML Fundamentals",
    description:
      "Machine learning concepts, Python, and building smart models.",
    image: "/images/programs/ai.png",
    link: "/courses/ai-ml",
  },
  {
    title: "Data Analysis",
    description:
      "Learn how to collect, clean, analyse, and visualise data using tools like Excel, SQL, Power BI, and Python.",
    image: "/images/programs/data.png",
    link: "/courses/data-analysis-bootcamp",
  },
];

export default function FeaturedPrograms() {
  return (
    <section
      id="programs"
      className="relative w-full py-20 px-4 sm:px-6 md:px-12 bg-slate-50 scroll-mt-24"
      aria-labelledby="programs-heading"
    >
      <motion.h2
        id="programs-heading"
        className="text-3xl sm:text-4xl font-bold text-center text-blue-900 mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Explore Our Main Programs
      </motion.h2>

      <div className="space-y-24 relative z-10">
        {programs.map((program, index) => (
          <motion.div
            key={program.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative flex flex-col ${
              index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
            } items-center gap-8 md:gap-12`}
          >
            {/* Subtle animated blob in background */}
            <motion.div
              className="absolute -top-12 -left-12 w-80 h-80 bg-blue-200 rounded-full blur-3xl opacity-20 z-0"
              animate={{
                scale: [1, 1.1, 1],
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              aria-hidden="true"
            />

            {/* Program Image */}
            <div className="w-full md:w-1/2 relative z-10">
              <Image
                src={program.image}
                alt={`${program.title} course illustration`}
                width={600}
                height={360}
                className="rounded-xl shadow-md w-full object-cover"
                priority={index === 0}
              />
            </div>

            {/* Program Text */}
            <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-semibold text-blue-800">
                {program.title}
              </h3>
              <p className="mt-4 text-slate-600 text-base leading-relaxed">
                {program.description}
              </p>
              <Link
                href={program.link}
                className="mt-6 inline-block text-blue-700 font-medium hover:text-blue-900 transition relative group"
              >
                <span className="group-hover:underline transition">
                  View Program →
                </span>
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-700 scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}