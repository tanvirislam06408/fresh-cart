"use client";

import React from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  Pause,
  Volume2,
  VolumeX,
} from "lucide-react";

interface SliderControlsProps {
  activeIndex: number;
  totalSlides: number;
  isPlaying: boolean;
  isMuted: boolean;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  onToggleAutoplay: () => void;
  onToggleMute: () => void;
}

export const SliderControls: React.FC<SliderControlsProps> = ({
  activeIndex,
  totalSlides,
  isPlaying,
  isMuted,
  onPrev,
  onNext,
  onSelectSlide,
  onToggleAutoplay,
  onToggleMute,
}) => {
  return (
    <div className="absolute bottom-6 left-0 right-0 z-20 px-4 sm:px-8 max-w-7xl mx-auto flex items-center justify-between pointer-events-none">
      {/* Left Group: Slide Indicators & Counter */}
      <div className="pointer-events-auto flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-full text-white shadow-xl">
        {/* Counter */}
        <span className="text-xs font-bold tracking-wider text-emerald-400">
          0{activeIndex + 1} <span className="text-gray-400">/ 0{totalSlides}</span>
        </span>

        <div className="h-4 w-px bg-white/20" />

        {/* Slide Indicator Dots */}
        <div className="flex items-center gap-2">
          {Array.from({ length: totalSlides }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => onSelectSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
                activeIndex === idx
                  ? "w-8 bg-emerald-400"
                  : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Right Group: Navigation Arrows & Media Controls */}
      <div className="pointer-events-auto flex items-center gap-2 sm:gap-3 bg-black/40 backdrop-blur-md border border-white/15 p-1.5 rounded-full text-white shadow-xl">
        {/* Mute/Unmute Toggle */}
        <button
          onClick={onToggleMute}
          aria-label={isMuted ? "Unmute video" : "Mute video"}
          className="p-2 rounded-full hover:bg-white/15 text-gray-200 hover:text-white transition-colors focus:outline-none"
          title={isMuted ? "Unmute video sound" : "Mute video sound"}
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-amber-400" />
          ) : (
            <Volume2 className="w-5 h-5 text-emerald-400" />
          )}
        </button>

        {/* Autoplay Play/Pause Toggle */}
        <button
          onClick={onToggleAutoplay}
          aria-label={isPlaying ? "Pause slider" : "Play slider"}
          className="p-2 rounded-full hover:bg-white/15 text-gray-200 hover:text-white transition-colors focus:outline-none"
          title={isPlaying ? "Pause slide rotation" : "Start slide rotation"}
        >
          {isPlaying ? (
            <Pause className="w-5 h-5" />
          ) : (
            <Play className="w-5 h-5 text-emerald-400 fill-emerald-400/30" />
          )}
        </button>

        <div className="h-4 w-px bg-white/20" />

        {/* Prev Slide Button */}
        <button
          onClick={onPrev}
          aria-label="Previous slide"
          className="p-2 rounded-full hover:bg-white/15 text-gray-200 hover:text-white transition-colors focus:outline-none active:scale-95"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        {/* Next Slide Button */}
        <button
          onClick={onNext}
          aria-label="Next slide"
          className="p-2 rounded-full hover:bg-white/15 text-gray-200 hover:text-white transition-colors focus:outline-none active:scale-95"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};
