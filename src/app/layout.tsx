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
    "Studira delivers personalized one-on-one tech education at your pace. Learn frontend, backend, AI, and cloud engineering affordably, with long-term support.",
  metadataBase: new URL("https://studira.tech"), // Update with your actual domain
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  openGraph: {
    title: "Studira – Human-Paced Tech Education",
    description:
      "Personalized one-on-one learning that adapts to you. Learn tech skills with confidence.",
    url: "https://studira.tech",
    siteName: "Studira",
    type: "website",
    images: [
      {
        url: "/og-image.png", // Replace with your actual OG image path
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
    images: ["/og-image.png"], // Ensure this exists
    creator: "@studira", // Replace with actual Twitter if available
  },
  icons: {
    icon: "/favicon.ico", //  correct
    shortcut: "/favicon.ico", //  correct
    apple: "/favicon.ico", //  correct
  },
  themeColor: "#1D4ED8", // Blue-700
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
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