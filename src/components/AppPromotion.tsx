"use client";

import React from "react";
import { Smartphone, CheckCircle2, Star, Download, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const AppPromotion: React.FC = () => {
  const { showToast } = useCart();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-emerald-900 via-emerald-800 to-teal-900 rounded-3xl p-8 sm:p-12 lg:p-16 text-white relative shadow-2xl overflow-hidden">
          {/* Decorative Glow */}
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            {/* Left Text & Download Buttons */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest text-emerald-300 bg-emerald-800/80 px-3.5 py-1.5 rounded-full border border-emerald-700/60 inline-flex items-center gap-1.5">
                <Smartphone className="w-4 h-4 text-emerald-300" /> FRESHCART MOBILE APP
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
                Your Groceries, <br className="hidden sm:inline" />
                <span className="text-amber-300">One Tap Away</span>
              </h2>

              <p className="text-emerald-100 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
                Order your everyday essentials anytime, anywhere. Track live delivery on interactive maps, earn instant cashback, and get exclusive app-only deals.
              </p>

              {/* Benefits list */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-emerald-100 max-w-lg mx-auto lg:mx-0">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Live Delivery Rider Tracking
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> 1-Tap Reorder Favorite List
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> Instant Push Order Alerts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-amber-400" /> App-Exclusive 15% OFF Coupons
                </div>
              </div>

              {/* App Store & Google Play Buttons */}
              <div className="pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                {/* App Store */}
                <button
                  onClick={() => showToast("Opening iOS App Store link...")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 4.02c.62-.76 1.05-1.82.93-2.88-.91.04-2.02.61-2.67 1.37-.58.67 shadow-.86 1.08-.75 2.13 1.02.08 2.06-.52 2.69-1.32z"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">Download on the</span>
                    <span className="text-base font-extrabold">App Store</span>
                  </div>
                </button>

                {/* Google Play */}
                <button
                  onClick={() => showToast("Opening Google Play Store link...")}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-gray-900 font-extrabold px-6 py-3.5 rounded-2xl shadow-lg transition-all transform hover:-translate-y-0.5"
                >
                  <svg className="w-7 h-7 fill-current" viewBox="0 0 24 24">
                    <path d="M3.6 1.832A1.82 1.82 0 0 0 3 3.12v17.76c0 .507.214.975.6 1.3l.11.088 9.948-9.948v-.237L3.71 2.14l-.11-.308zm13.1 9.957-2.853-2.853-1.097 1.097 1.097 1.097 2.853-2.853zM4.77 1.137l10.45 6.033-2.47 2.47L4.77 1.137zm0 21.726 7.98-7.98 2.47 2.47-10.45 6.033 shadow-sm z-10"/>
                  </svg>
                  <div className="text-left leading-tight">
                    <span className="block text-[10px] text-gray-500 font-bold uppercase tracking-wider">GET IT ON</span>
                    <span className="text-base font-extrabold">Google Play</span>
                  </div>
                </button>
              </div>
            </div>

            {/* Right Phone Mockup Screen */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-64 sm:w-72 h-[480px] bg-gray-950 rounded-[44px] p-3 shadow-2xl border-4 border-emerald-700/50 transform rotate-2 hover:rotate-0 transition-transform duration-500">
                {/* Dynamic Phone Notch */}
                <div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-4 bg-gray-900 rounded-full z-20" />

                {/* Inner Screen */}
                <div className="w-full h-full bg-white rounded-[34px] overflow-hidden flex flex-col pt-7 px-3 text-gray-900 relative">
                  {/* Mock App Header */}
                  <div className="flex items-center justify-between pb-2 border-b border-gray-100">
                    <div className="flex items-center gap-1">
                      <div className="w-5 h-5 rounded-md bg-emerald-600 flex items-center justify-center text-white text-[10px] font-bold">F</div>
                      <span className="font-extrabold text-xs">FreshCart</span>
                    </div>
                    <span className="text-[10px] bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">30m ETA</span>
                  </div>

                  {/* App Mock Items */}
                  <div className="mt-3 space-y-2 flex-1">
                    <div className="bg-emerald-50 p-2.5 rounded-xl flex items-center gap-2 border border-emerald-100">
                      <div className="w-8 h-8 rounded-lg bg-emerald-500 text-white flex items-center justify-center text-xs">🍎</div>
                      <div className="flex-1 text-[11px]">
                        <span className="font-bold block text-gray-900">Organic Honeycrisp</span>
                        <span className="text-emerald-700 font-semibold">$3.99 / lb</span>
                      </div>
                    </div>

                    <div className="bg-amber-50 p-2.5 rounded-xl flex items-center gap-2 border border-amber-100">
                      <div className="w-8 h-8 rounded-lg bg-amber-500 text-white flex items-center justify-center text-xs">🥛</div>
                      <div className="flex-1 text-[11px]">
                        <span className="font-bold block text-gray-900">Farm Fresh Milk</span>
                        <span className="text-amber-800 font-semibold">$3.49</span>
                      </div>
                    </div>

                    {/* Delivery Map tracking simulation card */}
                    <div className="mt-4 bg-gray-900 text-white p-3 rounded-xl space-y-2">
                      <div className="flex items-center justify-between text-[10px]">
                        <span className="text-emerald-400 font-bold">Delivery Rider En Route</span>
                        <span className="text-gray-400">1.2 miles</span>
                      </div>
                      <div className="w-full bg-gray-800 h-1.5 rounded-full overflow-hidden">
                        <div className="bg-emerald-400 h-full w-3/4 rounded-full animate-pulse" />
                      </div>
                    </div>
                  </div>

                  {/* Mock Navbar bottom */}
                  <div className="py-2 border-t border-gray-100 flex justify-around text-[10px] font-bold text-gray-400">
                    <span className="text-emerald-600">Home</span>
                    <span>Shop</span>
                    <span>Cart</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
