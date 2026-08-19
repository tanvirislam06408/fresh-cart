"use client";

import React, { useState, useRef, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { POPULAR_PRODUCTS } from "@/data/products";
import { ProductCard } from "@/components/ProductCard";
import { useCart } from "@/context/CartContext";

export const PopularProducts: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");
  const swiperRef = useRef<SwiperType | null>(null);
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const { showToast } = useCart();

  const tabs = [
    { id: "all", label: "All Products" },
    { id: "fruits", label: "Fruits" },
    { id: "vegetables", label: "Vegetables" },
    { id: "dairy", label: "Dairy" },
    { id: "meat", label: "Meat" },
    { id: "beverages", label: "Drinks & Juices" },
    { id: "bakery", label: "Bakery" },
    { id: "snacks", label: "Snacks" },
  ];

  const filteredProducts =
    activeTab === "all"
      ? POPULAR_PRODUCTS
      : POPULAR_PRODUCTS.filter((p) => p.categoryId === activeTab);

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
    if (swiperRef.current) {
      swiperRef.current.slideTo(0);
    }
  };

  // Auto scroll when user enters section view
  useEffect(() => {
    const sectionEl = sectionRef.current;
    if (!sectionEl) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (swiperRef.current) {
            if (entry.isIntersecting) {
              swiperRef.current.autoplay.start();
            } else {
              swiperRef.current.autoplay.stop();
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(sectionEl);
    return () => observer.disconnect();
  }, [activeTab]);

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-emerald-600 bg-emerald-50 px-3.5 py-1 rounded-full border border-emerald-200/60 inline-block mb-3">
              MOST WANTED ITEMS
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight">
              Customers' Favorites
            </h2>
            <p className="text-gray-600 text-base sm:text-lg mt-2 font-normal">
              Top-rated products ordered continuously by our 10,000+ satisfied households. Auto-scrolling 4-column slider.
            </p>
          </div>

          
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 sm:gap-3 flex-wrap mb-10">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  isActive
                    ? "bg-emerald-600 text-white shadow-md shadow-emerald-600/20"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Swiper Product Slider (4 Columns on Desktop) */}
        <div className="relative pb-6">
          {filteredProducts.length > 0 ? (
            <Swiper
              key={activeTab}
              modules={[Navigation, Pagination, Autoplay]}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              spaceBetween={24}
              slidesPerView={1}
              grabCursor={true}
              loop={filteredProducts.length >= 4}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
                pauseOnMouseEnter: true,
              }}
              breakpoints={{
                540: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 24,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 24,
                },
              }}
              className="w-full !pb-12 flex items-stretch [&_.swiper-pagination-bullet-active]:!bg-emerald-600 [&_.swiper-pagination-bullet-active]:!w-6 [&_.swiper-pagination-bullet-active]:!rounded-full [&_.swiper-pagination-bullet]:!transition-all"
            >
              {filteredProducts.map((product) => (
                <SwiperSlide key={product.id} className="!h-auto flex flex-col">
                  <ProductCard product={product} />
                </SwiperSlide>
              ))}
            </Swiper>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <p className="text-gray-500 font-medium">No products found in this category.</p>
            </div>
          )}
        </div>

        {/* View All Products button */}
        {/* <div className="mt-10 text-center">
          <button
            onClick={() => showToast("Loading 150+ more organic grocery products...")}
            className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold px-8 py-3.5 rounded-full border border-emerald-200/80 transition-all text-sm shadow-sm hover:shadow-md"
          >
            View All Products
            <ArrowRight className="w-4 h-4" />
          </button>
        </div> */}
      </div>
    </section>
  );
};
