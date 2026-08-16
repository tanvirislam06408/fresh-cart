"use client";

import React from "react";
import { Leaf, Loader2 } from "lucide-react";

interface GlobalLoadingProps {
  message?: string;
  fullScreen?: boolean;
}

export function GlobalLoading({
  message = "Loading fresh groceries...",
  fullScreen = true,
}: GlobalLoadingProps) {
  const containerClasses = fullScreen
    ? "fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FAF9F6]/90 backdrop-blur-md px-4"
    : "w-full min-h-[400px] flex flex-col items-center justify-center bg-[#FAF9F6]/80 p-8 rounded-3xl";

  return (
    <div className={containerClasses}>
      <div className="relative flex flex-col items-center max-w-sm w-full text-center">
        {/* Animated Brand Logo Container */}
        <div className="relative mb-6">
          {/* Outer glowing pulsing ring */}
          <div className="absolute -inset-3 rounded-3xl bg-gradient-to-r from-emerald-500/20 to-teal-500/20 blur-lg animate-pulse" />

          {/* Rotating Loader Border */}
          <div className="absolute -inset-1.5 rounded-2xl border-2 border-emerald-500/30 border-t-emerald-600 animate-spin" />

          {/* FreshCart Leaf Badge */}
          <div className="relative w-16 h-16 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-xl shadow-emerald-500/25 animate-float">
            <Leaf className="w-9 h-9 fill-white/20 stroke-[2.2]" />
          </div>
        </div>

        {/* Brand Name */}
        <div className="flex flex-col items-center mb-4">
          <span className="text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
            Fresh<span className="text-emerald-600">Cart</span>
          </span>
          <span className="text-[10px] uppercase font-extrabold tracking-widest text-emerald-700 mt-1">
            Organic Supermarket
          </span>
        </div>

        {/* Dynamic Loading Message */}
        <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800 bg-emerald-50/90 px-4 py-2 rounded-full border border-emerald-200/60 shadow-xs mb-6">
          <Loader2 className="w-4 h-4 animate-spin text-emerald-600" />
          <span>{message}</span>
        </div>

        {/* Subtle Animated Progress Dots */}
        <div className="flex items-center gap-1.5">
          <div className="w-2 h-2 rounded-full bg-emerald-600 animate-bounce [animation-delay:-0.3s]" />
          <div className="w-2 h-2 rounded-full bg-teal-500 animate-bounce [animation-delay:-0.15s]" />
          <div className="w-2 h-2 rounded-full bg-emerald-400 animate-bounce" />
        </div>
      </div>
    </div>
  );
}
