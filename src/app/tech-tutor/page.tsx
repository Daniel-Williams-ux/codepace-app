'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Head from 'next/head';

export default function TechTutorPage() {
  return (
    <>
      <Head>
        <title>
          One-on-One Coding Tutor Online | Personalized Tech Mentorship |
          Studira
        </title>
        <meta
          name="description"
          content="Learn to code with a real human tech tutor. Studira offers one-on-one online mentorship in web development, frontend, backend, cloud, AI, and data analysis — beginner friendly and affordable."
        />
      </Head>

      <main className="bg-white text-slate-800 px-4 md:px-12 py-20 max-w-6xl mx-auto">
        {/* HERO SECTION */}
        <section className="text-center mb-20">
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-blue-900 leading-tight"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            One-on-One Coding Tutor
            <br />
            Designed for Beginners.
          </motion.h1>

          <motion.p
            className="mt-6 max-w-2xl mx-auto text-lg text-slate-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            Struggling to learn alone? Need a real person to guide you? Studira
            pairs you with a human tech mentor who teaches you step-by-step — at
            your pace, from absolute beginner to job-ready.
          </motion.p>

          <Link
            href="/pricing"
            className="inline-block bg-blue-700 text-white px-8 py-3 mt-8 rounded-full text-lg font-semibold hover:bg-blue-800 transition"
          >
            Start Learning One-on-One
          </Link>
        </section>

        {/* BENEFITS SECTION */}
        <section className="grid md:grid-cols-3 gap-10 mb-24">
          {[
            {
              title: 'Real Human Tutors',
              text: 'Learn directly from an experienced software developer — no AI bots, no automated videos.',
            },
            {
              title: 'Beginner-Friendly',
              text: 'We simplify tech and teach you in a natural, clear, and personalized way.',
            },
            {
              title: 'Learn at Your Pace',
              text: 'Move slowly or quickly — no deadlines, no stress. We teach until you truly understand.',
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-sm"
            >
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {item.title}
              </h3>
              <p className="text-slate-600">{item.text}</p>
            </motion.div>
          ))}
        </section>

        {/* HOW IT WORKS */}
        <section className="mb-24">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 text-center mb-12">
            How One-on-One Tutoring Works
          </h2>

          <div className="space-y-10 max-w-3xl mx-auto">
            {[
              {
                title: '1. Tell Us Your Goals',
                text: 'We understand your background, your pace, and what you want to achieve in tech.',
              },
              {
                title: '2. Meet Your Personal Tech Tutor',
                text: 'You’ll be matched with a real instructor who guides your entire learning journey.',
              },
              {
                title: '3. Learn Through Live Mentorship',
                text: 'Your tutor explains concepts, reviews code, assigns projects, and supports you step-by-step.',
              },
              {
                title: '4. Build Confidence & Skills',
                text: 'We stay with you until you truly understand — no deadlines, no pressure.',
              },
            ].map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="text-blue-700 text-3xl font-bold">{i + 1}</div>
                <div>
                  <h3 className="text-xl font-semibold text-blue-800">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 mt-1">{step.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* MINI TESTIMONIALS */}
        <section className="mb-24">
          <h2 className="text-3xl font-bold text-blue-900 text-center mb-12">
            Trusted by Beginners Worldwide
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Having a personal mentor made coding less scary. I finally understood JavaScript!',
                name: 'Amara · Frontend Student',
              },
              {
                quote:
                  'I tried YouTube and Udemy for years. Studira is the only program where I stopped feeling lost.',
                name: 'David · Backend Student',
              },
              {
                quote:
                  'My tutor explained things patiently and clearly. This is perfect for beginners.',
                name: 'Sofia · Cloud Bootcamp',
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-md"
              >
                <p className="text-slate-700 italic">“{t.quote}”</p>
                <p className="text-blue-700 font-semibold mt-3">{t.name}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="text-center bg-blue-50 py-16 px-6 rounded-2xl border border-blue-100">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Ready to Start Learning With a Personal Coding Tutor?
          </h2>
          <p className="text-slate-700 max-w-2xl mx-auto mb-6">
            Join students from Nigeria, the UK, the US, and around the world
            becoming confident, skilled developers through real human
            mentorship.
          </p>

          <Link
            href="/pricing"
            className="inline-block bg-blue-700 hover:bg-blue-800 text-white px-8 py-3 rounded-full font-semibold transition"
          >
            View Pricing & Start Learning
          </Link>
        </section>

        {/* INTERNAL LINKS FOR SEO */}
        <section className="mt-16 text-center text-sm text-slate-500">
          <p>Explore more:</p>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <Link
              href="/courses/frontend"
              className="hover:text-blue-700 underline"
            >
              Frontend Engineering
            </Link>
            <Link
              href="/courses/backend"
              className="hover:text-blue-700 underline"
            >
              Backend Engineering
            </Link>
            <Link
              href="/courses/cloud-bootcamp"
              className="hover:text-blue-700 underline"
            >
              Cloud Engineering Bootcamp
            </Link>
            <Link
              href="/courses/ai-ml"
              className="hover:text-blue-700 underline"
            >
              AI & ML Fundamentals
            </Link>
            <Link
              href="/courses/data-analysis-bootcamp"
              className="hover:text-blue-700 underline"
            >
              Data Analysis
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
