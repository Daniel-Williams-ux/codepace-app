"use client";

export default function RefundPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Refund Policy</h1>
      <p className="mb-4">
        At Studira, all enrollments are final. We operate a strict{" "}
        <strong>No Refund Policy</strong>.
      </p>
      <p className="mb-4">
        Our programs are personalized and one-on-one, which means resources and
        instructor time are reserved exclusively for each student. Once a
        student enrolls, we begin allocating time, mentorship, and support that
        cannot be reassigned.
      </p>
      <p className="mb-4">
        If you have concerns about your learning experience, please reach out to{" "}
        <a href="mailto:support@studira.tech" className="underline">
          support@studira.tech
        </a>{" "}
        — we’re committed to working with you to make sure you gain the value
        you expect from your training.
      </p>
      <p>
        <strong>Note:</strong> Scholarships are available for students who need
        financial support. Learn more on our{" "}
        <a href="/scholarships" className="underline">
          Scholarships page
        </a>
        .
      </p>
    </main>
  );
}