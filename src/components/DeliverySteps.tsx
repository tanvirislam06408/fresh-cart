"use client";

import React from "react";
import { ShoppingBasket, CreditCard, Truck, ArrowRight } from "lucide-react";

export const DeliverySteps: React.FC = () => {
  const steps = [
    {
      step: "01",
      icon: ShoppingBasket,
      title: "Choose Your Groceries",
      description: "Browse thousands of fresh organic produce, dairy, meats, and everyday kitchen essentials.",
      badgeColor: "bg-emerald-100 text-emerald-800",
    },
    {
      step: "02",
      icon: CreditCard,
      title: "Place Your Order",
      description: "Securely checkout in just a few clicks with flexible payment methods & express slots.",
      badgeColor: "bg-amber-100 text-amber-800",
    },
    {
      step: "03",
      icon: Truck,
      title: "Get It Delivered",
      description: "Relax while our local rider brings your temperature-controlled groceries straight to your door.",
      badgeColor: "bg-teal-100 text-teal-800",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#FAF9F6] border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
            EASY & SEAMLESS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
            Groceries at Your Door in 3 Simple Steps
          </h2>
          <p className="text-gray-600 text-base sm:text-lg mt-3">
            Experience effortless online grocery shopping with real-time tracking and fast doorstep delivery.
          </p>
        </div>

        {/* 3 Step Cards with connecting arrows */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div key={idx} className="relative group">
                <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 h-full flex flex-col justify-between">
                  <div>
                    {/* Top Row Step Badge & Icon */}
                    <div className="flex items-center justify-between mb-8">
                      <span className={`text-xs font-black px-3 py-1 rounded-full ${item.badgeColor}`}>
                        STEP {item.step}
                      </span>
                      <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-colors shadow-inner">
                        <IconComponent className="w-7 h-7 stroke-[2.2]" />
                      </div>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-gray-100 flex items-center text-xs font-bold text-emerald-600 group-hover:text-emerald-700">
                    <span>Learn process details</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>

                {/* Connecting arrow for desktop */}
                {idx < 2 && (
                  <div className="hidden md:block absolute -right-5 top-1/2 -translate-y-1/2 z-10 text-emerald-300">
                    <ArrowRight className="w-8 h-8 stroke-[1.5]" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
