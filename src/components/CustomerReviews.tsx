"use client";

import React from "react";
import { Star, CheckCircle2, Quote, Users, Award, ThumbsUp } from "lucide-react";
import { REVIEWS } from "@/data/products";

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Stats */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
              TESTIMONIALS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Loved by Thousands of Customers
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2">
              See why over 10,000+ families trust FreshCart for their weekly grocery needs.
            </p>
          </div>

          {/* Stats Badges */}
          <div className="flex items-center gap-4 sm:gap-6 bg-emerald-50/70 border border-emerald-100 p-4 rounded-3xl">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-emerald-600 text-white flex items-center justify-center font-bold">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-black text-gray-900 block leading-tight">10,000+</span>
                <span className="text-xs text-gray-600 font-medium">Happy Customers</span>
              </div>
            </div>

            <div className="h-8 w-px bg-emerald-200" />

            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-2xl bg-amber-400 text-amber-950 flex items-center justify-center font-bold">
                <Star className="w-5 h-5 fill-amber-950" />
              </div>
              <div>
                <span className="text-lg font-black text-gray-900 block leading-tight">4.9 / 5.0</span>
                <span className="text-xs text-gray-600 font-medium">Average Rating</span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAF9F6] rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-200/60 pointer-events-none group-hover:text-emerald-300/80 transition-colors" />

              <div>
                {/* 5-Star Rating */}
                <div className="flex text-amber-400 mb-4">
                  {Array.from({ length: rev.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-gray-700 text-base leading-relaxed italic mb-6">
                  "{rev.reviewText}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="flex items-center gap-3.5 pt-4 border-t border-gray-200/60">
                <img
                  src={rev.avatar}
                  alt={rev.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-emerald-500 shadow-sm"
                />
                <div>
                  <div className="flex items-center gap-1.5">
                    <h4 className="font-bold text-gray-900 text-base">{rev.name}</h4>
                    <span className="inline-flex items-center gap-0.5 text-[10px] font-extrabold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-full">
                      <CheckCircle2 className="w-3 h-3" /> Verified
                    </span>
                  </div>
                  <span className="text-xs text-gray-500 font-medium block">
                    {rev.purchasedItem} • {rev.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
