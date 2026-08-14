"use client";

import React, { useState } from "react";
import { ORDER_STATUS_BREAKDOWN } from "./mockData";
import { PieChart, CheckCircle2, Clock, Truck, XCircle } from "lucide-react";

export const OrderStatusChart: React.FC = () => {
  const [hoveredStatus, setHoveredStatus] = useState<string | null>(null);

  const totalOrders = ORDER_STATUS_BREAKDOWN.reduce((sum, item) => sum + item.count, 0);

  // Helper to render status icons
  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Delivered":
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case "Processing":
        return <Clock className="w-3.5 h-3.5 text-blue-600" />;
      case "Shipped":
        return <Truck className="w-3.5 h-3.5 text-amber-600" />;
      case "Cancelled":
        return <XCircle className="w-3.5 h-3.5 text-rose-600" />;
      default:
        return null;
    }
  };

  // Convert percentages to SVG strokeDasharray & strokeDashoffset
  const radius = 65;
  const strokeWidth = 18;
  const circumference = 2 * Math.PI * radius; // ~408.4

  let accumulatedPercent = 0;

  return (
    <div className="bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm flex flex-col justify-between">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div>
          <h3 className="text-base font-extrabold text-gray-900 flex items-center gap-2">
            <PieChart className="w-4 h-4 text-purple-600" />
            <span>Order Status Breakdown</span>
          </h3>
          <p className="text-xs text-gray-500 mt-0.5">Distribution across all 24 orders</p>
        </div>
      </div>

      {/* Main Container: SVG Donut Chart + Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center my-auto py-2">
        {/* Left: Interactive SVG Donut */}
        <div className="sm:col-span-6 flex justify-center relative">
          <div className="relative w-44 h-44 flex items-center justify-center">
            <svg viewBox="0 0 160 160" className="w-full h-full transform -rotate-90">
              {ORDER_STATUS_BREAKDOWN.map((item) => {
                const strokeDasharray = `${(item.percentage / 100) * circumference} ${circumference}`;
                const strokeDashoffset = -((accumulatedPercent / 100) * circumference);
                accumulatedPercent += item.percentage;
                const isHovered = hoveredStatus === item.status;

                return (
                  <circle
                    key={item.status}
                    cx="80"
                    cy="80"
                    r={radius}
                    fill="transparent"
                    stroke={item.color}
                    strokeWidth={isHovered ? strokeWidth + 4 : strokeWidth}
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset={strokeDashoffset}
                    onMouseEnter={() => setHoveredStatus(item.status)}
                    onMouseLeave={() => setHoveredStatus(null)}
                    className="transition-all duration-300 cursor-pointer"
                  />
                );
              })}
            </svg>

            {/* Center Content Badge */}
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none text-center">
              <span className="text-2xl font-black text-gray-900 leading-none">
                {hoveredStatus
                  ? ORDER_STATUS_BREAKDOWN.find((s) => s.status === hoveredStatus)?.count
                  : totalOrders}
              </span>
              <span className="text-[10px] uppercase font-extrabold tracking-wider text-gray-400 mt-1">
                {hoveredStatus || "Total Orders"}
              </span>
            </div>
          </div>
        </div>

        {/* Right: Legend Breakdown List */}
        <div className="sm:col-span-6 space-y-2.5">
          {ORDER_STATUS_BREAKDOWN.map((item) => {
            const isHovered = hoveredStatus === item.status;
            return (
              <div
                key={item.status}
                onMouseEnter={() => setHoveredStatus(item.status)}
                onMouseLeave={() => setHoveredStatus(null)}
                className={`p-2.5 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  isHovered
                    ? "bg-gray-50 border-gray-200 shadow-xs scale-[1.02]"
                    : "border-transparent hover:bg-gray-50/70"
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <div
                    className="w-3 h-3 rounded-full shrink-0"
                    style={{ backgroundColor: item.color }}
                  />
                  <div className="flex items-center gap-1.5">
                    {getStatusIcon(item.status)}
                    <span className="text-xs font-bold text-gray-800">{item.status}</span>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-black text-gray-900">{item.count}</span>
                  <span className="text-[11px] font-semibold text-gray-400">
                    ({item.percentage}%)
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Footer */}
      <div className="pt-3 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
        <span className="font-medium text-gray-600">Success Rate: 95.8%</span>
        <span className="font-bold text-emerald-700">High Reliability</span>
      </div>
    </div>
  );
};
