"use client";

import { motion } from "framer-motion";
import {
  FaRegFileAlt,
  FaChalkboardTeacher,
  FaClock,
  FaGraduationCap,
} from "react-icons/fa";
import { useId } from "react";

const steps = [
  {
    title: "Apply Online",
    description:
      "Tell us about your goals and background so we can match you with the right program.",
    Icon: FaRegFileAlt,
  },
  {
    title: "Meet Your Mentor",
    description:
      "Get paired with a real human instructor who will guide you personally.",
    Icon: FaChalkboardTeacher,
  },
  {
    title: "Learn at Your Pace",
    description:
      "We teach until mastery — go as fast or slow as you need with real-time support.",
    Icon: FaClock,
  },
  {
    title: "Graduate with Confidence",
    description:
      "You only finish when you're ready. We stay with you until you're truly job-ready.",
    Icon: FaGraduationCap,
  },
];

export default function HowItWorks() {
  return (
    <section
      className="w-full py-20 px-4 md:px-12 bg-white"
      aria-labelledby="how-it-works-heading"
    >
      <div className="max-w-5xl mx-auto">
        <h2
          id="how-it-works-heading"
          className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-16"
        >
          How It Works
        </h2>

        <ol className="relative border-l-2 border-blue-200 pl-6 md:pl-10 space-y-16">
          {steps.map(({ title, description, Icon }, index) => {
            const iconId = useId();
            return (
              <motion.li
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative flex flex-col md:flex-row items-start md:items-center"
                aria-labelledby={`step-${index}`}
              >
                {/* Step Number */}
                <div
                  className="absolute -left-5 top-1.5 bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow"
                  aria-hidden="true"
                >
                  {index + 1}
                </div>

                {/* Icon with aria-label for screen readers */}
                <div
                  className="ml-10 mb-3 md:mb-0 flex-shrink-0"
                  role="img"
                  aria-label={`${title} icon`}
                  id={iconId}
                >
                  <Icon className="text-blue-700 w-8 h-8" aria-hidden="true" />
                </div>

                {/* Step Content */}
                <div className="ml-0 md:ml-6">
                  <h3
                    id={`step-${index}`}
                    className="text-lg font-semibold text-blue-800"
                  >
                    {title}
                  </h3>
                  <p className="text-slate-600 text-sm mt-1 max-w-md">
                    {description}
                  </p>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}