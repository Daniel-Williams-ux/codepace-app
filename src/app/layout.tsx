// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Studira – Human-Paced Tech Education",
  description:
     "Studira delivers personalized, one-on-one tech mentorship at your pace. Learn frontend, backend, AI, or cloud with full support — built for U.S. students who want affordable results.",
  metadataBase: new URL("https://studira.tech"),
  openGraph: {
    title: "Studira – Human-Paced Tech Education",
    description:
      "Personalized one-on-one learning that adapts to you. Learn tech skills with confidence.",
    url: "https://studira.tech",
    siteName: "Studira",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Studira – Personalized Tech Learning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Studira – Personalized Tech Learning",
    description:
      "Human-centered, mastery-based learning in tech. Affordable, flexible, effective.",
    images: ["/og-image.png"],
    creator: "@studira", // Update if you have a Twitter
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  themeColor: "#1D4ED8", // Tailwind Blue-700
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};


// ✅ Schema.org structured data
const structuredData = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "Studira",
  url: "https://studira.tech",
  logo: "https://studira.tech/logo.png", // Make sure this is accessible publicly
  description:
    "Studira is a tech education platform offering one-on-one personalized learning in frontend, backend, cloud, and AI/ML at your pace.",
  sameAs: [
    "https://www.linkedin.com/company/studira", // Update if available
    "https://twitter.com/studira", // Update if available
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "support@studira.tech",
    contactType: "Customer Support",
    availableLanguage: ["English"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Content Security Policy fix for Paystack */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="script-src 'self' 'unsafe-inline' 'unsafe-eval' https://js.paystack.co;"
        />
        <meta name="theme-color" content="#1D4ED8" />

        {/* Schema.org JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(structuredData),
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-brand-background text-brand-text`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}