"use client";

import React, { useState } from "react";
import { X, Star, Heart, ShoppingBag, CheckCircle2, ShieldCheck, Truck, Plus, Minus } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const QuickViewModal: React.FC = () => {
  const { quickViewProduct, setQuickViewProduct, addToCart, toggleWishlist, isInWishlist } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState("Standard Pack");

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);

  const handleClose = () => {
    setQuickViewProduct(null);
    setQuantity(1);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={handleClose}
      />

      {/* Modal Card */}
      <div className="relative bg-white rounded-3xl max-w-3xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden z-10 border border-gray-100 animate-in zoom-in-95 duration-200">
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors z-20"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Product Image */}
          <div className="relative rounded-2xl overflow-hidden bg-gray-50 h-72 sm:h-96">
            <img
              src={quickViewProduct.image}
              alt={quickViewProduct.name}
              className="w-full h-full object-cover object-center"
            />
            {quickViewProduct.discountBadge && (
              <span className="absolute top-3 left-3 bg-amber-500 text-white font-extrabold text-xs px-3 py-1 rounded-full shadow">
                {quickViewProduct.discountBadge}
              </span>
            )}
            {quickViewProduct.isOrganic && (
              <span className="absolute top-3 right-12 bg-emerald-600 text-white font-bold text-xs px-2.5 py-1 rounded-full shadow">
                Organic
              </span>
            )}
          </div>

          {/* Right Product Details */}
          <div className="space-y-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-widest bg-emerald-50 px-2.5 py-1 rounded-md inline-block mb-2">
                {quickViewProduct.category}
              </span>
              <h2 className="text-2xl font-extrabold text-gray-900 leading-tight">
                {quickViewProduct.name}
              </h2>
              <span className="text-sm text-gray-500 font-medium block mt-1">
                {quickViewProduct.unit}
              </span>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-2">
                <div className="flex text-amber-400">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                </div>
                <span className="text-sm font-bold text-gray-900">{quickViewProduct.rating}</span>
                <span className="text-xs text-gray-400 font-medium">({quickViewProduct.reviewsCount} verified reviews)</span>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-2 border-t border-gray-100">
              <span className="text-3xl font-black text-gray-900">
                ${(quickViewProduct.price * quantity).toFixed(2)}
              </span>
              {quickViewProduct.oldPrice && (
                <span className="text-base text-gray-400 line-through font-semibold">
                  ${(quickViewProduct.oldPrice * quantity).toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-sm text-gray-600 leading-relaxed">
              {quickViewProduct.description || "Farm-fresh high quality produce guaranteed organic and pesticide free."}
            </p>

            {/* Weight selector */}
            <div>
              <span className="text-xs font-bold text-gray-700 block mb-2">Select Portion Weight:</span>
              <div className="flex gap-2">
                {["500g Pack", "1kg Value", "2kg Family"].map((opt) => (
                  <button
                    key={opt}
                    onClick={() => setSelectedWeight(opt)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all ${
                      selectedWeight === opt
                        ? "bg-emerald-600 text-white border-emerald-600"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Add to Cart */}
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-3 bg-gray-100 rounded-2xl px-3 py-2">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-1 text-gray-600 hover:text-emerald-700"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="text-sm font-bold text-gray-900 w-6 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-1 text-gray-600 hover:text-emerald-700"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>

              <button
                onClick={() => {
                  addToCart(quickViewProduct, quantity);
                  handleClose();
                }}
                className="flex-1 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 px-6 rounded-2xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-sm transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                Add to Cart
              </button>

              <button
                onClick={() => toggleWishlist(quickViewProduct.id)}
                className={`p-3.5 rounded-2xl border transition-all ${
                  inWishlist
                    ? "bg-rose-50 text-rose-500 border-rose-200"
                    : "bg-gray-50 text-gray-400 border-gray-200 hover:text-rose-500"
                }`}
              >
                <Heart className={`w-5 h-5 ${inWishlist ? "fill-rose-500" : ""}`} />
              </button>
            </div>

            {/* Micro Trust */}
            <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-500 font-medium pt-3 border-t border-gray-100">
              <div className="flex items-center gap-1.5">
                <Truck className="w-3.5 h-3.5 text-emerald-600" /> Express 30m Delivery
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" /> 100% Quality Guaranteed
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
