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
  Mail,
  Lock,
  Eye,
  EyeOff,
  Leaf,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  Star,
  Terminal,
  X
} from "lucide-react";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

function LoginFormContent() {
  const { showToast } = useCart();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [logOutput, setLogOutput] = useState<{
    type: "login" | "facebook" | "forgot";
    data: Record<string, unknown>;
    timestamp: string;
  } | null>(null);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const router = useRouter();

  // Handle standard Email & Password Login submit
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      showToast("Please fill in both email and password.");
      return;
    }

    setIsSubmitting(true);

    const payload = {

      email,
      password: "•".repeat(password.length) + " (" + password + ")",
      rememberMe,
    };


    const { data, error } = await authClient.signIn.email({
      ...payload
    });
    if (error) {
      console.log(error);
      return;
    }



    if (data) {
      setTimeout(() => {
        setIsSubmitting(false);
        showToast(`Welcome back! Login successful.`);
        router.replace('/')
        router.refresh();
        console.log("after login", data, error);
      }, 400);
    };
  }

  // Handle Facebook Login click
  const handleFacebookLogin = async () => {
    

    const data = await authClient.signIn.social({
      provider: "facebook",

    })
    // Console log the Facebook login data
    console.log("%c[FreshCart Auth] 🔵 FACEBOOK LOGIN CLICKED:", "color: #1877f2; font-weight: bold; font-size: 14px;", data);


    showToast("Facebook login successful ! ");
  };

  // Handle Forgot Password submit
  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (!forgotEmail) {
      showToast("Please enter your email address.");
      return;
    }

    const payload = {
      action: "Password Reset Request",
      email: forgotEmail,
      timestamp: new Date().toLocaleTimeString()
    };

    console.log("%c[FreshCart Auth] 📩 FORGOT PASSWORD REQUESTED:", "color: #f59e0b; font-weight: bold; font-size: 14px;", payload);

    setLogOutput({
      type: "forgot",
      data: payload,
      timestamp: new Date().toLocaleTimeString()
    });

    showToast(`Password reset link sent (Logged to console for ${forgotEmail})`);
    setShowForgotModal(false);
    setForgotEmail("");
  };

  return (
    <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      {/* Breadcrumb Navigation */}
      <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 sm:mb-8 font-medium">
        <Link href="/" className="hover:text-emerald-600 transition-colors">
          Home
        </Link>
        <span>/</span>
        <span className="text-emerald-700 font-semibold">Sign In</span>
      </div>

      {/* Main Split Grid */}
      <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden grid grid-cols-1 lg:grid-cols-12 min-h-[640px]">
        {/* Left Side: Brand & Visual Promo Panel */}
        <div className="lg:col-span-5 bg-gradient-to-br from-emerald-900 via-emerald-800 to-teal-900 text-white p-8 lg:p-12 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle background glow circle */}
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
              <Sparkles className="w-3.5 h-3.5 text-amber-300 fill-amber-300" />
              Member Benefits
            </div>

            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-tight mb-4">
              Welcome back to fresh & organic living.
            </h1>
            <p className="text-emerald-100/90 text-sm sm:text-base leading-relaxed mb-8">
              Sign in to manage your orders, access exclusive member discounts, and track your 30-minute express deliveries in real-time.
            </p>

            {/* Feature Checklist */}
            <ul className="space-y-3 text-xs sm:text-sm font-medium text-emerald-100">
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>100% Farm-Fresh & Certified Organic Produce</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <Truck className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>Express 30-Minute Delivery to your doorstep</span>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/30 border border-emerald-400/50 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
                </div>
                <span>Secure Checkout & Money-Back Freshness Guarantee</span>
              </li>
            </ul>
          </div>

          {/* Bottom Card Image & Testimonial */}
          <div className="relative z-10 mt-8 pt-6 border-t border-emerald-700/50">
            <div className="relative h-40 rounded-2xl overflow-hidden shadow-lg border border-emerald-600/40 group">
              <Image
                src="/images/login-banner.jpg"
                alt="Fresh Organic Produce"
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
                  &quot;FreshCart makes getting organic groceries so quick and effortless!&quot;
                </p>
                <p className="text-emerald-300 text-[11px] font-semibold mt-0.5">
                  — Sophia R., Verified Member
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Form & Interactive Log Box */}
        <div className="lg:col-span-7 p-6 sm:p-10 lg:p-12 flex flex-col justify-between bg-white">
          <div>
            {/* Header & Toggle Switch */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                  Sign In to FreshCart
                </h2>
                <p className="text-gray-500 text-sm mt-1">
                  Enter your credentials below or use social login
                </p>
              </div>
              <div className="inline-flex p-1 bg-gray-100 rounded-xl self-start sm:self-auto">
                <span className="px-4 py-1.5 rounded-lg text-xs font-bold bg-white text-emerald-700 shadow-sm">
                  Login
                </span>
                <Link
                  href="/register"
                  className="px-4 py-1.5 rounded-lg text-xs font-semibold text-gray-600 hover:text-emerald-700 transition-colors"
                >
                  Register
                </Link>
              </div>
            </div>

            {/* Facebook Social Login Button */}
            <div className="mb-6">
              <button
                type="button"
                onClick={handleFacebookLogin}
                className="w-full flex items-center justify-center gap-3 bg-[#1877F2] hover:bg-[#166FE5] active:bg-[#1464D2] text-white font-semibold py-3.5 px-4 rounded-xl shadow-md hover:shadow-lg transition-all transform active:scale-[0.99] group text-sm sm:text-base"
              >
                {/* Official Facebook SVG Logo */}
                <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <span>Continue with Facebook</span>
                <ArrowRight className="w-4 h-4 text-white/80 group-hover:translate-x-1 transition-transform ml-auto hidden sm:inline" />
              </button>
            </div>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-200 w-full" />
              <span className="bg-white px-4 text-xs font-bold uppercase tracking-wider text-gray-400 shrink-0">
                Or sign in with email
              </span>
              <div className="border-t border-gray-200 w-full" />
            </div>

            {/* Standard Email & Password Form */}
            <form onSubmit={handleEmailLogin} className="space-y-5">
              {/* Email Address Input */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-2">
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
                    placeholder="user@example.com"
                    className="block w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setShowForgotModal(true)}
                    className="text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    Forgot password?
                  </button>
                </div>
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
                    className="block w-full pl-11 pr-11 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600 focus:bg-white transition-all"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                  >
                    {showPassword ? (
                      <EyeOff className="w-5 h-5" />
                    ) : (
                      <Eye className="w-5 h-5" />
                    )}
                  </button>
                </div>
              </div>

              {/* Remember Me Checkbox */}
              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2.5 cursor-pointer group select-none">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 text-emerald-600 rounded border-gray-300 focus:ring-emerald-500 focus:ring-offset-0 cursor-pointer"
                  />
                  <span className="text-xs font-semibold text-gray-600 group-hover:text-gray-900 transition-colors">
                    Keep me signed in on this device
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
                    <span>Signing in...</span>
                  </div>
                ) : (
                  <>
                    <span>Sign In to Account</span>
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          </div>



          {/* Bottom Switch Link */}
          <div className="mt-8 text-center border-t border-gray-100 pt-6">
            <p className="text-xs sm:text-sm text-gray-600 font-medium">
              Don&apos;t have a FreshCart account yet?{" "}
              <Link
                href="/register"
                className="font-bold text-emerald-600 hover:text-emerald-700 underline underline-offset-4 transition-colors"
              >
                Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-gray-900">Reset Your Password</h3>
              <button
                onClick={() => setShowForgotModal(false)}
                className="p-1.5 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
            <p className="text-gray-600 text-sm mb-6">
              Enter your email address below and we will log a password reset payload to your browser console.
            </p>
            <form onSubmit={handleForgotPassword} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-gray-700 mb-1.5">
                  Account Email
                </label>
                <input
                  type="email"
                  required
                  value={forgotEmail}
                  onChange={(e) => setForgotEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="block w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm font-medium text-gray-900 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-600"
                />
              </div>
              <div className="flex items-center gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setShowForgotModal(false)}
                  className="w-1/2 py-3 px-4 rounded-xl border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="w-1/2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-bold shadow"
                >
                  Reset Password
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </main>
  );
}

export default function LoginPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-emerald-200 selection:text-emerald-900 font-sans">
        <AnnouncementBar />
        <Navbar />
        <LoginFormContent />
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
