"use client";

import { Star } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Sarah J.",
    country: "🇨🇦",
    title: "Career Switcher",
    quote:
      "I never thought learning code could feel so human. My mentor adapted to my pace and made every concept click.",
    stars: 5,
  },
  {
    name: "Greg Miiles",
    country: "🇺🇸",
    title: "Working Professional",
    quote:
      "The one-on-one sessions made all the difference. I learned faster than I ever did in group bootcamps.",
    stars: 5,
  },
  {
    name: "Amina S.",
    country: "🇬🇧",
    title: "Full-Time Mom & Learner",
    quote:
      "I could pause when life got busy — and still had full support when I returned. That's rare in tech learning.",
    stars: 5,
  },
  {
    name: "Ganeswaran",
    country: "🇲🇾",
    title: "Cloud Student",
    quote:
      "I thoroughly enjoyed my tutoring sessions with Daniel for my AWS project. He’s patient, clear, and encouraging. Daniel tailored the sessions to my needs — I wouldn’t hesitate to recommend him.",
    stars: 5,
  },
  {
    name: "Chinedu O.",
    country: "🇳🇬",
    title: "Scholarship Recipient",
    quote:
      "Studira gave me what YouTube couldn’t — guidance, structure, and a mentor who believed in me. I finally feel confident to apply for tech jobs.",
    stars: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section
      className="bg-white w-full py-20 px-4 md:px-12"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto text-center">
        <h2
          id="testimonials-heading"
          className="text-3xl md:text-4xl font-bold text-blue-900 mb-4"
        >
          What Our Students Say
        </h2>
        <p className="text-slate-600 max-w-2xl mx-auto mb-12">
          Real words from real learners who have experienced the power of
          personalized education.
        </p>

        {/* Mobile Carousel */}
        <div className="block md:hidden relative">
          <figure className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center space-x-4 mb-4">
              <div
                className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg"
                aria-hidden="true"
              >
                {testimonials[currentIndex].name.charAt(0)}
              </div>
              <figcaption>
                <p className="text-blue-900 font-semibold flex items-center gap-1">
                  {testimonials[currentIndex].name}{" "}
                  <span className="text-lg">
                    {testimonials[currentIndex].country}
                  </span>
                </p>
                <p className="text-slate-600 text-sm">
                  {testimonials[currentIndex].title}
                </p>
              </figcaption>
            </div>
            <blockquote className="text-slate-700 italic text-sm">
              “{testimonials[currentIndex].quote}”
            </blockquote>
            <div
              className="flex mt-4 justify-center"
              aria-label={`${testimonials[currentIndex].stars} star rating`}
            >
              {Array.from({ length: testimonials[currentIndex].stars }).map(
                (_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-500 fill-yellow-400 mr-1"
                  />
                )
              )}
            </div>
          </figure>

          <div className="flex justify-center mt-4 gap-4">
            <button
              onClick={handlePrev}
              className="text-blue-600 font-semibold"
              aria-label="Previous testimonial"
            >
              ← Prev
            </button>
            <button
              onClick={handleNext}
              className="text-blue-600 font-semibold"
              aria-label="Next testimonial"
            >
              Next →
            </button>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <figure
              key={i}
              className="bg-slate-50 rounded-xl p-6 shadow hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div
                  className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-lg"
                  aria-hidden="true"
                >
                  {t.name.charAt(0)}
                </div>
                <figcaption>
                  <p className="text-blue-900 font-semibold flex items-center gap-1">
                    {t.name} <span className="text-lg">{t.country}</span>
                  </p>
                  <p className="text-slate-600 text-sm">{t.title}</p>
                </figcaption>
              </div>
              <blockquote className="text-slate-700 italic text-sm">
                “{t.quote}”
              </blockquote>
              <div className="flex mt-4" aria-label={`${t.stars} star rating`}>
                {Array.from({ length: t.stars }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-yellow-500 fill-yellow-400 mr-1"
                  />
                ))}
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}