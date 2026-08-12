"use client";

import React from "react";
import { ArrowRight, Tag, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const PromoBanner: React.FC = () => {
  const { showToast } = useCart();

  return (
    <section className="py-10 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-emerald-900 via-emerald-800 to-teal-900 text-white shadow-2xl p-8 sm:p-12 lg:p-14">
          {/* Decorative shapes */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-80 h-80 bg-amber-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-amber-400/20 border border-amber-300/40 px-3.5 py-1 rounded-full text-amber-300 text-xs sm:text-sm font-semibold">
                <Tag className="w-4 h-4 text-amber-400" />
                WELCOME PROMOTION
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Freshness Delivered. <br />
                <span className="text-amber-300">Get up to 30% OFF</span> on your first order.
              </h2>

              <p className="text-emerald-100 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal">
                Use code <strong className="bg-white/10 px-2 py-0.5 rounded text-amber-300 font-mono">FRESH30</strong> at checkout to claim your discount. Free delivery included!
              </p>

              <div className="pt-2 flex justify-center lg:justify-start">
                <button
                  onClick={() => showToast("Offer coupon FRESH30 applied! Enjoy 30% OFF.")}
                  className="inline-flex items-center gap-3 bg-amber-400 hover:bg-amber-300 text-gray-950 font-extrabold px-8 py-4 rounded-full text-base shadow-lg shadow-amber-400/25 hover:shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95"
                >
                  Shop the Offer
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Right Image Composition */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md h-64 sm:h-80 rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20 transform rotate-1 hover:rotate-0 transition-transform duration-500">
                <img
                  src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?auto=format&fit=crop&q=80&w=1000"
                  alt="Fresh Organic Basket Offer"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute top-4 right-4 bg-amber-400 text-gray-950 font-black text-xs px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" /> 30% OFF
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
