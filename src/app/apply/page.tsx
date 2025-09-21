"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";

export default function ApplyPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!form.name.trim()) newErrors.name = "Name is required.";
    if (!form.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Enter a valid email.";
    }
    if (!form.message.trim() || form.message.length < 30) {
      newErrors.message = "Tell us more — at least 30 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form["bot-field"]) return;

    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch(
        "https://formspree.io/f/https://formspree.io/f/xdkzdqen",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            message: form.message,
          }),
        }
      );

      if (res.ok) {
        router.push("/thanks");
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Submission failed.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>Apply for a Scholarship | Studira</title>
        <meta
          name="description"
          content="Apply for a full scholarship with Studira — one-on-one tech mentorship tailored to your journey. We welcome learners from underserved regions."
        />
      </Head>

      <main className="max-w-xl mx-auto px-4 py-20">
        <h1 className="text-3xl font-bold text-[#1D4ED8] mb-4 text-center">
          Apply for a Scholarship
        </h1>
        <p className="text-center text-[#475569] mb-8">
          Tell us about your goals and challenges. We review all applications
          within 48 hours.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="bot-field"
            value={form["bot-field"]}
            onChange={handleChange}
            hidden
            aria-hidden="true"
            tabIndex={-1}
            autoComplete="off"
          />

          <div>
            <input
              name="name"
              placeholder="Your full name"
              value={form.name}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              name="email"
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              name="message"
              placeholder="Tell us your story — at least 30 characters"
              rows={6}
              value={form.message}
              onChange={handleChange}
              className={`w-full px-4 py-2 border rounded-md ${
                errors.message ? "border-red-500" : "border-gray-300"
              }`}
            />
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className={`bg-[#F59E0B] hover:bg-[#D97706] text-white font-medium px-6 py-3 rounded-xl w-full transition ${
              loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </main>
    </>
  );
}