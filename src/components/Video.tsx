"use client";
import { useState } from "react";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-soft-lg group cursor-pointer">
      {!playVideo && (
        <button
          onClick={() => setPlayVideo(true)}
          className="absolute inset-0 z-10 flex items-center justify-center bg-navy-900/10 group-hover:bg-navy-900/20 transition-colors duration-300"
        >
          <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-white/90 backdrop-blur-sm shadow-soft-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
            <svg
              className="w-6 h-6 md:w-8 md:h-8 text-sage-600 ml-1"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
          <span className="sr-only">Play Video</span>
        </button>
      )}
      {playVideo ? (
        <iframe
          src={`./img/jvanah/${videoId}`}
          title="Video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          className="w-full h-full"
        />
      ) : (
        <div className="w-full h-full bg-gradient-to-br from-sage-100 to-cream-100 flex items-center justify-center">
          <span className="text-sm text-navy-300">Video preview</span>
        </div>
      )}
    </div>
  );
}
