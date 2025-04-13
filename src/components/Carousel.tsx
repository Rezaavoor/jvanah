"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Link from "next/link";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  slug: string;
}

interface CarouselProps {
  blogPosts: BlogPost[];
}

export const Carousel: React.FC<CarouselProps> = ({ blogPosts }) => {
  return (
    <div className="my-16 pb-12">
      <h2 className="font-roboto text-3xl text-center font-bold mb-8 text-primary">
        News and Events
      </h2>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 2,
          },
          1440: {
            slidesPerView: 2,
          },
        }}
        className="px-8"
      >
        {blogPosts
          .toSorted((a, b) => b.id - a.id)
          .map((post) => (
            <SwiperSlide key={post.date}>
              <div className="shadow-lg rounded-lg overflow-hidden backdrop-blur-lg bg-white/30">
                <div className="relative h-64 w-full">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-primary mb-4">
                    {post.title}
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex justify-center">
                    <Link href={`/posts/${post.slug}`}>
                      <button className="mt-4 inline-block px-6 py-2 bg-transparent text-black font-semibold rounded-full border-2 border-primaryGreen hover:bg-primaryGreen hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 shadow-lg backdrop-blur-md">
                        Read More
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};
