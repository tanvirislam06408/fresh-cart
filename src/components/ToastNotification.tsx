"use client";

import React from "react";
import { CheckCircle, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export const ToastNotification: React.FC = () => {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-20 md:bottom-8 right-4 z-50 animate-in slide-in-from-bottom-5 duration-300 pointer-events-none">
      <div className="bg-gray-900 text-white px-4 py-3 rounded-2xl shadow-2xl border border-gray-800 flex items-center gap-3 max-w-sm">
        <div className="w-8 h-8 rounded-xl bg-emerald-500 text-white flex items-center justify-center font-bold flex-shrink-0">
          <CheckCircle className="w-5 h-5" />
        </div>
        <p className="text-xs font-bold leading-tight">{toastMessage}</p>
      </div>
    </div>
  );
};
