"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";

import { HERO_SLIDES } from "./heroData";
import { VideoBackground } from "./VideoBackground";
import { SlideContent } from "./SlideContent";

export const HeroSlider: React.FC = () => {
  const swiperRef = useRef<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const handlePrev = () => {
    swiperRef.current?.slidePrev();
  };

  const handleNext = () => {
    swiperRef.current?.slideNext();
  };

  const handleSelectSlide = (index: number) => {
    swiperRef.current?.slideTo(index);
  };

  const handleToggleAutoplay = () => {
    if (!swiperRef.current) return;
    if (isPlaying) {
      swiperRef.current.autoplay.stop();
      setIsPlaying(false);
    } else {
      swiperRef.current.autoplay.start();
      setIsPlaying(true);
    }
  };

  const handleToggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <section className="relative w-full h-[620px] sm:h-[680px] lg:h-[760px] overflow-hidden bg-gray-950">
      <Swiper
        modules={[Autoplay, EffectFade, Pagination]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 500,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        // using a custom pagination below for better styling/control
        className="w-full h-full"
      >
        {HERO_SLIDES.map((slide, index) => {
          const isActive = activeIndex === index;
          return (
            <SwiperSlide key={slide.id} className="relative w-full h-full">
              {/* Background Video */}
              <VideoBackground
                videoSrc={slide.videoSrc}
                isActive={isActive}
                isMuted={isMuted}
                onEnded={handleNext}
              />

              {/* Text Overlay & Content */}
              <SlideContent slide={slide} isActive={isActive} />
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* Pagination dots */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, idx) => {
          const active = activeIndex === idx;
          return (
            <button
              key={idx}
              onClick={() => handleSelectSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`rounded-full transition-all duration-200 focus:outline-none ${
                active
                  ? "w-4 h-4 bg-white shadow-lg"
                  : "w-3 h-3 bg-white/40 hover:bg-white/70"
              }`}
            />
          );
        })}
      </div>

    </section>
  );
};
