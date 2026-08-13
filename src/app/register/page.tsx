"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { CartProvider, useCart } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastNotification } from "@/components/ToastNotification";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { SearchModal } from "@/components/SearchModal";
import { WishlistModal } from "@/components/WishlistModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  Gift,
  ShieldCheck,
  Star,
  Terminal,
  X,
  AlertCircle
} from "lucide-react";
import { authClient } from "@/lib/auth-client";

function RegisterFormContent() {
  const { showToast } = useCart();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logOutput, setLogOutput] = useState<{
    type: "register" | "facebook";
    data: Record<string, unknown>;
    timestamp: string;
  } | null>(null);

  // Password match status
  const passwordsMatch = confirmPassword.length > 0 ? password === confirmPassword : true;

  // Handle standard Email & Password Registration submit
  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!fullName || !email || !password || !confirmPassword) {
      showToast("Please fill in all required fields.");
      return;
    }

    if (password !== confirmPassword) {
      showToast("Passwords do not match. Please check and try again.");
      return;
    }

    if (!acceptTerms) {
      showToast("Please accept the Terms of Service & Privacy Policy.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      acceptTerms,
      name: fullName,
      email,
      password: "•".repeat(password.length) + " (" + password + ")",

    };

    const { data, error } = await authClient.signUp.email({
      ...payload
    });

    console.log("after register ",data,error);
    

    // Console log the registration data as requested
    console.log("%c[FreshCart Auth] 📝 REGISTRATION DATA SUBMITTED:", "color: #10b981; font-weight: bold; font-size: 14px;", payload);
    console.log("Raw credentials:", { fullName, email, password, acceptTerms });

    setLogOutput({
      type: "register",
      data: payload,
      timestamp: new Date().toLocaleTimeString()
    });

    setTimeout(() => {
      setIsSubmitting(false);
      showToast(`Account created for ${fullName}! Data logged to console.`);
    }, 400);
  };

  // Handle Facebook Sign Up click
  const handleFacebookRegister = () => {
    const payload = {
      provider: "Facebook OAuth 2.0",
      action: "Sign Up / Register",
      status: "UI Triggered - Awaiting OAuth Backend",
      timestamp: new Date().toLocaleTimeString() + ", " + new Date().toLocaleDateString()
    };

    // Console log the Facebook register data
    console.log("%c[FreshCart Auth] 🔵 FACEBOOK REGISTER CLICKED:", "color: #1877f2; font-weight: bold; font-size: 14px;", payload);

    setLogOutput({
      type: "facebook",
      data: payload,
      timestamp: new Date().toLocaleTimeString()
    });

    showToast("Facebook registration clicked! Check browser console for logged data.");
  };

  return (
    <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-emerald-700 font-semibold">Create Account</span>
      </div>

      {/* Main Split Grid */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[680px]">
        {/* Left Side: Brand & Visual Promo Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-teal-400/10 rounded-full blur-3xl -ml-20 -mb-20 pointer-events-none" />

          {/* Top Brand Header */}
          <div className="relative z-10">
            <Link href="/" className="inline-flex items-center gap-2.5 group mb-8">
              <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform">
                <Leaf className="w-6 h-6 fill-white/20 stroke-[2.2]" />
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                Fresh<span className="text-emerald-300">Cart</span>
              </span>
            </Link>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-700/60 border border-emerald-500/30 text-emerald-200 text-xs font-semibold mb-4">
              <Gift className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              New Member Bonus
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Join FreshCart today & get $15 off your first order!
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-8">
              Create your account in seconds to unlock personalized organic recommendations, express 30-minute delivery, and member-only flash deals.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-emerald-100">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>Free Express Shipping on orders over $35</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Sparkles className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>Earn 2x Reward Points on organic seasonal fruits</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>Zero hassle 100% money-back freshness guarantee</span>
              </li>
            </ul>
          </div>

          {/* Bottom Card Image & Highlight */}
          <div className="relative z-10 mt-8 pt-6 border-t border-emerald-700/50">
            <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg border border-emerald-600/40 group">
              <Image
                src="/images/login-banner.jpg"
                alt="Fresh Organic Grocery Box"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-4">
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-white text-xs font-medium italic">
                  &quot;Signing up was so seamless. Best grocery delivery app!&quot;
                </p>
                <p className="text-emerald-300 text-[11px] font-semibold mt-0.5">
                  — Marcus T., New Customer
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Registration Form */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Header & Toggle Switch */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Create Your Account
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Fill in your details or register with your social profile
                </p>
              </div>
              <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
                <Link
                  href="/login"
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  Login
                </Link>
                <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm">
                  Register
                </span>
              </div>
            </div>

            {/* Facebook Social Sign Up Button */}
            <div className="mb-6">
              <button
                type="button"
                onClick={handleFacebookRegister}
                className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] active:bg-[#1464D2] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] group text-sm sm:text-base"
              >
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Sign up with Facebook</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform ml-auto hidden sm:inline" />
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-4 text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0">
                Or register with email
              </span>
              <div className="border-t border-gray-200 w-full" />
            </div>

            {/* Standard Registration Form */}
            <form onSubmit={handleRegister} className="space-y-4">
              {/* Full Name */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Full Name
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <User className="w-5 h-5" />
                  </div>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="Alex Morgan"
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Email Address */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative rounded-xl shadow-sm">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="alex@example.com"
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Grid for Password & Confirm Password */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Password */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Password
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className="block w-full pl-11 pr-10 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm Password */}
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                    Confirm Password
                  </label>
                  <div className="relative rounded-xl shadow-sm">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-gray-400">
                      <Lock className="w-5 h-5" />
                    </div>
                    <input
                      type={showConfirmPassword ? "text" : "password"}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••••••"
                      className={`block w-full pl-11 pr-10 py-3 bg-gray-50 border rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${!passwordsMatch
                        ? "border-rose-400 focus:ring-rose-500/20 focus:border-rose-600"
                        : "border-gray-200 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white"
                        }`}
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                    >
                      {showConfirmPassword ? (
                        <EyeOff className="w-4 h-4" />
                      ) : (
                        <Eye className="w-4 h-4" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {!passwordsMatch && (
                <div className="flex items-center gap-1.5 text-rose-600 text-xs font-semibold">
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>Passwords do not match</span>
                </div>
              )}

              {/* Terms Checkbox */}
              <div className="pt-2">
                <label className="flex items-start gap-2.5 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    required
                    checked={acceptTerms}
                    onChange={(e) => setAcceptTerms(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer mt-0.5 shrink-0"
                  />
                  <span className="text-xs text-gray-600 font-medium leading-normal">
                    I agree to the FreshCart{" "}
                    <a href="#" className="text-emerald-700 font-semibold underline underline-offset-2">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-emerald-700 font-semibold underline underline-offset-2">
                      Privacy Policy
                    </a>
                    .
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3.5 px-4 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg hover:shadow-emerald-600/30 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2 text-base disabled:opacity-75"
              >
                {isSubmitting ? (
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Creating account...</span>
                  </div>
                ) : (
                  <>
                    <span>Create FreshCart Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>

          {/* On-Screen Console Output Display Card */}
          {logOutput && (
            <div className="mt-6 p-4 rounded-2xl bg-slate-950 text-slate-100 border border-slate-800 shadow-xl text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-2">
                <div className="flex items-center gap-2 text-emerald-400 font-mono font-bold">
                  <Terminal className="w-4 h-4" />
                  <span>Browser Console Output ({logOutput.timestamp})</span>
                </div>
                <button
                  onClick={() => setLogOutput(null)}
                  className="text-slate-400 hover:text-slate-200"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
              <p className="text-slate-400 mb-2 font-sans">
                Registration payload logged via <code className="text-emerald-300 font-mono bg-slate-900 px-1 py-0.5 rounded">console.log()</code>. Open Developer Tools (F12) to inspect object details.
              </p>
              <pre className="font-mono text-[11px] bg-slate-900/90 p-3 rounded-xl overflow-x-auto text-emerald-200 leading-relaxed border border-slate-800">
                {JSON.stringify(logOutput.data, null, 2)}
              </pre>
            </div>
          )}

          {/* Bottom Switch Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Already have an account?{" "}
              <Link
                href="/login"
                className="font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 transition-colors"
              >
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-emerald-200 selection:text-emerald-900 font-sans">
        <AnnouncementBar />
        <Navbar />
        <RegisterFormContent />
        <Footer />
        <CartDrawer />
        <QuickViewModal />
        <SearchModal />
        <WishlistModal />
        <MobileBottomNav />
        <ToastNotification />
      </div>
    </CartProvider>
  );
}
