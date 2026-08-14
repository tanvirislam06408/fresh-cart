"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useCart } from "@/context/CartContext";
import { authClient } from "@/lib/auth-client";
import {
  User,
  Mail,
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Copy,
  Check,
  Calendar,
  Clock,
  Sparkles,
  ShoppingBag,
  Heart,
  LogOut,
  Leaf,
  ArrowRight,
  Shield,
  Award,
  ChevronRight,
  KeyRound,
  FileCheck,
  AlertCircle,
  ShoppingBasket
} from "lucide-react";

export interface UserData {
  id: string;
  name: string;
  email: string;
  emailVerified: boolean;
  image?: string | null;
  role?: string | null;
  acceptTerms?: boolean | null;
  createdAt?: Date | string | null;
  updatedAt?: Date | string | null;
}

interface ProfileClientProps {
  user: UserData | null;
}

export const ProfileClient: React.FC<ProfileClientProps> = ({ user }) => {
  const { showToast } = useCart();
  const router = useRouter();
  const [copiedId, setCopiedId] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [isSigningOut, setIsSigningOut] = useState(false);

  // Copy User ID to clipboard
  const handleCopyId = (id: string) => {
    navigator.clipboard.writeText(id);
    setCopiedId(true);
    showToast("User ID copied to clipboard! 📋");
    setTimeout(() => setCopiedId(false), 2500);
  };

  // Sign out handler
  const handleSignOut = async () => {
    setIsSigningOut(true);
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          showToast("Signed out successfully. See you soon! 👋");
          router.push("/login");
        },
        onError: () => {
          setIsSigningOut(false);
          showToast("Failed to sign out. Please try again.");
        }
      },
    });
  };

  // Format Date strings safely
  const formatDate = (dateInput?: Date | string | null) => {
    if (!dateInput) return "Not available";
    try {
      const d = new Date(dateInput);
      if (isNaN(d.getTime())) return String(dateInput);
      return new Intl.DateTimeFormat("en-US", {
        weekday: "short",
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit"
      }).format(d);
    } catch {
      return String(dateInput);
    }
  };

  // Get user initials fallback
  const getInitials = (name?: string) => {
    if (!name) return "U";
    const parts = name.trim().split(" ");
    if (parts.length >= 2) {
      return (parts[0][0] + parts[1][0]).toUpperCase();
    }
    return name.slice(0, 2).toUpperCase();
  };

  if (!user) {
    return (
      <main className="flex-grow py-12 sm:py-16 px-4 max-w-4xl mx-auto w-full">
        <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-xl border border-gray-100 text-center max-w-lg mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-amber-50 border border-amber-200 text-amber-600 flex items-center justify-center mx-auto mb-4">
            <AlertCircle className="w-8 h-8" />
          </div>
          <h2 className="text-2xl font-extrabold text-gray-900 tracking-tight mb-2">
            Session Expired or Not Logged In
          </h2>
          <p className="text-gray-500 text-sm mb-6">
            Please sign in to view and manage your FreshCart profile and order details.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 rounded-full shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
          >
            <span>Sign In to Your Account</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </main>
    );
  }

  const roleName = user.role || "user";
  const isAdmin = roleName.toLowerCase() === "admin";

  return (
    <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-emerald-700 font-semibold">User Profile</span>
      </div>

      {/* Main Profile Layout Grid */}
      <div className="space-y-8">
        {/* 1. Header Banner & Profile Overview Card */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden relative">
          {/* Header Banner Background */}
          <div className="h-44 sm:h-56 bg-gradient-to-r from-emerald-800 via-emerald-700 to-teal-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />
            
            {/* Pattern Overlay */}
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />

            <div className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center gap-2 z-10">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border ${
                isAdmin 
                  ? "bg-amber-500/20 border-amber-300/40 text-amber-200" 
                  : "bg-emerald-500/20 border-emerald-300/40 text-emerald-100"
              }`}>
                <Shield className="w-3.5 h-3.5" />
                {roleName}
              </span>
            </div>
          </div>

          {/* User Info Bar (Overlapping avatar) */}
          <div className="px-6 sm:px-10 pb-8 relative pt-0">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 -mt-16 sm:-mt-20 mb-6">
              {/* Avatar & Title */}
              <div className="flex flex-col sm:flex-row items-center sm:items-end gap-5 text-center sm:text-left">
                {/* Avatar Box */}
                <div className="relative group">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-white p-1.5 shadow-2xl ring-4 ring-white shrink-0 relative overflow-hidden">
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User Avatar"}
                        fill
                        className="object-cover rounded-2xl"
                        onError={() => setImageError(true)}
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full rounded-2xl bg-gradient-to-tr from-emerald-600 via-teal-600 to-emerald-500 flex items-center justify-center text-white font-extrabold text-3xl sm:text-4xl shadow-inner">
                        {getInitials(user.name)}
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-2 right-2 w-6 h-6 rounded-full bg-emerald-500 ring-4 ring-white flex items-center justify-center text-white shadow-md">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                </div>

                {/* Name & Basic Details */}
                <div className="pt-2 sm:pt-0">
                  <div className="flex items-center justify-center sm:justify-start gap-2 flex-wrap">
                    <h1 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                      {user.name}
                    </h1>
                    {user.emailVerified && (
                      <span className="text-emerald-600 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded-full text-xs font-semibold flex items-center gap-1">
                        <CheckCircle2 className="w-3.5 h-3.5 fill-emerald-600 text-white" /> Verified
                      </span>
                    )}
                  </div>

                  <p className="text-gray-500 text-sm font-medium mt-1 flex items-center justify-center sm:justify-start gap-1.5">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <span>{user.email}</span>
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-center sm:justify-end gap-3 flex-wrap">
                {isAdmin && (
                  <Link
                    href={`/dashboard/${user.role}`}
                    className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold text-sm px-4 py-2.5 rounded-2xl shadow-md transition-all hover:shadow-lg"
                  >
                    <ShieldCheck className="w-4 h-4" />
                    <span>Admin Dashboard</span>
                  </Link>
                )}

                <button
                  onClick={handleSignOut}
                  disabled={isSigningOut}
                  className="inline-flex items-center gap-2 bg-gray-100 hover:bg-rose-50 text-gray-700 hover:text-rose-700 border border-gray-200 hover:border-rose-200 font-semibold text-sm px-4 py-2.5 rounded-2xl transition-all disabled:opacity-50"
                >
                  <LogOut className="w-4 h-4" />
                  <span>{isSigningOut ? "Signing out..." : "Sign Out"}</span>
                </button>
              </div>
            </div>

            {/* Quick Stats Highlights */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 border-t border-gray-100">
              <div className="bg-emerald-50/60 border border-emerald-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-emerald-600/20">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-emerald-800 font-semibold uppercase tracking-wider">Member Tier</div>
                  <div className="text-sm font-extrabold text-emerald-950">Fresh Club VIP</div>
                </div>
              </div>

              <div className="bg-amber-50/60 border border-amber-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-md shadow-amber-500/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-amber-800 font-semibold uppercase tracking-wider">Rewards</div>
                  <div className="text-sm font-extrabold text-amber-950">150 Green Points</div>
                </div>
              </div>

              <div className="bg-blue-50/60 border border-blue-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-blue-600/20">
                  <ShoppingBasket className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-blue-800 font-semibold uppercase tracking-wider">Orders</div>
                  <div className="text-sm font-extrabold text-blue-950">Active Account</div>
                </div>
              </div>

              <div className="bg-purple-50/60 border border-purple-100 rounded-2xl p-4 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-purple-600 text-white flex items-center justify-center shrink-0 shadow-md shadow-purple-600/20">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-purple-800 font-semibold uppercase tracking-wider">Status</div>
                  <div className="text-sm font-extrabold text-purple-950 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" /> Active
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Detailed Data Cards Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Column: Account Specifications */}
          <div className="lg:col-span-8 space-y-6">
            {/* Account Credentials & Personal Details */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 flex items-center gap-2.5">
                  <User className="w-5 h-5 text-emerald-600" />
                  <span>Personal Account Details</span>
                </h2>
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                  Verified Data
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Full Name */}
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Full Name
                  </label>
                  <div className="text-base font-bold text-gray-900">
                    {user.name}
                  </div>
                </div>

                {/* Email Address */}
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Email Address
                  </label>
                  <div className="text-base font-bold text-gray-900 truncate">
                    {user.email}
                  </div>
                </div>

                {/* Unique User ID */}
                <div className="sm:col-span-2 bg-gray-50/80 p-4 rounded-2xl border border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                      User Identifier (ID)
                    </label>
                    <code className="text-sm font-mono font-bold text-emerald-700 bg-emerald-50/80 px-2.5 py-1 rounded-lg border border-emerald-200/60 inline-block break-all">
                      {user.id}
                    </code>
                  </div>
                  <button
                    onClick={() => handleCopyId(user.id)}
                    className="inline-flex items-center gap-2 bg-white hover:bg-emerald-50 text-gray-700 hover:text-emerald-700 border border-gray-200 hover:border-emerald-300 font-semibold text-xs px-3.5 py-2 rounded-xl transition-all shrink-0 self-start sm:self-auto shadow-sm"
                  >
                    {copiedId ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span className="text-emerald-600 font-bold">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy ID</span>
                      </>
                    )}
                  </button>
                </div>

                {/* Role */}
                <div className="bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">
                    Role Privilege
                  </label>
                  <div className="flex items-center gap-2">
                    <span className="text-base font-bold text-gray-900 capitalize">
                      {user.role || "user"}
                    </span>
                    <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded">
                      Standard
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* Timestamps & Metadata Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-6">
                <h2 className="text-lg sm:text-xl font-extrabold text-gray-900 flex items-center gap-2.5">
                  <Clock className="w-5 h-5 text-teal-600" />
                  <span>Account Activity & Timestamps</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Created At */}
                <div className="bg-emerald-50/40 p-4 rounded-2xl border border-emerald-100/60 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-emerald-900 mb-0.5">
                      Account Created On
                    </label>
                    <div className="text-sm font-bold text-gray-900">
                      {formatDate(user.createdAt)}
                    </div>
                  </div>
                </div>

                {/* Updated At */}
                <div className="bg-teal-50/40 p-4 rounded-2xl border border-teal-100/60 flex items-start gap-3">
                  <div className="w-9 h-9 rounded-xl bg-teal-100 text-teal-700 flex items-center justify-center shrink-0 mt-0.5">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-teal-900 mb-0.5">
                      Last Updated
                    </label>
                    <div className="text-sm font-bold text-gray-900">
                      {formatDate(user.updatedAt)}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Verification Status & Quick Links */}
          <div className="lg:col-span-4 space-y-6">
            {/* Status & Compliance Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <h2 className="text-lg font-extrabold text-gray-900 mb-6 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Security & Compliance</span>
              </h2>

              <div className="space-y-4">
                {/* Email Verification Item */}
                <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white ${
                      user.emailVerified ? "bg-emerald-500" : "bg-amber-500"
                    }`}>
                      {user.emailVerified ? (
                        <CheckCircle2 className="w-4 h-4" />
                      ) : (
                        <XCircle className="w-4 h-4" />
                      )}
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Email Status</div>
                      <div className="text-[11px] text-gray-500">
                        {user.emailVerified ? "Verified email" : "Unverified email"}
                      </div>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                    user.emailVerified
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}>
                    {user.emailVerified ? "Verified" : "Pending"}
                  </span>
                </div>

                {/* Terms Acceptance Item */}
                {/* <div className="flex items-center justify-between p-3.5 bg-gray-50 rounded-2xl border border-gray-100">
                  <div className="flex items-center gap-3">
                    <div className={`w-8 h-8 rounded-xl flex items-center justify-center text-white ${
                      user.acceptTerms ? "bg-emerald-500" : "bg-gray-400"
                    }`}>
                      <FileCheck className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-gray-900">Terms Accepted</div>
                      <div className="text-[11px] text-gray-500">Privacy & Rules</div>
                    </div>
                  </div>

                  <span className={`px-2.5 py-1 rounded-full text-xs font-extrabold ${
                    user.acceptTerms
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-gray-200 text-gray-700"
                  }`}>
                    {user.acceptTerms ? "Accepted" : "False"}
                  </span>
                </div> */}
              </div>
            </div>

            {/* Quick Navigation Shortcuts */}
            <div className="bg-gradient-to-br from-emerald-900 to-teal-950 text-white rounded-3xl p-6 sm:p-8 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-emerald-500/10 rounded-full blur-2xl pointer-events-none" />
              
              <div className="flex items-center gap-2 mb-4">
                <Leaf className="w-5 h-5 text-emerald-400" />
                <h3 className="text-base font-extrabold text-white">FreshCart Quick Links</h3>
              </div>

              <p className="text-emerald-200/80 text-xs mb-6 leading-relaxed">
                Seamlessly shop, view your saved products, or return to the main store.
              </p>

              <div className="space-y-3 z-10 relative">
                <Link
                  href="/"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-semibold text-xs text-white"
                >
                  <span className="flex items-center gap-2">
                    <ShoppingBag className="w-4 h-4 text-emerald-300" /> Back to Store
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </Link>

                <Link
                  href="/#products"
                  className="flex items-center justify-between p-3 rounded-2xl bg-white/10 hover:bg-white/20 border border-white/10 transition-all font-semibold text-xs text-white"
                >
                  <span className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-300" /> Organic Categories
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/60" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
