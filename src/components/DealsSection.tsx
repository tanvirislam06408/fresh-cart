"use client";

import React, { useState, useEffect } from "react";
import { Flame, Star, ShoppingBag, Heart, Eye, Clock } from "lucide-react";
import { DEAL_PRODUCTS } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const DealsSection: React.FC = () => {
  const { addToCart, toggleWishlist, isInWishlist, setQuickViewProduct } = useCart();

  // Live Countdown timer state
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 14,
    seconds: 36,
    millis: 18,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.millis > 0) {
          return { ...prev, millis: prev.millis - 1 };
        } else if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1, millis: 99 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59, millis: 99 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59, millis: 99 };
        }
        return prev;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const formatTwoDigits = (num: number) => String(num).padStart(2, "0");

  return (
    <section id="deals" className="py-16 sm:py-24 bg-gradient-to-b from-[#FAF9F6] via-amber-50/30 to-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Live Timer */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12 gap-6 bg-white p-6 sm:p-8 rounded-3xl border border-amber-100 shadow-sm">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-amber-700 bg-amber-100/70 px-3.5 py-1 rounded-full mb-2">
              <Flame className="w-4 h-4 text-amber-600 fill-amber-600" />
              HOT FLASH DEALS
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Today's Best Deals
            </h2>
            <p className="text-gray-600 text-base mt-1">
              Don't miss out on these fresh savings. Quantities are limited!
            </p>
          </div>

          {/* Countdown Clock */}
          <div className="flex items-center gap-2 sm:gap-3 bg-amber-50 border border-amber-200/80 p-3 sm:p-4 rounded-2xl">
            <Clock className="w-5 h-5 text-amber-600 mr-1 hidden sm:block" />

            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-xl sm:text-2xl font-black text-amber-900 font-mono">
                {formatTwoDigits(timeLeft.hours)}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-700">Hours</span>
            </div>
            <span className="text-xl font-bold text-amber-400 mb-4">:</span>

            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-xl sm:text-2xl font-black text-amber-900 font-mono">
                {formatTwoDigits(timeLeft.minutes)}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-700">Minutes</span>
            </div>
            <span className="text-xl font-bold text-amber-400 mb-4">:</span>

            <div className="flex flex-col items-center min-w-[50px]">
              <span className="text-xl sm:text-2xl font-black text-amber-900 font-mono">
                {formatTwoDigits(timeLeft.seconds)}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-700">Seconds</span>
            </div>
            <span className="text-xl font-bold text-amber-400 mb-4">:</span>

            <div className="flex flex-col items-center min-w-[40px]">
              <span className="text-xl sm:text-2xl font-black text-amber-600 font-mono">
                {formatTwoDigits(timeLeft.millis)}
              </span>
              <span className="text-[10px] uppercase font-bold text-amber-600">Ms</span>
            </div>
          </div>
        </div>

        {/* Deal Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DEAL_PRODUCTS.map((product) => {
            const inWishlist = isInWishlist(product.id);
            const percentLeft = product.totalStock
              ? Math.round(((product.stockLeft || 10) / product.totalStock) * 100)
              : 30;

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-4 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image */}
                <div
                  className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-50 mb-4 cursor-pointer"
                  onClick={() => setQuickViewProduct(product)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Discount Badge */}
                  <div className="absolute top-3 left-3 bg-rose-600 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow">
                    {product.discountBadge}
                  </div>

                  {/* Wishlist Button */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleWishlist(product.id);
                    }}
                    className={`absolute top-3 right-3 p-2 rounded-full backdrop-blur-md transition-all z-10 ${
                      inWishlist
                        ? "bg-rose-50 text-rose-500 shadow-md"
                        : "bg-white/80 text-gray-400 hover:text-rose-500 hover:bg-white"
                    }`}
                  >
                    <Heart className={`w-4 h-4 ${inWishlist ? "fill-rose-500" : ""}`} />
                  </button>

                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-[11px] font-semibold text-amber-700 uppercase tracking-wider block">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2 mt-0.5"
                    >
                      {product.name}
                    </h3>

                    <div className="flex items-center gap-1.5 mt-2">
                      <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      <span className="text-xs font-bold text-gray-800">{product.rating}</span>
                      <span className="text-[11px] text-gray-400">({product.reviewsCount})</span>
                    </div>
                  </div>

                  {/* Progress / Stock Indicator */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-amber-700 font-bold">Only {product.stockLeft} left</span>
                      <span className="text-gray-400 font-normal">Selling Fast</span>
                    </div>
                    <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-rose-500 h-full rounded-full transition-all duration-500"
                        style={{ width: `${percentLeft}%` }}
                      />
                    </div>
                  </div>

                  {/* Price & CTA */}
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <div>
                      <span className="text-lg font-extrabold text-rose-600">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.oldPrice && (
                        <span className="text-xs text-gray-400 line-through ml-1.5 font-medium">
                          ${product.oldPrice.toFixed(2)}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => addToCart(product)}
                      className="flex items-center gap-1.5 bg-amber-400 hover:bg-amber-500 text-gray-950 px-3.5 py-2 rounded-xl text-xs font-extrabold transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4" /> Add
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
