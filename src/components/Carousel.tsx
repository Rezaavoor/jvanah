// components/Carousel.js

"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
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
    <div className="my-16  py-12">
      <h2 className="text-xl text-left font-bold mb-12 text-primary">
        Latest Events and News
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
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className=" shadow-lg rounded-lg overflow-hidden">
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
                <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
                <Link href={`/posts/${post.slug}`}>
                  <button className="mt-6 inline-block px-6 py-3 bg-primaryGreen text-white font-semibold rounded-full hover:bg-green-600 transition-colors duration-300">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};
