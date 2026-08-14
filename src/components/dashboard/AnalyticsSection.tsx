"use client";

import React from "react";
import { OrdersChart } from "./OrdersChart";
import { SpendingChart } from "./SpendingChart";
import { OrderStatusChart } from "./OrderStatusChart";

export const AnalyticsSection: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-extrabold text-gray-900 tracking-tight">
          Analytics Overview
        </h2>
        <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
          Updated 10m ago
        </span>
      </div>

      {/* Grid: 2 Charts on top row, 1 chart or full width breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-6">
          <OrdersChart />
        </div>

        <div className="lg:col-span-6">
          <SpendingChart />
        </div>

        <div className="lg:col-span-12">
          <OrderStatusChart />
        </div>
      </div>
    </div>
  );
};
