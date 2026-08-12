"use client";

import React, { useState } from "react";
import { Mail, CheckCircle, Sparkles, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const { showToast } = useCart();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      showToast("Please enter a valid email address!");
      return;
    }
    setSubscribed(true);
    showToast("🎉 Thank you for subscribing to FreshCart newsletter!");
  };

  return (
    <section className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-b from-emerald-50 via-emerald-100/40 to-teal-50 border border-emerald-200/60 p-8 sm:p-12 lg:p-16 text-center max-w-4xl mx-auto shadow-sm overflow-hidden">
          {/* Subtle bg glow */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-200/40 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-600 text-white mx-auto flex items-center justify-center shadow-lg shadow-emerald-600/20 mb-2">
              <Mail className="w-7 h-7 stroke-[2]" />
            </div>

            <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-700 bg-emerald-100 px-3.5 py-1 rounded-full inline-block">
              STAY IN TOUCH
            </span>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Get Fresh Deals in Your Inbox
            </h2>

            <p className="text-gray-600 text-base sm:text-lg max-w-xl mx-auto font-normal">
              Subscribe and get exclusive weekly offers, seasonal harvest deals and healthy organic grocery recipes.
            </p>

            {subscribed ? (
              <div className="bg-emerald-600 text-white p-4 rounded-2xl max-w-md mx-auto flex items-center justify-center gap-2 font-bold shadow-md animate-in zoom-in duration-300">
                <CheckCircle className="w-5 h-5 text-amber-300" />
                You're subscribed! Check your inbox for your 10% coupon code.
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="max-w-lg mx-auto flex flex-col sm:flex-row items-center gap-3 pt-4"
              >
                <div className="relative w-full">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full px-5 py-4 rounded-full bg-white text-gray-900 placeholder-gray-400 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-sm text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold px-8 py-4 rounded-full text-sm shadow-md hover:shadow-lg transition-all active:scale-95"
                >
                  Subscribe
                </button>
              </form>
            )}

            <div className="pt-2 text-xs text-gray-500 flex items-center justify-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>No spam. Unsubscribe anytime with 1-click.</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
