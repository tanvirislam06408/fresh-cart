"use client";

import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  Star,
  Sparkles,
  ShieldCheck,
  Bike
} from "lucide-react";
import { useCart } from "@/context/CartContext";

export const HeroSection: React.FC = () => {
  const { showToast } = useCart();

  return (
    <section className="relative overflow-hidden pt-8 pb-16 lg:pt-14 lg:pb-24 bg-gradient-to-b from-emerald-50/40 via-[#FAF9F6] to-[#FAF9F6]">
      {/* Background Soft Glow Orbs */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-200/30 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column Text & CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8 text-center lg:text-left">
            {/* Small Badge */}
            <div className="inline-flex items-center gap-2 bg-emerald-100/80 border border-emerald-300/60 px-4 py-1.5 rounded-full text-emerald-800 text-xs sm:text-sm font-semibold tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600/30" />
              100% Fresh & Organic
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 tracking-tight leading-[1.12]">
              Fresh Groceries,{" "}
              <span className="block mt-1 sm:inline text-emerald-600 relative">
                Delivered to Your Door.
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-emerald-300/60 -z-10"
                  viewBox="0 0 100 20"
                  preserveAspectRatio="none"
                >
                  <path
                    d="M0 15 Q 50 0 100 15"
                    stroke="currentColor"
                    strokeWidth="6"
                    fill="none"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>

            {/* Supporting text */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Shop fresh fruits, vegetables, dairy, meat, snacks and everyday
              essentials — all in one place. Guaranteed farm-fresh quality brought straight to your kitchen.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-full text-base shadow-lg shadow-emerald-600/25 hover:shadow-xl hover:shadow-emerald-600/35 transition-all transform hover:-translate-y-0.5"
              >
                Shop Now
                <ArrowRight className="w-5 h-5" />
              </a>

              <a
                href="#categories"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white hover:bg-emerald-50/60 text-gray-800 font-semibold px-7 py-4 rounded-full text-base border border-gray-200/80 shadow-sm hover:border-emerald-200 transition-all"
              >
                Explore Categories
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="pt-4 border-t border-gray-200/60 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm font-medium text-gray-600">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fresh Products</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Secure Payment</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Visual Composition */}
          <div className="lg:col-span-5 relative flex justify-center items-center">
            {/* Organic backdrop shape */}
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 to-amber-100 rounded-3xl transform rotate-3 scale-95 opacity-70 -z-10 shadow-inner" />

            {/* Main Hero Card Container */}
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1200"
                alt="Fresh Organic Groceries Basket"
                className="w-full h-[380px] sm:h-[440px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 text-white p-3 rounded-2xl bg-black/30 backdrop-blur-md border border-white/20">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold">
                  <span className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Express Dispatch Ready
                  </span>
                  <span className="text-emerald-300 font-bold">100% Organic Certified</span>
                </div>
              </div>
            </div>

            {/* Floating Card 1: Express Delivery */}
            <div className="absolute -top-4 -left-4 sm:top-6 sm:-left-8 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3.5 animate-float">
              <div className="w-12 h-12 rounded-xl bg-amber-100 flex items-center justify-center text-amber-600 shadow-inner">
                <Bike className="w-6 h-6 stroke-[2.2]" />
              </div>
              <div>
                <span className="block text-[11px] text-gray-500 font-medium uppercase tracking-wider">
                  Delivery in
                </span>
                <span className="text-base sm:text-lg font-extrabold text-gray-900 flex items-center gap-1">
                  30–45 min <Clock className="w-4 h-4 text-emerald-600 inline" />
                </span>
              </div>
            </div>

            {/* Floating Card 2: Ratings */}
            <div className="absolute -bottom-6 -right-2 sm:bottom-8 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-float-delayed">
              <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                <Star className="w-6 h-6 fill-amber-400 text-amber-400" />
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-base font-extrabold text-gray-900">4.9</span>
                  <div className="flex text-amber-400">
                    {"★".repeat(5)}
                  </div>
                </div>
                <span className="text-xs text-gray-500 font-semibold">
                  10k+ Happy Customers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
