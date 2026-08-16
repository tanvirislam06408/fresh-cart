"use client";

import React from "react";
import {
  Sparkles,
  Zap,
  Percent,
  ArrowRight,
  Bike,
  Tag,
  CheckCircle2,
  ShieldCheck,
  Star,
} from "lucide-react";
import { HeroSlide } from "@/types";

interface SlideContentProps {
  slide: HeroSlide;
  isActive: boolean;
}

const getBadgeIcon = (iconName?: string) => {
  switch (iconName) {
    case "Zap":
      return <Zap className="w-4 h-4 text-amber-400 fill-amber-400/30" />;
    case "Percent":
      return <Percent className="w-4 h-4 text-emerald-400" />;
    case "Sparkles":
    default:
      return <Sparkles className="w-4 h-4 text-emerald-400 fill-emerald-400/30" />;
  }
};

const getCtaIcon = (iconName?: string) => {
  switch (iconName) {
    case "Bike":
      return <Bike className="w-5 h-5 stroke-[2.2]" />;
    case "Tag":
      return <Tag className="w-5 h-5" />;
    case "ArrowRight":
    default:
      return <ArrowRight className="w-5 h-5" />;
  }
};

export const SlideContent: React.FC<SlideContentProps> = ({
  slide,
  isActive,
}) => {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center py-16 sm:py-24">
      <div
        className={`max-w-2xl text-left space-y-6 transition-all duration-700 transform ${
          isActive
            ? "opacity-100 translate-y-0 scale-100"
            : "opacity-0 translate-y-6 scale-95"
        }`}
      >
       

        {/* Main Headline */}
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] drop-shadow-md">
          {slide.title.main}{" "}
          <span className="block mt-1.5 bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300 bg-clip-text text-transparent">
            {slide.title.highlight}
          </span>
        </h1>

        {/* Description */}
        <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal leading-relaxed max-w-xl drop-shadow">
          {slide.description}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          {/* Primary CTA */}
          <a
            href={slide.primaryCta.href}
            className="inline-flex items-center justify-center gap-3 bg-emerald-500 hover:bg-emerald-400 text-gray-950 font-extrabold px-8 py-4 rounded-full text-base shadow-xl shadow-emerald-500/30 hover:shadow-emerald-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>{slide.primaryCta.label}</span>
            {getCtaIcon(slide.primaryCta.icon)}
          </a>

          {/* Secondary CTA */}
          {slide.secondaryCta && (
            <a
              href={slide.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold px-7 py-4 rounded-full text-base border border-white/25 backdrop-blur-md shadow-lg transition-all transform hover:-translate-y-0.5"
            >
              <span>{slide.secondaryCta.label}</span>
            </a>
          )}
        </div>

        {/* Slide Stats / Metrics */}
        {slide.stats && slide.stats.length > 0 && (
          <div className="pt-6 border-t border-white/15 grid grid-cols-3 gap-4 sm:gap-6 max-w-lg">
            {slide.stats.map((stat, idx) => (
              <div key={idx} className="space-y-0.5">
                <p className="text-xl sm:text-2xl font-black text-emerald-400 tracking-tight">
                  {stat.value}
                </p>
                <p className="text-xs text-gray-300 font-medium tracking-wide uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
