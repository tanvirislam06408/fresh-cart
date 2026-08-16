import Link from "next/link";
import Image from "next/image";
import { CartProvider } from "@/context/CartContext";
import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ToastNotification } from "@/components/ToastNotification";
import { CartDrawer } from "@/components/CartDrawer";
import { QuickViewModal } from "@/components/QuickViewModal";
import { SearchModal } from "@/components/SearchModal";
import { WishlistModal } from "@/components/WishlistModal";
import { MobileBottomNav } from "@/components/MobileBottomNav";
import { CheckCircle2, Sparkles, Gift, ShieldCheck, Star, Leaf } from "lucide-react";
import { RegisterForm } from "@/components/RegisterForm";



export default function RegisterPage() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col bg-[#FAF9F6] selection:bg-emerald-200 selection:text-emerald-900 font-sans">
        <AnnouncementBar />
        <Navbar />

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
            {/* Left Side: Brand & Visual Promo Panel — fully static, stays server-rendered */}
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

            {/* Right Side: Registration Form — interactive, delegated to a Client Component */}
            <RegisterForm />
          </div>
        </main>

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