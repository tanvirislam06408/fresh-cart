"use client";

import React from "react";
import { Heart, Star, ShoppingBag, Eye, ArrowRight, Sparkles } from "lucide-react";
import { FEATURED_PRODUCTS, Product } from "@/data/products";
import { useCart } from "@/context/CartContext";

export const FeaturedProducts: React.FC = () => {
  const {
    addToCart,
    toggleWishlist,
    isInWishlist,
    setQuickViewProduct,
    showToast
  } = useCart();

  return (
    <section id="products" className="py-16 sm:py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-200/60 inline-flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> DAILY FRESH SELECTION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Fresh Picks for You
            </h2>
            <p className="text-gray-600 text-base mt-2">
              Handpicked products our customers love, updated every morning.
            </p>
          </div>

          <a
            href="#all-products"
            onClick={(e) => {
              e.preventDefault();
              showToast("Showing all 500+ products catalog");
            }}
            className="inline-flex items-center gap-2 text-emerald-700 hover:text-emerald-800 font-bold text-sm sm:text-base group"
          >
            View All Products
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        {/* 4-column product grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURED_PRODUCTS.map((product) => {
            const inWishlist = isInWishlist(product.id);

            return (
              <div
                key={product.id}
                className="group relative bg-white rounded-3xl p-4 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                {/* Image Container */}
                <div className="relative w-full h-52 rounded-2xl overflow-hidden bg-gray-50 mb-4 cursor-pointer" onClick={() => setQuickViewProduct(product)}>
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                    {product.discountBadge && (
                      <span className="bg-amber-500 text-white font-extrabold text-[11px] px-2.5 py-1 rounded-full shadow-sm">
                        {product.discountBadge}
                      </span>
                    )}
                    {product.isOrganic && (
                      <span className="bg-emerald-600 text-white font-semibold text-[10px] uppercase px-2 py-0.5 rounded-full shadow-sm">
                        Organic
                      </span>
                    )}
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
                    aria-label="Add to wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${inWishlist ? "fill-rose-500" : ""}`}
                    />
                  </button>

                  {/* Quick View Button on hover overlay */}
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <span className="bg-white/90 text-gray-800 text-xs font-bold px-3 py-1.5 rounded-full shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                      <Eye className="w-3.5 h-3.5" /> Quick View
                    </span>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-700 uppercase tracking-wider block mb-1">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => setQuickViewProduct(product)}
                      className="font-bold text-gray-900 text-base leading-snug group-hover:text-emerald-700 transition-colors cursor-pointer line-clamp-2"
                    >
                      {product.name}
                    </h3>
                    <span className="text-xs text-gray-500 block mt-1 font-medium">
                      {product.unit}
                    </span>

                    {/* Rating */}
                    <div className="flex items-center gap-1.5 mt-2.5">
                      <div className="flex text-amber-400">
                        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                      </div>
                      <span className="text-xs font-bold text-gray-800">
                        {product.rating}
                      </span>
                      <span className="text-[11px] text-gray-400 font-medium">
                        ({product.reviewsCount})
                      </span>
                    </div>
                  </div>

                  {/* Price & Add to Cart */}
                  <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
                    <div>
                      <span className="text-lg font-extrabold text-gray-900">
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
                      className="flex items-center gap-1.5 bg-emerald-50 hover:bg-emerald-600 text-emerald-700 hover:text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-sm active:scale-95"
                    >
                      <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
                      Add
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
