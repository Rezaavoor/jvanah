"use client";
import { useState } from "react";
import { Container } from "@/components/Container";

interface VideoProps {
  videoId: string;
}

export function Video({ videoId }: Readonly<VideoProps>) {
  const [playVideo, setPlayVideo] = useState(false);

  if (!videoId) return null;

  return (
    <div className="relative w-full h-[500px] max-w-4xl mx-auto overflow-hidden lg:mb-20 rounded-2xl cursor-pointer shadow-[0px_10px_30px_rgba(0,0,0,0.3)] hover:shadow-[0px_20px_40px_rgba(0,0,0,0.5)] transition-shadow duration-300">
      {!playVideo && (
        <button
          onClick={() => setPlayVideo(!playVideo)}
          className="absolute inset-auto w-16 h-16 text-black transform -translate-x-1/2 -translate-y-1/2 lg:w-28 lg:h-28 top-1/2 left-1/2 rounded-full shadow-xl hover:shadow-2xl"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-16 h-16 lg:w-28 lg:h-28 text-red-500"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
              clipRule="evenodd"
            />
          </svg>
          <span className="sr-only">Play Video</span>
        </button>
      )}
      {playVideo && (
       <iframe
       src={`./img/jvanah/${videoId}`}
       title="Video player"
       allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
       className="w-full h-full rounded-lg object-cover" // Apply full width, height, rounded corners, and object-fit cover
     ></iframe>
      )}
    </div>
  );
}
