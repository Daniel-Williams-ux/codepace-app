'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, Fragment } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Popover, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Pricing', href: '/pricing' },
  { name: 'Scholarships', href: '/scholarships' },

  // ⭐ NEW SEO LINK ADDED
  { name: 'Tech Tutoring', href: '/tech-tutor' },

  { name: 'Contact', href: '/contact' },
];

const courseLinks = [
  { name: 'Frontend Engineering', href: '/courses/frontend' },
  { name: 'Backend Engineering', href: '/courses/backend' },
  { name: 'AI & ML Fundamentals', href: '/courses/ai-ml' },
  { name: 'Cloud Engineering Bootcamp', href: '/courses/cloud-bootcamp' },
  { name: 'Data Analysis', href: '/courses/data-analysis-bootcamp' },
];

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCoursesMobile, setShowCoursesMobile] = useState(false);

  return (
    <>
      {/* ⭐ SEO-Optimized Top Banner */}
      <div className="bg-[#1D4ED8] text-white text-sm text-center py-2 font-medium">
        One-on-One Coding Tutor · Learn at Your Pace · Real Human Mentorship ·
        Global Scholarships
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 flex justify-between items-center px-4 py-3 bg-white shadow-sm">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/logo.png"
            alt="Studira Logo"
            width={120}
            height={120}
            className="w-28 h-28 object-contain"
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 relative">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <div key={link.href} className="relative">
                <Link
                  href={link.href}
                  className={`px-2 py-1 text-slate-700 font-medium transition-colors duration-300 ${
                    isActive ? 'text-[#1D4ED8]' : 'hover:text-[#1D4ED8]'
                  }`}
                >
                  {link.name}
                </Link>

                {isActive && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 w-full h-[2px] bg-[#1D4ED8] rounded-full"
                    transition={{ duration: 0.3 }}
                  />
                )}
              </div>
            );
          })}

          {/* Courses Dropdown */}
          <Popover className="relative">
            {({ open }) => {
              const isActiveCourse = pathname.startsWith('/courses');
              return (
                <>
                  <Popover.Button
                    className={`flex items-center gap-1 px-2 py-1 font-medium transition-colors ${
                      open || isActiveCourse
                        ? 'text-[#1D4ED8]'
                        : 'text-slate-700 hover:text-[#1D4ED8]'
                    }`}
                  >
                    Courses <ChevronDown className="w-4 h-4" />
                  </Popover.Button>

                  {(open || isActiveCourse) && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 h-[2px] w-[72px] bg-[#1D4ED8] rounded-full"
                      transition={{ duration: 0.3 }}
                    />
                  )}

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-200"
                    enterFrom="opacity-0 translate-y-1"
                    enterTo="opacity-100 translate-y-0"
                    leave="transition ease-in duration-150"
                    leaveFrom="opacity-100 translate-y-0"
                    leaveTo="opacity-0 translate-y-1"
                  >
                    <Popover.Panel className="absolute left-0 mt-2 w-64 bg-white border rounded-md shadow-xl p-4 z-50">
                      {courseLinks.map((course) => {
                        const isCourseActive = pathname === course.href;
                        return (
                          <Link
                            key={course.href}
                            href={course.href}
                            className={`block px-3 py-2 rounded-md font-medium transition-colors ${
                              isCourseActive
                                ? 'text-[#1D4ED8] bg-blue-50'
                                : 'text-slate-800 hover:text-[#1D4ED8] hover:bg-blue-50'
                            }`}
                          >
                            {course.name}
                          </Link>
                        );
                      })}
                    </Popover.Panel>
                  </Transition>
                </>
              );
            }}
          </Popover>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/pricing"
            className="bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold px-6 py-2 rounded-md shadow transition duration-300"
          >
            Enroll Now
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-20 text-[#1D4ED8]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t z-10 flex flex-col items-start px-4 py-4 space-y-4 md:hidden">
            {/* Mobile Nav Links */}
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-slate-800 font-medium ${
                  pathname === link.href
                    ? 'text-[#1D4ED8]'
                    : 'hover:text-[#1D4ED8]'
                }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Mobile Courses Dropdown */}
            <button
              className="text-slate-800 font-medium flex items-center justify-between w-full"
              onClick={() => setShowCoursesMobile(!showCoursesMobile)}
            >
              Courses
              <ChevronDown
                className={`ml-2 transition-transform ${
                  showCoursesMobile ? 'rotate-180' : ''
                }`}
              />
            </button>

            {showCoursesMobile && (
              <div className="pl-4 w-full space-y-2">
                {courseLinks.map((course) => (
                  <Link
                    key={course.href}
                    href={course.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block font-medium ${
                      pathname === course.href
                        ? 'text-[#1D4ED8]'
                        : 'hover:text-[#1D4ED8]'
                    }`}
                  >
                    {course.name}
                  </Link>
                ))}
              </div>
            )}

            {/* Mobile CTA */}
            <Link
              href="/pricing"
              className="w-full bg-[#F59E0B] hover:bg-[#D97706] text-white font-semibold py-2 rounded-md text-center shadow transition duration-300"
            >
              Enroll Now
            </Link>
          </div>
        )}
      </header>
    </>
  );
}