'use client';

export default function TermsOfServicePage() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-16 text-slate-800">
      <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>

      <p className="mb-4 text-slate-600">
        Welcome to <strong>Studira</strong>. By using our website, programs, or
        services, you agree to the following terms. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">1. Eligibility</h2>
      <p className="text-slate-600 mb-4">
        You must be at least 18 years old to enroll in Studira programs. If you
        are under 18, you may participate only with parental or guardian
        consent.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        2. Programs & Mentorship
      </h2>
      <p className="text-slate-600 mb-4">
        Our mentorship is one-on-one and student-paced. While we are committed
        to providing the highest quality training, your success depends on your
        participation and effort.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">3. Payments & Refunds</h2>
      <p className="text-slate-600 mb-4">
        Program fees are clearly stated on our website. By enrolling, you agree
        to pay the required fees. Refunds are subject to our{' '}
        <a href="/refund-policy" className="text-blue-600 hover:underline">
          Refund Policy
        </a>
        .
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">4. Scholarships</h2>
      <p className="text-slate-600 mb-4">
        Scholarships are offered at Studira’s discretion and may require
        applicants to provide additional information. Receiving a scholarship
        does not guarantee employment or certification.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        5. Intellectual Property
      </h2>
      <p className="text-slate-600 mb-4">
        All content on Studira, including curriculum, graphics, and branding, is
        the intellectual property of Studira. You may not copy, resell, or
        distribute it without permission.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">
        6. Limitation of Liability
      </h2>
      <p className="text-slate-600 mb-4">
        Studira is not responsible for any losses, delays, or damages arising
        from the use of our services. Our role is to provide mentorship and
        resources to support your learning journey.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">7. Changes to Terms</h2>
      <p className="text-slate-600 mb-4">
        We may update these Terms of Service at any time. Continued use of our
        website or programs means you accept the updated terms.
      </p>

      <h2 className="text-xl font-semibold mt-8 mb-3">8. Contact</h2>
      <p className="text-slate-600 mb-4">
        For questions about these Terms, please email us at{' '}
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