"use client";

import Image from "next/image";
import Link from "next/link";
// import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Brand & Mission */}
        <div>
          <Link
            href="/"
            aria-label="Techstride homepage"
            className="inline-flex items-center mb-4"
          >
            <Image
              src="/logo.png"
              alt="Techstride logo"
              width={100}
              height={100}
              className="w-24 h-24 object-contain"
              priority
            />
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed">
            Personalized, student-paced tech education that’s affordable,
            human-led, and built for mastery — not speed.
          </p>
        </div>

        {/* Navigation */}
        <nav aria-label="Footer Navigation" className="space-y-2">
          <h4 className="text-white text-lg font-semibold mb-2">Explore</h4>
          <ul className="flex flex-col gap-2 text-slate-300 text-sm">
            <li>
              <Link href="/#programs" className="hover:text-white">
                Programs
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-white">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
            <li>
              <Link href="/scholarships" className="hover:text-white">
                Scholarships
              </Link>
            </li>
          </ul>
          <p className="text-xs text-slate-500 mt-4 max-w-xs">
            Need help affording training?{" "}
            <Link href="/scholarships" className="underline hover:text-white">
              Learn about our scholarships
            </Link>
          </p>
        </nav>

        {/* Contact & Social */}
        <div className="space-y-4">
          <h4 className="text-white text-lg font-semibold mb-2">Connect</h4>
          <div className="flex items-center gap-3 text-slate-300 text-sm">
            <FaEnvelope />
            <a href="mailto:support@techsride.com" className="hover:text-white">
              support@studira.tech
            </a>
          </div>
          {/* <div className="flex items-center gap-5 mt-4">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
            >
              <Image
                src="/x-logo.png"
                alt="X (Twitter) logo"
                width={20}
                height={20}
                className="invert"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="hover:text-blue-300"
            >
              <FaLinkedin size={20} />
            </a>
          </div> */}
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} Studira. All rights reserved.
      </div>
    </footer>
  );
}