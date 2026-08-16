"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import type { Swiper as SwiperType } from "swiper";

import "swiper/css";
import "swiper/css/effect-fade";

import { HERO_SLIDES } from "./heroData";
import { VideoBackground } from "./VideoBackground";
import { SlideContent } from "./SlideContent";
import { SliderControls } from "./SliderControls";

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
        modules={[Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        loop={true}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
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
              />

              {/* Text Overlay & Content */}
              <SlideContent slide={slide} isActive={isActive} />
            </SwiperSlide>
          );
        })}
      </Swiper>

    </section>
  );
};
