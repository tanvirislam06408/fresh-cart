"use client";

import React from "react";
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, Truck, ShieldCheck } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const CartDrawer: React.FC = () => {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    subtotal,
    freeShippingThreshold,
    freeShippingProgress,
    showToast,
    clearCart
  } = useCart();

  if (!isCartOpen) return null;

  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden animate-in fade-in duration-200">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white shadow-2xl flex flex-col justify-between">
          {/* Header */}
          <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-[#FAF9F6]">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4 stroke-[2.2]" />
              </div>
              <h2 className="text-xl font-extrabold text-gray-900">Your Basket</h2>
              <span className="text-xs bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded-full">
                {cart.reduce((sum, i) => sum + i.quantity, 0)} items
              </span>
            </div>

            <button
              onClick={() => setIsCartOpen(false)}
              className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Indicator */}
          <div className="bg-emerald-50/80 p-4 border-b border-emerald-100">
            <div className="flex items-center justify-between text-xs font-bold mb-1.5">
              <span className="flex items-center gap-1.5 text-emerald-900">
                <Truck className="w-4 h-4 text-emerald-600" />
                {remainingForFreeShipping > 0
                  ? `Add $${remainingForFreeShipping.toFixed(2)} more for FREE Shipping!`
                  : "🎉 You unlocked FREE Express Delivery!"}
              </span>
              <span className="text-emerald-700 font-mono">
                {Math.round(freeShippingProgress)}%
              </span>
            </div>
            <div className="w-full bg-emerald-200/60 h-2 rounded-full overflow-hidden">
              <div
                className="bg-emerald-600 h-full rounded-full transition-all duration-300"
                style={{ width: `${freeShippingProgress}%` }}
              />
            </div>
          </div>

          {/* Cart Item List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 text-gray-400 space-y-3">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-gray-300">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <p className="text-base font-bold text-gray-700">Your basket is empty</p>
                <p className="text-xs text-gray-500 max-w-xs">
                  Looks like you haven't added any organic items yet.
                </p>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="mt-2 bg-emerald-600 text-white text-xs font-bold px-5 py-2.5 rounded-full shadow hover:bg-emerald-700 transition-colors"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              cart.map(({ product, quantity }) => (
                <div
                  key={product.id}
                  className="flex items-center gap-4 p-3 bg-[#FAF9F6] rounded-2xl border border-gray-100 hover:border-emerald-100 transition-all"
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-16 h-16 rounded-xl object-cover bg-white"
                  />

                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-sm text-gray-900 truncate">
                      {product.name}
                    </h4>
                    <span className="text-xs text-gray-500">{product.unit}</span>
                    <div className="text-sm font-extrabold text-emerald-700 mt-1">
                      ${(product.price * quantity).toFixed(2)}
                    </div>
                  </div>

                  {/* Quantity Controls */}
                  <div className="flex items-center gap-2 bg-white rounded-xl border border-gray-200 px-2 py-1 shadow-sm">
                    <button
                      onClick={() => updateQuantity(product.id, quantity - 1)}
                      className="p-1 text-gray-500 hover:text-emerald-700"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="text-xs font-bold text-gray-800 w-4 text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(product.id, quantity + 1)}
                      className="p-1 text-gray-500 hover:text-emerald-700"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  <button
                    onClick={() => removeFromCart(product.id)}
                    className="p-2 text-gray-400 hover:text-rose-500 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer Checkout Summary */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-gray-100 bg-[#FAF9F6] space-y-4">
              <div className="space-y-2 text-xs text-gray-600">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-bold text-gray-900">${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Delivery</span>
                  <span className="font-bold text-emerald-700">
                    {remainingForFreeShipping === 0 ? "FREE" : "$4.99"}
                  </span>
                </div>
                <div className="flex justify-between text-base font-extrabold text-gray-900 pt-2 border-t border-gray-200">
                  <span>Total</span>
                  <span className="text-emerald-700 font-extrabold text-xl">
                    ${(subtotal + (remainingForFreeShipping === 0 ? 0 : 4.99)).toFixed(2)}
                  </span>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsCartOpen(false);
                  showToast("Proceeding to secure checkout! 🚀");
                }}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-4 rounded-2xl shadow-lg shadow-emerald-600/25 flex items-center justify-center gap-2 text-base transition-all active:scale-95"
              >
                Proceed to Checkout
                <ArrowRight className="w-5 h-5" />
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-gray-500 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                Guaranteed 30-min delivery & easy returns
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
