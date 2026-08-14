"use client";

import React, { useState } from "react";
import { CART_PREVIEW_ITEMS, CartItemMock } from "./mockData";
import { ShoppingCart, Trash2, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import Image from "next/image";

export const CartPreview: React.FC = () => {
  const [cartItems, setCartItems] = useState<CartItemMock[]>(CART_PREVIEW_ITEMS);

  // Remove item handler
  const handleRemove = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Quantity updates
  const handleQuantityChange = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          const newQty = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQty };
        }
        return item;
      })
    );
  };

  // Calculation
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
  const delivery = subtotal > 0 ? 0.0 : 0.0; // Free delivery for orders over $35
  const total = subtotal + delivery;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5 sm:p-6 flex flex-col justify-between h-full">
      <div>
        {/* Header */}
        <div className="flex items-center justify-between border-b border-gray-100 pb-4 mb-4">
          <h2 className="text-lg font-extrabold text-gray-900 flex items-center gap-2">
            <ShoppingCart className="w-5 h-5 text-purple-600" />
            <span>My Cart Preview</span>
          </h2>
          <span className="text-xs font-bold text-purple-700 bg-purple-50 px-2.5 py-1 rounded-full border border-purple-100">
            {cartItems.length} Items
          </span>
        </div>

        {/* Product Items List */}
        <div className="space-y-3.5 max-h-[320px] overflow-y-auto pr-1 no-scrollbar">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between gap-3 p-2.5 rounded-xl border border-gray-100 hover:border-gray-200 bg-gray-50/40 hover:bg-gray-50 transition-all group"
              >
                {/* Image & Title */}
                <div className="flex items-center gap-3 min-w-0">
                  <div className="relative w-12 h-12 rounded-lg bg-white border border-gray-200 overflow-hidden shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform"
                      unoptimized
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="text-xs font-bold text-gray-900 truncate">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-gray-400 font-medium">{item.unit}</p>
                    <div className="text-xs font-extrabold text-emerald-700 mt-0.5">
                      ${item.price.toFixed(2)}
                    </div>
                  </div>
                </div>

                {/* Quantity Controls & Remove */}
                <div className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center bg-white border border-gray-200 rounded-lg p-0.5 shadow-xs">
                    <button
                      onClick={() => handleQuantityChange(item.id, -1)}
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-gray-100 rounded"
                    >
                      -
                    </button>
                    <span className="w-6 text-center text-xs font-bold text-gray-900">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => handleQuantityChange(item.id, 1)}
                      className="w-5 h-5 flex items-center justify-center text-xs font-bold text-gray-500 hover:bg-gray-100 rounded"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleRemove(item.id)}
                    aria-label="Remove item"
                    className="p-1.5 text-gray-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="py-8 text-center text-gray-400 text-xs font-medium">
              Your cart is currently empty.
            </div>
          )}
        </div>
      </div>

      {/* Summary Calculation Footer */}
      <div className="mt-6 pt-4 border-t border-gray-100 space-y-2.5">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>Subtotal</span>
          <span className="font-bold text-gray-800">${subtotal.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between text-xs text-gray-500">
          <span className="flex items-center gap-1">
            <Tag className="w-3 h-3 text-emerald-600" /> Delivery Fee
          </span>
          <span className="font-bold text-emerald-600">FREE</span>
        </div>

        <div className="flex items-center justify-between text-sm font-extrabold text-gray-900 pt-2 border-t border-dashed border-gray-200">
          <span>Total</span>
          <span className="text-base text-emerald-700">${total.toFixed(2)}</span>
        </div>

        {/* Checkout Button */}
        <button
          disabled={cartItems.length === 0}
          className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-bold py-3 px-4 rounded-xl shadow-md shadow-emerald-600/20 hover:shadow-lg transition-all flex items-center justify-center gap-2 text-xs sm:text-sm disabled:opacity-50"
        >
          <ShieldCheck className="w-4 h-4" />
          <span>Proceed to Checkout</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
