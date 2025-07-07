import { Metadata } from "next";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { MessageSquare } from "lucide-react";

// ✅ Metadata outside "use client"
export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch — we're here to help you succeed in tech.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-slate-800 px-4 md:px-12 py-20 max-w-5xl mx-auto">
      {/* Page Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
          Contact Us
        </h1>
        <p className="text-slate-600 max-w-xl mx-auto text-lg">
          Whether you have a question, want to collaborate, or need support —
          we&rsquo;re here for you.
        </p>
      </section>

      {/* Grid: Form + Sidebar */}
      <section className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <Card className="bg-white shadow-md border border-blue-100">
          <CardHeader>
            <CardTitle className="text-blue-800 text-xl">
              We&rsquo;d love to hear from you
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form
              className="space-y-6"
              action="https://formspree.io/f/xdkzdqen" // 🔁 Replace with your Formspree ID
              method="POST"
            >
              <div>
                <label htmlFor="name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <Input id="name" name="name" required placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block mb-1 font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Tell us how we can help..."
                />
              </div>
              <Button type="submit" className="w-full cursor-pointer">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>

        {/* Info Sidebar */}
        <div className="flex flex-col justify-center space-y-8">
          <blockquote className="border-l-4 border-blue-800 pl-4 text-slate-700 italic">
            “Studira didn&rsquo;t just teach me to code — they taught me to
            believe in myself. Reaching out was the first step.”
          </blockquote>

          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-blue-800">
              Why reach out?
            </h2>
            <ul className="list-disc pl-5 text-slate-600 space-y-1">
              <li>Learn more about our programs or instructors</li>
              <li>Ask questions about scholarships or pricing</li>
              <li>Share feedback or ideas</li>
              <li>Say hi — we&rsquo;re real humans 🙂</li>
            </ul>
          </div>

          <div className="flex items-center space-x-3 text-slate-500 text-sm">
            <MessageSquare className="w-5 h-5 text-blue-500" />
            <span>We typically reply within 24–48 hours.</span>
          </div>
        </div>
      </section>
    </main>
  );
}
