"use client";

import React, { useState } from "react";
import {
  Menu,
  Search,
  Bell,
  ChevronDown,
  User,
  LogOut,
  CheckCircle2,
  Package,
  ShoppingBag,
  Shield
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { USER_PROFILE_DATA } from "./mockData";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { UserSessionData } from "./ProfileSummary";

interface TopHeaderProps {
  pageTitle: string;
  onMobileMenuToggle: () => void;
  user?: UserSessionData | null;
}

export const TopHeader: React.FC<TopHeaderProps> = ({
  pageTitle,
  onMobileMenuToggle,
  user: serverUser,
}) => {
  const router = useRouter();
  const { data: session } = authClient.useSession();
  const [showNotifications, setShowNotifications] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [imgError, setImgError] = useState(false);

  const clientUser = session?.user;

  const name = serverUser?.name || clientUser?.name || USER_PROFILE_DATA.name;
  const email = serverUser?.email || clientUser?.email || USER_PROFILE_DATA.email;
  const image = serverUser?.image ?? clientUser?.image ?? USER_PROFILE_DATA.avatar;
  const role = serverUser?.role || (clientUser as { role?: string })?.role || "user";

  const notifications = [
    {
      id: "n1",
      title: "Order #FC-10245 Delivered",
      time: "10m ago",
      icon: <CheckCircle2 className="w-4 h-4 text-emerald-600" />,
      unread: true,
    },
    {
      id: "n2",
      title: "Express Shipping confirmed for #FC-10244",
      time: "2h ago",
      icon: <Package className="w-4 h-4 text-blue-600" />,
      unread: true,
    },
    {
      id: "n3",
      title: "20% Flash coupon added to account",
      time: "1d ago",
      icon: <ShoppingBag className="w-4 h-4 text-amber-600" />,
      unread: false,
    },
  ];

  const handleLogout = async () => {
    try {
      await authClient.signOut();
    } catch {
      // fallback
    }
    router.push("/login");
  };

  const getInitials = (n: string) => {
    if (!n) return "U";
    const parts = n.trim().split(" ");
    if (parts.length >= 2) return (parts[0][0] + parts[1][0]).toUpperCase();
    return n.slice(0, 2).toUpperCase();
  };

  return (
    <header className="sticky top-0 z-20 bg-white/90 backdrop-blur-md border-b border-gray-100 px-4 sm:px-8 py-3.5 flex items-center justify-between gap-4">
      {/* Left Side: Mobile Menu & Page Title */}
      <div className="flex items-center gap-3">
        <button
          onClick={onMobileMenuToggle}
          className="lg:hidden p-2 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-xl transition-colors"
          aria-label="Open sidebar menu"
        >
          <Menu className="w-6 h-6" />
        </button>

        <div>
          <h1 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight">
            {pageTitle}
          </h1>
          <p className="text-xs text-gray-500 font-medium hidden sm:block">
            Welcome back, <span className="text-emerald-700 font-bold">{name}</span> 👋
          </p>
        </div>
      </div>

      {/* Right Side: Search, Notifications & User Dropdown */}
      <div className="flex items-center gap-2 sm:gap-4">
        {/* Search Bar Input */}
        <div className="relative hidden md:block">
          <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search orders, items..."
            className="pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-full text-xs font-medium text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 transition-all w-52 lg:w-64"
          />
        </div>

        {/* Notifications Icon with Badge */}
        <div className="relative">
          <button
            onClick={() => {
              setShowNotifications(!showNotifications);
              setShowUserDropdown(false);
            }}
            aria-label="Notifications"
            className="p-2 sm:p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors relative"
          >
            <Bell className="w-5 h-5 stroke-[2]" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-rose-500 rounded-full ring-2 ring-white animate-pulse" />
          </button>

          {/* Notifications Popover */}
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-80 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex items-center justify-between border-b border-gray-100 pb-3 mb-3">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-gray-900">
                  Notifications
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">
                  2 New
                </span>
              </div>

              <div className="space-y-2.5 max-h-60 overflow-y-auto">
                {notifications.map((n) => (
                  <div
                    key={n.id}
                    className={`flex items-start gap-3 p-2.5 rounded-xl text-xs transition-colors ${
                      n.unread ? "bg-emerald-50/50 font-bold" : "hover:bg-gray-50 text-gray-600"
                    }`}
                  >
                    <div className="p-1.5 bg-white rounded-lg shadow-xs shrink-0">{n.icon}</div>
                    <div className="flex-1">
                      <p className="text-gray-900 leading-snug">{n.title}</p>
                      <span className="text-[10px] text-gray-400 font-medium mt-0.5 block">
                        {n.time}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-3 mt-3 border-t border-gray-100 text-center">
                <button
                  onClick={() => setShowNotifications(false)}
                  className="text-xs font-bold text-emerald-700 hover:underline"
                >
                  Mark all as read
                </button>
              </div>
            </div>
          )}
        </div>

        {/* User Avatar & Name Dropdown */}
        <div className="relative">
          <button
            onClick={() => {
              setShowUserDropdown(!showUserDropdown);
              setShowNotifications(false);
            }}
            className="flex items-center gap-2 p-1.5 rounded-full hover:bg-gray-100 transition-colors focus:outline-none"
          >
            <div className="relative w-9 h-9 rounded-full ring-2 ring-emerald-500/30 overflow-hidden shrink-0 bg-emerald-600 text-white flex items-center justify-center font-black text-xs shadow-inner">
              {image && !imgError ? (
                <Image
                  src={image}
                  alt={name}
                  fill
                  className="object-cover"
                  onError={() => setImgError(true)}
                  unoptimized
                />
              ) : (
                <span>{getInitials(name)}</span>
              )}
            </div>

            <span className="hidden md:block text-xs font-bold text-gray-800">
              {name}
            </span>

            <ChevronDown className="w-4 h-4 text-gray-400 hidden md:block" />
          </button>

          {/* User Profile Dropdown */}
          {showUserDropdown && (
            <div className="absolute right-0 mt-2 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="p-3 border-b border-gray-100 mb-1">
                <p className="text-xs font-bold text-gray-900">{name}</p>
                <p className="text-[11px] text-gray-400 truncate">{email}</p>
                <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded mt-1 capitalize border border-emerald-100">
                  <Shield className="w-3 h-3 text-emerald-600" /> {role}
                </span>
              </div>

              <Link
                href="/profile"
                onClick={() => setShowUserDropdown(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <User className="w-4 h-4 text-gray-500" />
                <span>My Profile</span>
              </Link>

              <Link
                href="/#products"
                onClick={() => setShowUserDropdown(false)}
                className="flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <ShoppingBag className="w-4 h-4 text-gray-500" />
                <span>Back to Store</span>
              </Link>

              <div className="pt-1 border-t border-gray-100 mt-1">
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs font-semibold text-rose-600 hover:bg-rose-50 transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
