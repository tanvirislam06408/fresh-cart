"use client";

import React, { useEffect, useRef, useState } from "react";

interface VideoBackgroundProps {
  videoSrc: string;
  isActive: boolean;
  isMuted: boolean;
}

export const VideoBackground: React.FC<VideoBackgroundProps> = ({
  videoSrc,
  isActive,
  isMuted,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = isMuted;

    if (isActive) {
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          // Autoplay was prevented or interrupted, ignore or handle gracefully
          console.warn("Video playback prevented:", err);
        });
      }
    } else {
      video.pause();
      video.currentTime = 0;
    }
  }, [isActive, isMuted]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-gray-900 select-none">
      {/* Video Element */}
      <video
        ref={videoRef}
        src={videoSrc}
        loop
        muted={isMuted}
        playsInline
        onCanPlay={() => setIsLoaded(true)}
        className={`w-full h-full object-cover object-center transition-opacity duration-700 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Loading Skeleton Backdrop */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-950 via-gray-900 to-emerald-900 animate-pulse" />
      )}

      {/* Multi-layer Aesthetic Gradient Overlays for optimal readability */}
      {/* Layer 1: Left-to-right dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-gray-950/85 via-gray-950/60 to-transparent sm:w-3/4 lg:w-2/3 pointer-events-none" />

      {/* Layer 2: Bottom-to-top gradient for controls contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/20 to-gray-950/30 pointer-events-none" />

      {/* Layer 3: Vibrant emerald ambient glow in background corner */}
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-emerald-500/15 rounded-full blur-[120px] pointer-events-none" />
    </div>
  );
};
