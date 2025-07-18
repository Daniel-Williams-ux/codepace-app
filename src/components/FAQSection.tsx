"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What makes Studira different from other platforms?",
    answer:
      "Studira offers real one-on-one instruction, no AI-only teaching. Our flexible pace and mastery-based learning ensure every student actually learns and succeeds.",
  },
  {
    question: "How long does it take to complete a program?",
    answer:
      "There’s no fixed deadline. You learn at your own pace, and graduate only when you're confident — whether that takes 3 months or a year.",
  },
  {
    question: "Who are the instructors?",
    answer:
      "You’ll be matched with experienced, real human instructors who guide and mentor you throughout your learning journey.",
  },
  {
    question: "Is it really one-on-one?",
    answer:
      "Yes — every session, feedback, and interaction is human-led and personalized to your needs and pace.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Studira programs cost between $1,500 and $2,000 total — no hidden fees, no subscriptions. Pay once or pay in instalments. learn until you succeed.",
  },
  {
    question: "What if I get stuck or fall behind?",
    answer:
      "We’re built for that. You’ll never be rushed — our system is built around support, patience, and confidence-based progression.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="w-full py-20 px-4 md:px-12 bg-white"
      aria-labelledby="faq-heading"
    >
      <h2
        id="faq-heading"
        className="text-3xl md:text-4xl font-bold text-center text-blue-900 mb-12"
      >
        Frequently Asked Questions
      </h2>

      <dl className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <>
            <dt
              key={`dt-${index}`}
              className="bg-slate-50 border border-slate-200 rounded-xl"
            >
              <button
                onClick={() => toggle(index)}
                className="w-full flex justify-between items-center text-left p-4 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-t-xl"
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`faq-${index}`}
              >
                <span className="text-lg font-medium text-slate-800">
                  {faq.question}
                </span>
                <span
                  className="text-blue-600 text-xl transition-transform"
                  aria-hidden="true"
                >
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
            </dt>

            <AnimatePresence initial={false}>
              {openIndex === index && (
                <motion.dd
                  key={`dd-${index}`}
                  id={`faq-${index}`}
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden px-4 pb-4 text-slate-600 text-sm"
                >
                  {faq.answer}
                </motion.dd>
              )}
            </AnimatePresence>
          </>
        ))}
      </dl>
    </section>
  );
}