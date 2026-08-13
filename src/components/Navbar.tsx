"use client";

import React, { useState, useEffect } from "react";
import {
  Leaf,
  Search,
  Heart,
  ShoppingBag,
  User,
  Menu,
  X,
  ChevronRight,
  Sparkles
} from "lucide-react";
import { useCart } from "@/context/CartContext";
import Link from "next/link";

export const Navbar: React.FC = () => {
  const {
    totalItems,
    wishlist,
    setIsCartOpen,
    setIsWishlistOpen,
    setIsSearchOpen,
    showToast
  } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-gray-100"
          : "bg-white py-4 border-b border-gray-100"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: FreshCart Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-emerald-500/20 group-hover:scale-105 transition-transform">
              <Leaf className="w-6 h-6 fill-white/20 stroke-[2.2]" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl sm:text-2xl font-extrabold tracking-tight text-gray-900 leading-none">
                Fresh<span className="text-emerald-600">Cart</span>
              </span>
              <span className="text-[10px] uppercase font-bold tracking-widest text-emerald-700 mt-0.5">
                Organic Supermarket
              </span>
            </div>
          </a>

          {/* Center Navigation links */}
          <nav className="hidden md:flex items-center gap-8 font-medium text-sm text-gray-700">
            <a
              href="#"
              className="text-emerald-600 font-semibold flex items-center gap-1 hover:text-emerald-700 transition-colors"
            >
              Home
            </a>
            <a
              href="#categories"
              className="hover:text-emerald-600 transition-colors"
            >
              Categories
            </a>
            <a
              href="#products"
              className="hover:text-emerald-600 transition-colors"
            >
              Shop
            </a>
            <a
              href="#deals"
              className="flex items-center gap-1.5 text-amber-600 hover:text-amber-700 font-semibold bg-amber-50 px-2.5 py-1 rounded-full text-xs border border-amber-200/60 transition-colors"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
              Deals
            </a>
            <Link className="hover:text-emerald-600 transition-colors" href={'/dashboard/role'}>
              Dashboard
            </Link>
            <a
              href="#why-us"
              className="hover:text-emerald-600 transition-colors"
            >
              About
            </a>
          </nav>

          {/* Right side controls */}
          <div className="flex items-center gap-2 sm:gap-4">
            {/* Search Icon */}
            <button
              onClick={() => setIsSearchOpen(true)}
              aria-label="Search products"
              className="p-2 sm:p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors relative"
            >
              <Search className="w-5 h-5 stroke-[2]" />
            </button>

            {/* Wishlist Icon */}
            <button
              onClick={() => setIsWishlistOpen(true)}
              aria-label="Wishlist"
              className="p-2 sm:p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors relative hidden sm:flex"
            >
              <Heart className="w-5 h-5 stroke-[2]" />
              {wishlist.length > 0 && (
                <span className="absolute top-1 right-1 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                  {wishlist.length}
                </span>
              )}
            </button>

            {/* Shopping Cart Icon with item count badge */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping Cart"
              className="relative flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100/80 text-emerald-800 px-3.5 py-2 rounded-full font-semibold text-sm transition-all border border-emerald-200/60 shadow-sm hover:shadow"
            >
              <div className="relative">
                <ShoppingBag className="w-5 h-5 text-emerald-700 stroke-[2.2]" />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-[10px] font-extrabold w-4 h-4 rounded-full flex items-center justify-center shadow">
                    {totalItems}
                  </span>
                )}
              </div>
              <span className="hidden sm:inline-block font-bold text-emerald-900">
                ${totalItems > 0 ? "12.97" : "0.00"}
              </span>
            </button>

            {/* Account / User Icon */}
            <Link
              href="/login"
              aria-label="User Account"
              className="hidden lg:flex p-2.5 text-gray-600 hover:text-emerald-600 hover:bg-emerald-50 rounded-full transition-colors"
            >
              <User className="w-5 h-5 stroke-[2]" />
            </Link>

            {/* Login button */}
            <Link
              href="/login"
              className="hidden lg:inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-semibold px-4 py-2 rounded-full shadow-sm hover:shadow transition-all"
            >
              Login
            </Link>

            {/* Mobile Hamburger toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-gray-700 hover:text-emerald-600 rounded-lg md:hidden"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100 mt-3 space-y-3 animate-in slide-in-from-top duration-200">
            <a
              href="#"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-semibold text-emerald-600 bg-emerald-50 rounded-xl"
            >
              Home
            </a>
            <a
              href="#categories"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              Categories
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              Shop All Products
            </a>
            <a
              href="#deals"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-between px-3 py-2 text-base font-medium text-amber-700 bg-amber-50 rounded-xl"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500 fill-amber-500" /> Today's Deals
              </span>
              <ChevronRight className="w-4 h-4" />
            </a>
            <a
              href="#why-us"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 text-base font-medium text-gray-700 hover:bg-gray-50 rounded-xl"
            >
              Why FreshCart
            </a>

            <div className="pt-2 border-t border-gray-100 flex items-center gap-3 px-3">
              <Link
                href="/login"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full py-2.5 bg-emerald-600 text-white rounded-xl font-semibold text-sm shadow text-center block"
              >
                Sign In / Register
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
