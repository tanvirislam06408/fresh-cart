"use client";

import React from "react";
import { Leaf, Phone, Mail, MapPin, Share2, Globe, MessageSquare } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const Footer: React.FC = () => {
  const { showToast } = useCart();

  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-24 lg:pb-12 border-t border-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-gray-900">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <a href="#" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-emerald-600 flex items-center justify-center text-white shadow-md">
                <Leaf className="w-6 h-6 fill-white/20" />
              </div>
              <span className="text-2xl font-extrabold text-white tracking-tight">
                Fresh<span className="text-emerald-500">Cart</span>
              </span>
            </a>

            <p className="text-gray-400 text-sm max-w-sm leading-relaxed">
              Making fresh groceries accessible, convenient and affordable for everyone. Farm-harvested produce delivered right to your door in 30 minutes.
            </p>

            <div className="space-y-2 pt-2 text-xs text-gray-400">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-emerald-500" />
                <span>+1 (800) 555-FRESH (3737)</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-emerald-500" />
                <span>support@freshcart.com</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-emerald-500" />
                <span>742 Evergreen Terrace, Farm District, CA 94107</span>
              </div>
            </div>
          </div>

          {/* Column 2: Shop */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Shop</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-emerald-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#deals" className="hover:text-emerald-400 transition-colors">
                  Today's Deals
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-emerald-400 transition-colors">
                  New Arrivals
                </a>
              </li>
              <li>
                <a href="#categories" className="hover:text-emerald-400 transition-colors">
                  Organic Produce
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Company</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-emerald-400 transition-colors">
                  Our Farm Story
                </a>
              </li>
              <li>
                <button onClick={() => showToast("FreshCart is hiring! 20+ open roles.")} className="hover:text-emerald-400 transition-colors text-left">
                  Careers <span className="text-[10px] bg-emerald-950 text-emerald-400 px-1.5 py-0.5 rounded border border-emerald-800 font-bold ml-1">HIRING</span>
                </button>
              </li>
              <li>
                <a href="#support" className="hover:text-emerald-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <button onClick={() => showToast("Partner farmer portal opened")} className="hover:text-emerald-400 transition-colors text-left">
                  Partner Farmers
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Support & Social */}
          <div>
            <h4 className="text-white text-base font-bold mb-4">Support</h4>
            <ul className="space-y-2.5 text-sm mb-6">
              <li>
                <a href="#help" className="hover:text-emerald-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-emerald-400 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shipping" className="hover:text-emerald-400 transition-colors">
                  Shipping & Delivery
                </a>
              </li>
              <li>
                <a href="#returns" className="hover:text-emerald-400 transition-colors">
                  Returns & Refunds
                </a>
              </li>
            </ul>

            <h4 className="text-white text-xs uppercase font-extrabold tracking-wider mb-3">Follow Us</h4>
            <div className="flex items-center gap-3">
              {/* Facebook SVG */}
              <button
                onClick={() => showToast("Opening Facebook page")}
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-gray-300"
                aria-label="Facebook"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </button>
              {/* Instagram SVG */}
              <button
                onClick={() => showToast("Opening Instagram page")}
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-gray-300"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </button>
              {/* YouTube SVG */}
              <button
                onClick={() => showToast("Opening YouTube channel")}
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-gray-300"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </button>
              {/* TikTok / X SVG */}
              <button
                onClick={() => showToast("Opening TikTok channel")}
                className="w-9 h-9 rounded-full bg-gray-900 hover:bg-emerald-600 hover:text-white flex items-center justify-center transition-colors text-gray-300"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.82.57-1.31 1.56-1.29 2.57.01.89.44 1.76 1.15 2.29.97.71 2.33.8 3.42.27.97-.48 1.61-1.5 1.65-2.58.05-3.59.02-7.18.03-10.77z"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-gray-500">
          <p>© 2026 FreshCart. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button onClick={() => showToast("Privacy Policy modal")} className="hover:text-gray-300 transition-colors">
              Privacy Policy
            </button>
            <button onClick={() => showToast("Terms & Conditions modal")} className="hover:text-gray-300 transition-colors">
              Terms & Conditions
            </button>
            <button onClick={() => showToast("Cookie Policy modal")} className="hover:text-gray-300 transition-colors">
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
