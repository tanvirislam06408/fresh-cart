"use client";

import React from "react";
import { Truck, HelpCircle, PackageCheck, Sparkles } from "lucide-react";

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-emerald-950 text-emerald-100 text-xs sm:text-sm py-2 px-4 border-b border-emerald-900/60">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2">
        <div className="flex items-center gap-2 font-medium tracking-wide mx-auto sm:mx-0">
          <span className="inline-flex items-center justify-center bg-emerald-800/80 text-emerald-300 rounded-full px-2 py-0.5 text-[11px] font-semibold">
            <Sparkles className="w-3 h-3 mr-1 text-emerald-300" /> PROMO
          </span>
          <span className="flex items-center gap-1.5">
            <Truck className="w-4 h-4 text-emerald-400" />
            🚚 Free delivery on orders over <strong className="text-white font-bold">$50</strong>
          </span>
        </div>

        <div className="hidden sm:flex items-center gap-6 text-emerald-300/80 text-xs font-medium">
          <a
            href="#support"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <HelpCircle className="w-3.5 h-3.5" /> Help Center
          </a>
          <span className="text-emerald-800">•</span>
          <a
            href="#track"
            className="flex items-center gap-1 hover:text-white transition-colors"
          >
            <PackageCheck className="w-3.5 h-3.5" /> Track Order
          </a>
        </div>
      </div>
    </div>
  );
};
