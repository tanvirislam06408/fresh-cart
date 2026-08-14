"use client";

import React, { useState } from "react";
import { MONTHLY_ANALYTICS } from "./mockData";
import { DollarSign, ArrowUpRight } from "lucide-react";

export const SpendingChart: React.FC = () => {
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const maxSpending = 450;
  const width = 500;
  const height = 180;

  // Calculate coordinates for SVG path
  const points = MONTHLY_ANALYTICS.map((d, index) => {
    const x = (index / (MONTHLY_ANALYTICS.length - 1)) * (width - 40) + 20;
    const y = height - (d.spending / maxSpending) * (height - 30) - 15;
    return { x, y, data: d };
  });

  // Construct SVG Path String
  const pathD = points.reduce((acc, point, i) => {
    if (i === 0) return `M ${point.x} ${point.y}`;
    const prev = points[i - 1];
    const cx = (prev.x + point.x) / 2;
    return `${acc} C ${cx} ${prev.y}, ${cx} ${point.y}, ${point.x} ${point.y}`;
  }, "");

  // Area Path String (closed to bottom)
  const areaD = `${pathD} L ${points[points.length - 1].x} ${height} L ${points[0].x} ${height} Z`;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
            <DollarSign className="w-4 h-4 text-teal-600" />
            <span>Monthly Spending</span>
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Total grocery spend accumulation (Jan – Jun 2026)</p>
        </div>

        <div className="flex items-center gap-1 text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full text-xs font-bold border border-teal-100">
          <ArrowUpRight className="w-3.5 h-3.5" />
          <span>+28.1% vs May</span>
        </div>
      </div>

      {/* SVG Smooth Curve Area Chart */}
      <div className="relative pt-2 pb-2">
        <div className="h-[200px] w-full relative">
          <svg viewBox={`0 0 ${width} ${height + 25}`} className="w-full h-full overflow-visible">
            <defs>
              <linearGradient id="spendingGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#0d9488" stopOpacity="0.35" />
                <stop offset="100%" stopColor="#0d9488" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Background Grid Horizontal Lines */}
            <line x1="0" y1="20" x2={width} y2="20" stroke="#f1f5f9" strokeDasharray="4 4" />
            <line x1="0" y1="75" x2={width} y2="75" stroke="#f1f5f9" strokeDasharray="4 4" />
            <line x1="0" y1="130" x2={width} y2="130" stroke="#f1f5f9" strokeDasharray="4 4" />

            {/* Fill Area */}
            <path d={areaD} fill="url(#spendingGradient)" />

            {/* Smooth Line */}
            <path d={pathD} fill="none" stroke="#0d9488" strokeWidth="3.5" strokeLinecap="round" />

            {/* Interactive Points */}
            {points.map((pt, idx) => {
              const isHovered = hoveredIdx === idx;
              return (
                <g key={pt.data.month} onMouseEnter={() => setHoveredIdx(idx)} onMouseLeave={() => setHoveredIdx(null)}>
                  {/* Hover pulse ring */}
                  {isHovered && (
                    <circle cx={pt.x} cy={pt.y} r="10" fill="#0d9488" fillOpacity="0.25" className="animate-ping" />
                  )}

                  {/* Circle Dot */}
                  <circle
                    cx={pt.x}
                    cy={pt.y}
                    r={isHovered ? "6" : "4.5"}
                    fill="#ffffff"
                    stroke="#0d9488"
                    strokeWidth={isHovered ? "3" : "2.5"}
                    className="transition-all cursor-pointer"
                  />

                  {/* X Axis Labels */}
                  <text
                    x={pt.x}
                    y={height + 20}
                    textAnchor="middle"
                    className={`text-[11px] font-semibold transition-colors ${
                      isHovered ? "fill-teal-700 font-bold" : "fill-gray-400"
                    }`}
                  >
                    {pt.data.month.slice(0, 3)}
                  </text>
                </g>
              );
            })}
          </svg>

          {/* Active Hover Tooltip Card */}
          {hoveredIdx !== null && (
            <div
              style={{
                left: `${(hoveredIdx / (MONTHLY_ANALYTICS.length - 1)) * 85 + 5}%`,
              }}
              className="absolute top-2 -translate-x-1/2 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl shadow-xl z-20 pointer-events-none transition-all"
            >
              <div className="text-teal-300 text-[10px] uppercase font-bold tracking-wider">
                {MONTHLY_ANALYTICS[hoveredIdx].month}
              </div>
              <div className="text-sm font-extrabold">${MONTHLY_ANALYTICS[hoveredIdx].spending}.00</div>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="flex items-center gap-1.5 font-medium">
          <span className="w-2.5 h-2.5 rounded-full bg-teal-600" /> Total Spend: $1,430.00
        </span>
        <span className="font-bold text-gray-700">June Spend: $410.00</span>
      </div>
    </div>
  );
};
