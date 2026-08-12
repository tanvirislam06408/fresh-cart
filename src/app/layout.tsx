import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "FreshCart | 100% Organic & Fresh Groceries Delivered to Your Door",
  description: "Shop fresh fruits, vegetables, dairy, meat, snacks and everyday essentials online with fast 30-minute delivery. Quality guaranteed.",
  keywords: ["grocery delivery", "fresh cart", "organic produce", "fresh food", "online supermarket"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakartaSans.variable} scroll-smooth`}>
      <body className="bg-[#FAF9F6] text-gray-900 min-h-screen antialiased selection:bg-emerald-200 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
