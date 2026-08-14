"use client";

import React from "react";
import Link from "next/link";
import {
  Leaf,
  LayoutDashboard,
  ShoppingBag,
  ShoppingCart,
  User,
  LogOut,
  ChevronLeft,
  ChevronRight,
  X,
  Sparkles,
  Heart
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export type NavTab = "dashboard" | "orders" | "cart" | "profile";

interface SidebarProps {
  activeTab: NavTab;
  setActiveTab: (tab: NavTab) => void;
  isCollapsed: boolean;
  setIsCollapsed: (collapsed: boolean) => void;
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({
  activeTab,
  setActiveTab,
  isCollapsed,
  setIsCollapsed,
  mobileOpen,
  setMobileOpen,
}) => {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch {
      // client logout fallback
    }
    router.push("/login");
  };

  const navItems: { id: NavTab; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: <LayoutDashboard className="w-5 h-5" />,
    },
    {
      id: "orders",
      label: "My Orders",
      icon: <ShoppingBag className="w-5 h-5" />,
      badge: "24",
    },
    {
      id: "cart",
      label: "Cart",
      icon: <ShoppingCart className="w-5 h-5" />,
      badge: "5",
    },
    {
      id: "profile",
      label: "Profile",
      icon: <User className="w-5 h-5" />,
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full justify-between p-4 bg-white text-gray-800">
      <div>
        {/* Logo & Toggle Header */}
        <div className="flex items-center justify-between pb-6 mb-4 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-2.5 group overflow-hidden focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform shrink-0">
              <Leaf className="w-6 h-6 fill-white/20 stroke-[2.2]" />
            </div>
            {!isCollapsed && (
              <div className="flex flex-col animate-in fade-in duration-200">
                <span className="text-xl font-black tracking-tight text-gray-900 leading-none">
                  Fresh<span className="text-emerald-600">Cart</span>
                </span>
                <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 mt-0.5">
                  User Portal
                </span>
              </div>
            )}
          </Link>

          {/* Desktop Collapse Toggle */}
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="hidden lg:flex p-1.5 text-gray-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition-colors"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
          </button>

          {/* Mobile Drawer Close Button */}
          <button
            onClick={() => setMobileOpen(false)}
            className="lg:hidden p-1.5 text-gray-500 hover:text-gray-900 rounded-lg"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="space-y-1.5">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  setMobileOpen(false);
                }}
                className={`w-full flex items-center gap-3.5 px-3.5 py-3 rounded-xl font-bold text-sm transition-all duration-200 group relative ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "text-gray-600 hover:text-emerald-700 hover:bg-emerald-50/70"
                }`}
                title={isCollapsed ? item.label : undefined}
              >
                <div
                  className={`shrink-0 transition-transform group-hover:scale-110 ${
                    isActive ? "text-white" : "text-gray-500 group-hover:text-emerald-600"
                  }`}
                >
                  {item.icon}
                </div>

                {!isCollapsed && (
                  <span className="truncate flex-1 text-left">{item.label}</span>
                )}

                {!isCollapsed && item.badge && (
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-extrabold ${
                      isActive ? "bg-white/20 text-white" : "bg-emerald-100 text-emerald-800"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </nav>
      </div>

      {/* Bottom Promo & Logout Button */}
      <div className="pt-4 border-t border-gray-100 space-y-3">
        {!isCollapsed && (
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border border-emerald-100/80 text-xs">
            <div className="flex items-center gap-1.5 font-bold text-emerald-900 mb-1">
              <Sparkles className="w-4 h-4 text-emerald-600 fill-emerald-600" />
              <span>Organic Deals</span>
            </div>
            <p className="text-gray-600 text-[11px] leading-relaxed">
              Get 20% off on fresh fruit bundles today!
            </p>
            <Link
              href="/#deals"
              className="inline-block font-extrabold text-emerald-700 hover:text-emerald-800 mt-2 text-[11px] underline"
            >
              Explore Deals →
            </Link>
          </div>
        )}

        <button
          onClick={handleLogout}
          className={`w-full flex items-center gap-3 px-3.5 py-3 rounded-xl font-bold text-sm text-gray-500 hover:text-rose-600 hover:bg-rose-50 border border-transparent hover:border-rose-100 transition-all ${
            isCollapsed ? "justify-center" : ""
          }`}
          title="Logout"
        >
          <LogOut className="w-5 h-5 text-gray-400 group-hover:text-rose-600 shrink-0" />
          {!isCollapsed && <span>Logout</span>}
        </button>
      </div>
    </div>
  );

  return (
    <>
      {/* Desktop Sidebar (Fixed / Collapsible) */}
      <aside
        className={`hidden lg:block fixed left-0 top-0 bottom-0 z-30 border-r border-gray-100 bg-white transition-all duration-300 ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {sidebarContent}
      </aside>

      {/* Mobile Drawer Backdrop */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="lg:hidden fixed inset-0 z-40 bg-black/40 backdrop-blur-xs transition-opacity"
        />
      )}

      {/* Mobile Drawer */}
      <aside
        className={`lg:hidden fixed top-0 bottom-0 left-0 z-50 w-72 bg-white shadow-2xl transition-transform duration-300 ${
          mobileOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {sidebarContent}
      </aside>
    </>
  );
};
