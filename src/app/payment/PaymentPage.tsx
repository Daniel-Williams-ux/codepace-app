"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import Script from "next/script";
import toast, { Toaster } from "react-hot-toast";

interface PaystackCallbackResponse {
  reference: string;
  trans: string;
  status: string;
  message: string;
}

interface PaystackOptions {
  key: string;
  email: string;
  amount: number;
  currency?: string;
  ref?: string;
  metadata?: {
    custom_fields?: {
      display_name: string;
      variable_name: string;
      value: string | number | boolean | undefined;
    }[];
  };
  callback: (response: PaystackCallbackResponse) => void;
  onClose?: () => void;
}

interface PaystackPopSetup {
  setup: (options: PaystackOptions) => { openIframe: () => void };
}

declare global {
  interface Window {
    PaystackPop: PaystackPopSetup;
  }
}

const PAYSTACK_PUBLIC_KEY = process.env.NEXT_PUBLIC_PAYSTACK_KEY || "";

const PLAN_DETAILS = {
  essentials: {
    name: "essentials",
    label: "Essentials Plan",
    price: 1500,
    features: [
      "1-on-1 mentorship",
      "Flexible schedule",
      "Personalized roadmap",
    ],
  },
  full: {
    name: "full",
    label: "Full Access Plan",
    price: 2000,
    features: [
      "Everything in Essentials",
      "Lifetime career support",
      "Interview prep & projects",
    ],
  },
  custom: {
    name: "custom",
    label: "Custom Plan",
    price: 1500,
    features: [
      "Pay-as-you-go sessions",
      "Ideal for specialists or part-timers",
      "Customized to your goals",
    ],
  },
} as const;

type PlanKey = keyof typeof PLAN_DETAILS;

const formatNaira = (amount: number) =>
  amount.toLocaleString("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 0,
  });

