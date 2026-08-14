"use client";

import React from "react";
import { RECENT_ACTIVITIES, ActivityItem } from "./mockData";
import {
  Activity,
  CheckCircle2,
  ShoppingCart,
  MapPin,
  Truck,
  Heart
} from "lucide-react";

export const RecentActivity: React.FC = () => {
  // Map icon per activity type
  const getActivityIcon = (type: ActivityItem["type"]) => {
    switch (type) {
      case "delivered":
        return <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />;
      case "cart":
        return <ShoppingCart className="w-3.5 h-3.5 text-purple-600" />;
      case "address":
        return <MapPin className="w-3.5 h-3.5 text-blue-600" />;
      case "shipped":
        return <Truck className="w-3.5 h-3.5 text-amber-600" />;
      case "wishlist":
        return <Heart className="w-3.5 h-3.5 text-rose-600" />;
    }
  };

  const getActivityBg = (type: ActivityItem["type"]) => {
    switch (type) {
      case "delivered":
        return "bg-emerald-50 border-emerald-200/80";
      case "cart":
        return "bg-purple-50 border-purple-200/80";
      case "address":
        return "bg-blue-50 border-blue-200/80";
      case "shipped":
        return "bg-amber-50 border-amber-200/80";
      case "wishlist":
        return "bg-rose-50 border-rose-200/80";
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-5">
          <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
            <Activity className="w-5 h-5 text-teal-600" />
            <span>Recent Activity</span>
          </h2>
          <span className="text-xs font-semibold text-gray-400">Live Timeline</span>
        </div>

        {/* Timeline Items */}
        <div className="relative pl-6 space-y-4 before:absolute before:left-2.5 before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-100">
          {RECENT_ACTIVITIES.map((act) => (
            <div key={act.id} className="relative group">
              {/* Timeline Bullet */}
              <div
                className={`absolute -left-6 top-0.5 w-5 h-5 rounded-full border flex items-center justify-center shadow-xs transition-transform group-hover:scale-110 ${getActivityBg(
                  act.type
                )}`}
              >
                {getActivityIcon(act.type)}
              </div>

              {/* Activity Info */}
              <div>
                <p className="text-xs font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
                  {act.title}
                </p>
                <span className="text-[11px] font-medium text-gray-400">{act.time}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-6 pt-3 border-t border-gray-100 text-center">
        <button className="text-xs font-bold text-emerald-700 hover:text-emerald-800 transition-colors">
          View Activity Log →
        </button>
      </div>
    </div>
  );
};
