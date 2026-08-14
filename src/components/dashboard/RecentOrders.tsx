"use client";

import React, { useState } from "react";
import { RECENT_ORDERS_DATA, Order } from "./mockData";
import {
  ShoppingBag,
  Eye,
  ArrowRight,
  Search,
  CheckCircle2,
  Clock,
  Truck,
  XCircle,
  MoreVertical,
  Filter
} from "lucide-react";

export const RecentOrders: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<string>("All");

  // Filter orders based on search & status filter
  const filteredOrders = RECENT_ORDERS_DATA.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.product.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus =
      selectedStatus === "All" || order.status === selectedStatus;
    return matchesSearch && matchesStatus;
  });

  // Badge styling mapper
  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "Delivered":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-700 border border-emerald-200/80">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Delivered</span>
          </span>
        );
      case "Processing":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-700 border border-blue-200/80">
            <Clock className="w-3.5 h-3.5" />
            <span>Processing</span>
          </span>
        );
      case "Shipped":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-50 text-amber-700 border border-amber-200/80">
            <Truck className="w-3.5 h-3.5" />
            <span>Shipped</span>
          </span>
        );
      case "Cancelled":
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-rose-50 text-rose-700 border border-rose-200/80">
            <XCircle className="w-3.5 h-3.5" />
            <span>Cancelled</span>
          </span>
        );
    }
  };

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
      {/* Table Header Controls */}
      <div className="p-5 sm:p-6 border-b border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-emerald-600" />
            <span>Recent Orders</span>
          </h2>
          <p className="text-xs text-gray-500 mt-0.5">
            Manage and track your latest grocery deliveries
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex items-center gap-2.5 flex-wrap">
          {/* Search Input */}
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search order ID or product..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all w-48 sm:w-60"
            />
          </div>

          {/* Status Dropdown Filter */}
          <div className="relative">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="pl-3 pr-8 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs font-semibold text-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 cursor-pointer appearance-none"
            >
              <option value="All">All Statuses</option>
              <option value="Delivered">Delivered</option>
              <option value="Processing">Processing</option>
              <option value="Shipped">Shipped</option>
              <option value="Cancelled">Cancelled</option>
            </select>
            <Filter className="w-3.5 h-3.5 text-gray-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>
      </div>

      {/* Table Content */}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-50/70 border-b border-gray-100 text-[11px] font-bold uppercase tracking-wider text-gray-500">
              <th className="py-3.5 px-6">Order ID</th>
              <th className="py-3.5 px-6">Product Details</th>
              <th className="py-3.5 px-6">Date</th>
              <th className="py-3.5 px-6">Amount</th>
              <th className="py-3.5 px-6">Status</th>
              <th className="py-3.5 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 text-xs sm:text-sm font-medium">
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-emerald-50/30 transition-colors group"
                >
                  {/* Order ID */}
                  <td className="py-4 px-6 font-mono font-bold text-emerald-700">
                    {order.id}
                  </td>

                  {/* Product Details */}
                  <td className="py-4 px-6">
                    <div className="font-bold text-gray-900">{order.product}</div>
                    <div className="text-[11px] text-gray-400 font-medium">
                      {order.itemsCount} items in order
                    </div>
                  </td>

                  {/* Date */}
                  <td className="py-4 px-6 text-gray-600 font-medium whitespace-nowrap">
                    {order.date}
                  </td>

                  {/* Amount */}
                  <td className="py-4 px-6 font-extrabold text-gray-900">
                    ${order.amount.toFixed(2)}
                  </td>

                  {/* Status Badge */}
                  <td className="py-4 px-6 whitespace-nowrap">
                    {getStatusBadge(order.status)}
                  </td>

                  {/* Action Button */}
                  <td className="py-4 px-6 text-right whitespace-nowrap">
                    <button
                      aria-label="View order details"
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 hover:bg-emerald-100 px-3 py-1.5 rounded-xl border border-emerald-200/60 transition-all hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6} className="py-8 text-center text-gray-400 font-medium">
                  No orders match your filter parameters.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Footer & View All Button */}
      <div className="p-4 sm:p-5 bg-gray-50/50 border-t border-gray-100 flex items-center justify-between">
        <span className="text-xs font-semibold text-gray-500">
          Showing {filteredOrders.length} of {RECENT_ORDERS_DATA.length} recent orders
        </span>

        <button className="inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs px-4 py-2 rounded-xl shadow-xs transition-all hover:shadow-md">
          <span>View All Orders</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
};