export default function PaymentPage() {
  const searchParams = useSearchParams();
  const selected = (searchParams?.get("plan") ?? "essentials") as PlanKey;
  const plan = PLAN_DETAILS[selected] || PLAN_DETAILS["essentials"];

  const [form, setForm] = useState({
    name: "",
    email: "",
    country: "",
    phone: "",
    referral: "",
    goals: "",
    course: "ai-ml",
  });
  const [paymentType, setPaymentType] = useState("full");
  const [installments, setInstallments] = useState(3);
  const [exchangeRate, setExchangeRate] = useState<number | null>(null);

  const totalPriceUSD = plan.price;
  const monthly = Math.ceil(totalPriceUSD / installments);
  const totalPriceNGN = exchangeRate
    ? Math.ceil(totalPriceUSD * exchangeRate)
    : 0;

  useEffect(() => {
    fetch("https://api.exchangerate-api.com/v4/latest/USD")
      .then((res) => res.json())
      .then((data) => setExchangeRate(data.rates.NGN))
      .catch(() => {
        toast.error(
          "❌ Exchange rate unavailable. Using fallback rate ₦1500/$."
        );
        setExchangeRate(1500);
      });
  }, []);

  const handlePay = async () => {
    const { name, email, country, phone } = form;
    if (!name || !email || !country || !phone) {
      toast.error("Please fill out all required fields.");
      return;
    }

    if (!exchangeRate) {
      toast.error("Currency conversion failed.");
      return;
    }

    const amountPerInstallment = totalPriceUSD / installments;
    const amountInKobo = Math.ceil(
      (paymentType === "installment" ? amountPerInstallment : totalPriceUSD) *
        exchangeRate *
        100
    );

    try {
      await fetch("https://formspree.io/f/xdkzdqen", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, plan: plan.name }),
      });
    } catch {
      toast.error("❌ Form submission failed.");
      return;
    }

    if (!window.PaystackPop) {
      toast.error("❌ Paystack script not loaded.");
      return;
    }

    if (!PAYSTACK_PUBLIC_KEY) {
      toast.error("❌ Paystack public key is missing.");
      return;
    }

    const handler = window.PaystackPop.setup({
      key: PAYSTACK_PUBLIC_KEY,
      email: form.email,
      amount: amountInKobo,
      currency: "NGN",
      metadata: {
        custom_fields: Object.entries({
          Country: form.country,
          Phone: form.phone,
          Referral: form.referral,
          Goals: form.goals,
          Course: form.course,
          Plan: plan.name,
          PaymentType: paymentType,
          Installments:
            paymentType === "installment" ? installments : undefined,
        }).map(([k, v]) => ({
          display_name: k,
          variable_name: k.toLowerCase(),
          value: v,
        })),
      },
      callback: function (res: PaystackCallbackResponse) {
        toast.success("✅ Payment successful! Ref: " + res.reference);
      },
      onClose: function () {
        toast("🔒 Payment window closed.");
      },
    });

    handler.openIframe();
  };

  return (
    <main className="max-w-2xl mx-auto px-4 py-12 space-y-10 bg-slate-50 text-slate-900">
      <Script
        src="https://js.paystack.co/v1/inline.js"
        strategy="beforeInteractive"
      />
      <Toaster position="top-right" />

      <section className="text-center space-y-2">
        <h1 className="text-3xl font-bold">Complete Your Enrollment</h1>
        <p>
          You&apos;re enrolling in the <strong>{plan.label}</strong>
        </p>
      </section>

      <section className="bg-white shadow rounded-2xl p-6 space-y-4 border">
        <h2 className="text-xl font-semibold">Plan Summary</h2>
        <div className="flex justify-between font-semibold">
          <span>{plan.label}</span>
          <span className="text-right text-sm leading-tight">
            <div className="text-lg font-bold">${totalPriceUSD}</div>
            <div className="text-slate-500">{formatNaira(totalPriceNGN)}</div>
          </span>
        </div>
        <ul className="space-y-2 text-sm">
          {plan.features.map((feature: string, i: number) => (
            <li key={i} className="flex gap-2 items-center">
              <FaCheckCircle className="text-green-500" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handlePay();
        }}
        className="space-y-6 bg-white p-6 rounded-2xl border"
      >
        {["name", "email", "country", "phone", "referral", "goals"].map(
          (id) => (
            <div key={id}>
              <label htmlFor={id} className="block mb-1 font-medium">
                {id.charAt(0).toUpperCase() +
                  id.slice(1).replace(/([A-Z])/g, " $1")}
              </label>
              <input
                id={id}
                type={
                  id === "email" ? "email" : id === "phone" ? "tel" : "text"
                }
                value={form[id as keyof typeof form]}
                onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-brand-accent"
                required={id !== "referral" && id !== "goals"}
                placeholder={id}
              />
            </div>
          )
        )}

        <div>
          <label htmlFor="course" className="block mb-1 font-medium">
            Choose Course
          </label>
          <select
            id="course"
            value={form.course}
            onChange={(e) => setForm({ ...form, course: e.target.value })}
            className="w-full p-2 border rounded-xl"
            required
          >
            <option value="frontend">Frontend</option>
            <option value="backend">Backend</option>
            <option value="ai-ml">AI/ML Fundamentals</option>
            <option value="cloud">Cloud Computing</option>
            <option value="data">Data Analysis</option>
            <option value="web">Web Development</option>
          </select>
        </div>

        <div>
          <label htmlFor="paymentType" className="block mb-1 font-medium">
            Payment Type
          </label>
          <select
            id="paymentType"
            value={paymentType}
            onChange={(e) => setPaymentType(e.target.value)}
            className="w-full p-2 border rounded-xl"
            required
          >
            <option value="full">Full Payment</option>
            <option value="installment">Installment Plan</option>
          </select>
        </div>

        {paymentType === "installment" && (
          <div>
            <label htmlFor="installments" className="block mb-1 font-medium">
              Installment Duration
            </label>
            <select
              id="installments"
              value={installments}
              onChange={(e) => setInstallments(parseInt(e.target.value))}
              className="w-full p-2 border rounded-xl"
            >
              <option value={3}>3 months – ${monthly}/mo</option>
              <option value={6}>6 months – ${monthly}/mo</option>
            </select>
          </div>
        )}

        <div className="text-sm bg-slate-50 p-3 rounded border leading-relaxed">
          {exchangeRate ? (
            paymentType === "full" ? (
              <>
                You will pay <strong>{formatNaira(totalPriceNGN)}</strong> via
                Paystack
                <br />
                <span className="text-xs text-slate-500">
                  Based on ${totalPriceUSD} @ ₦
                  {exchangeRate.toLocaleString(undefined, {
                    maximumFractionDigits: 0,
                  })}
                  /$
                </span>
              </>
            ) : (
              <>
                Installments: <strong>${monthly}/mo</strong> for {installments}{" "}
                months.
              </>
            )
          ) : (
            "Loading exchange rate..."
          )}
        </div>

        <button
          type="submit"
          className="bg-[#F59E0B] hover:bg-[#D97706] text-white w-full py-3 rounded-xl font-bold"
        >
          Pay Now with Paystack
        </button>
      </form>

      <p className="text-center text-sm text-slate-500">
        Need help?{" "}
        <a href="/contact" className="text-blue-600 underline">
          Contact Support
        </a>
      </p>
    </main>
  );
}