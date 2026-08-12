"use client";

import React from "react";
import { Leaf, Truck, Tag, ShieldCheck } from "lucide-react";

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: Leaf,
      title: "Fresh Every Day",
      description: "Quality-checked groceries sourced from trusted local suppliers and organic farms daily.",
      bg: "bg-emerald-50",
      iconColor: "text-emerald-600",
      border: "border-emerald-100"
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your groceries delivered quickly and safely straight to your doorstep in 30-45 minutes.",
      bg: "bg-amber-50",
      iconColor: "text-amber-600",
      border: "border-amber-100"
    },
    {
      icon: Tag,
      title: "Best Prices",
      description: "Great premium quality products at direct-from-farm prices you will absolutely love.",
      bg: "bg-teal-50",
      iconColor: "text-teal-600",
      border: "border-teal-100"
    },
    {
      icon: ShieldCheck,
      title: "Secure Shopping",
      description: "Your financial details and personal information stay 100% protected with bank-grade encryption.",
      bg: "bg-blue-50",
      iconColor: "text-blue-600",
      border: "border-blue-100"
    }
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
            OUR PROMISE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Why Shop With FreshCart?
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            We redefine how you buy everyday groceries with speed, quality, and complete transparency.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={idx}
                className={`p-6 sm:p-8 rounded-3xl bg-white border ${item.border} shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1.5 flex flex-col justify-between`}
              >
                <div>
                  <div
                    className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center ${item.iconColor} mb-6 shadow-inner`}
                  >
                    <IconComponent className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {item.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
