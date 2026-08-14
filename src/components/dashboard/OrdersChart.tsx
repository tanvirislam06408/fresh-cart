"use client";

import React, { useState } from "react";
import { MONTHLY_ANALYTICS } from "./mockData";
import { ShoppingBag, TrendingUp } from "lucide-react";

export const OrdersChart: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const maxOrders = Math.max(...MONTHLY_ANALYTICS.map((d) => d.orders)) + 4; // 28 max scale
  const chartHeight = 180;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
            <span>Orders Overview</span>
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Monthly completed order volume (Jan – Jun 2026)</p>
        </div>

        <div className="flex items-center gap-1 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full text-xs font-bold border border-emerald-100">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+33.3% vs May</span>
        </div>
      </div>

      {/* SVG Bar Chart with Hover Tooltips */}
      <div className="relative pt-4 pb-2">
        <div className="h-[200px] w-full flex items-end justify-between gap-2 sm:gap-4 relative">
          {/* Horizontal Grid lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-40">
            <div className="border-b border-dashed border-gray-200 w-full" />
            <div className="border-b border-dashed border-gray-200 w-full" />
            <div className="border-b border-dashed border-gray-200 w-full" />
            <div className="border-b border-dashed border-gray-200 w-full" />
          </div>

          {/* Bar Items */}
          {MONTHLY_ANALYTICS.map((item, idx) => {
            const barHeight = (item.orders / maxOrders) * chartHeight;
            const isHovered = hoveredIndex === idx;

            return (
              <div
                key={item.month}
                onMouseEnter={() => setHoveredIndex(idx)}
                onMouseLeave={() => setHoveredIndex(null)}
                className="flex-1 flex flex-col items-center group relative cursor-pointer z-10"
              >
                {/* Floating Tooltip */}
                {isHovered && (
                  <div className="absolute -top-12 bg-gray-900 text-white text-xs font-bold px-2.5 py-1 rounded-lg shadow-lg whitespace-nowrap z-20 animate-in fade-in zoom-in duration-150">
                    <span>{item.orders} Orders</span>
                    <div className="absolute left-1/2 -bottom-1 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                  </div>
                )}

                {/* Bar Visual */}
                <div className="w-full max-w-[42px] bg-emerald-50/50 rounded-t-xl overflow-hidden flex items-end h-[180px]">
                  <div
                    style={{ height: `${barHeight}px` }}
                    className={`w-full transition-all duration-300 rounded-t-xl ${
                      isHovered
                        ? "bg-gradient-to-t from-emerald-600 to-teal-400 shadow-md scale-y-[1.02]"
                        : "bg-gradient-to-t from-emerald-600 to-emerald-500"
                    }`}
                  />
                </div>

                {/* X-Axis Label */}
                <span
                  className={`text-[11px] font-semibold mt-2 transition-colors ${
                    isHovered ? "text-emerald-700 font-extrabold" : "text-gray-500"
                  }`}
                >
                  {item.month.slice(0, 3)}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Legend / Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-600" /> Total Orders
        </span>
        <span className="font-bold text-gray-700">Peak: 24 Orders (June)</span>
      </div>
    </div>
  );
};
