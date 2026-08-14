"use client";

import React from "react";
import { StatItem } from "./mockData";
import {
  ShoppingBag,
  Clock,
  CheckCircle2,
  ShoppingCart,
  TrendingUp,
  ArrowUpRight
} from "lucide-react";

interface StatCardProps {
  stat: StatItem;
}

export const StatCard: React.FC<StatCardProps> = ({ stat }) => {
  // Map icon name to Lucide component
  const renderIcon = () => {
    switch (stat.iconName) {
      case "ShoppingBag":
        return <ShoppingBag className="w-5 h-5" />;
      case "Clock":
        return <Clock className="w-5 h-5" />;
      case "CheckCircle2":
        return <CheckCircle2 className="w-5 h-5" />;
      case "ShoppingCart":
        return <ShoppingCart className="w-5 h-5" />;
      default:
        return <ShoppingBag className="w-5 h-5" />;
    }
  };

  // Color theme mapping for background highlights and icons
  const themeStyles = {
    emerald: {
      bg: "bg-emerald-50 text-emerald-600 border-emerald-100/80",
      badge: "bg-emerald-100/70 text-emerald-800",
      glow: "hover:border-emerald-200 hover:shadow-emerald-500/5",
    },
    amber: {
      bg: "bg-amber-50 text-amber-600 border-amber-100/80",
      badge: "bg-amber-100/70 text-amber-800",
      glow: "hover:border-amber-200 hover:shadow-amber-500/5",
    },
    teal: {
      bg: "bg-teal-50 text-teal-600 border-teal-100/80",
      badge: "bg-teal-100/70 text-teal-800",
      glow: "hover:border-teal-200 hover:shadow-teal-500/5",
    },
    purple: {
      bg: "bg-purple-50 text-purple-600 border-purple-100/80",
      badge: "bg-purple-100/70 text-purple-800",
      glow: "hover:border-purple-200 hover:shadow-purple-500/5",
    },
  }[stat.colorTheme];

  return (
    <div
      className={`bg-white rounded-2xl p-5 sm:p-6 border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-md ${themeStyles.glow} flex flex-col justify-between relative overflow-hidden group`}
    >
      {/* Top Header: Label & Icon */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-xs font-bold uppercase tracking-wider text-gray-500">
          {stat.title}
        </span>
        <div
          className={`w-10 h-10 rounded-xl flex items-center justify-center border ${themeStyles.bg} shadow-xs group-hover:scale-105 transition-transform`}
        >
          {renderIcon()}
        </div>
      </div>

      {/* Main Content: Large Number & Trend Indicator */}
      <div className="flex items-baseline justify-between gap-2 mt-1">
        <div className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          {stat.value}
        </div>

        <div className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold ${themeStyles.badge}`}>
          <TrendingUp className="w-3 h-3" />
          <span>{stat.change}</span>
        </div>
      </div>
    </div>
  );
};
