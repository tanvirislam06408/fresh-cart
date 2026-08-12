"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const CategorySection: React.FC = () => {
  const { showToast } = useCart();

  return (
    <section id="categories" className="py-16 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
            SHOP BY CATEGORY
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Everything You Need, All in One Place
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3 font-normal">
            Fresh essentials for every meal and every moment. Sourced straight from local farms and organic growers.
          </p>
        </div>

        {/* Categories Responsive Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              onClick={() => showToast(`Filtering by ${cat.name}`)}
              className={`group relative cursor-pointer rounded-2xl sm:rounded-3xl p-4 sm:p-6 bg-gradient-to-b ${cat.bgGradient} border border-gray-100/80 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col justify-between overflow-hidden`}
            >
              {/* Top Row: Image & Hover Arrow */}
              <div className="flex items-start justify-between mb-4">
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-md bg-white group-hover:scale-110 transition-transform duration-500">
                  <img
                    src={cat.image}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center"
                  />
                </div>

                <div className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 group-hover:bg-emerald-600 group-hover:text-white transition-all transform translate-x-2 group-hover:translate-x-0">
                  <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                </div>
              </div>

              {/* Bottom Info */}
              <div>
                <h3 className="text-base sm:text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {cat.name}
                </h3>
                <span className="text-xs sm:text-sm font-medium text-gray-500 mt-1 block">
                  {cat.itemCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
