"use client";

export default function PrivacyPolicyPage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <p className="mb-4 text-slate-600">
        At <strong>Studira</strong>, your privacy is important to us. This
        Privacy Policy explains how we collect, use, and protect your
        information when you interact with our website, programs, and services.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Information We Collect</h2>
      <p className="text-slate-600 mb-4">
        When you sign up for mentorship programs, scholarships, or contact us,
        we may collect personal details such as your name, email, phone number,
        and any information you provide voluntarily.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">How We Use Your Information</h2>
      <ul className="list-disc list-inside text-slate-600 space-y-2">
        <li>To contact you about your application or program updates.</li>
        <li>To offer scholarships and tailored mentorship opportunities.</li>
        <li>To improve our services and website experience.</li>
      </ul>

      <h2 className="text-xl font-semibold mt-8 mb-3">How We Protect Your Data</h2>
      <p className="text-slate-600 mb-4">
        We do not sell, rent, or share your personal information with third
        parties. Your details are used only for the purposes of Studira’s
        mentorship and scholarship programs.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">Contact Us</h2>
      <p className="text-slate-600 mb-4">
        If you have any questions about this Privacy Policy, reach us at:{" "}
        <a
          href="mailto:support@studira.tech"
          className="text-blue-600 hover:underline"
        >
          support@studira.tech
        </a>
        .
      </p>

      <p className="text-xs text-slate-500 mt-12">
        Effective Date: {new Date().toLocaleDateString()}
      </p>
    </main>
  );
}