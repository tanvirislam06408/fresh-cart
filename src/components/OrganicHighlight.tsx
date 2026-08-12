"use client";

import React from "react";
import { CheckCircle2, ArrowRight, Award, ShieldCheck, Sprout } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const OrganicHighlight: React.FC = () => {
  const { showToast } = useCart();

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] border-y border-gray-100/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column Editorial Image */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 group">
              <img
                src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=1000"
                alt="Fresh harvested organic produce from local farm"
                className="w-full h-[400px] sm:h-[500px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
              />

              {/* Floating Badge on Image */}
              <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-700">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <span className="block text-xs font-bold text-gray-900">
                    100% Certified Organic
                  </span>
                  <span className="text-[11px] text-gray-500 font-medium">
                    Zero Synthetic Pesticides
                  </span>
                </div>
              </div>

              {/* Floating Badge Bottom Right */}
              <div className="absolute bottom-6 right-6 bg-emerald-900/90 backdrop-blur-md text-white p-3.5 rounded-2xl shadow-xl flex items-center gap-3 border border-emerald-700/50">
                <Sprout className="w-6 h-6 text-emerald-400" />
                <div>
                  <span className="text-xs font-extrabold block text-white">Direct Farm Sourcing</span>
                  <span className="text-[10px] text-emerald-200">Harvested within 24 hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Text */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
                QUALITY YOU CAN TASTE
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight leading-tight">
                From Farm to Your Kitchen
              </h2>
            </div>

            <p className="text-gray-600 text-base sm:text-lg leading-relaxed font-normal">
              We carefully select fresh and high-quality products so you can enjoy better food every day. We partner directly with verified local farmers who practice sustainable and chemical-free agriculture.
            </p>

            {/* 3 Bullet Points */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Carefully selected products</h4>
                  <p className="text-sm text-gray-500">Every piece of fruit and vegetable is inspected by hand for peak freshness.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Quality checked</h4>
                  <p className="text-sm text-gray-500">Temperature-controlled storage ensuring optimal crispness and taste.</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <div className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <CheckCircle2 className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-gray-900">Freshness guaranteed</h4>
                  <p className="text-sm text-gray-500">If you are not 100% satisfied with freshness, get an instant replacement or refund.</p>
                </div>
              </div>
            </div>

            {/* Learn More CTA */}
            <div className="pt-4">
              <button
                onClick={() => showToast("Learn more about FreshCart's farm partners & sustainability!")}
                className="inline-flex items-center gap-2.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-7 py-3.5 rounded-full text-base shadow-md hover:shadow-lg transition-all"
              >
                Learn More
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
