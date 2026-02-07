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
    <section className="py-16 md:py-24">
      <div className="text-center mb-12">
        <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3 block">
          Stay Updated
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
          News &amp; Events
        </h2>
      </div>
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={24}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        breakpoints={{
          768: { slidesPerView: 1 },
          1024: { slidesPerView: 2 },
        }}
        className="px-4 pb-12"
      >
        {blogPosts
          .toSorted((a, b) => b.id - a.id)
          .map((post) => (
            <SwiperSlide key={post.date}>
              <article className="card-elevated rounded-2xl overflow-hidden group">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-navy-900 mb-2 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-sm text-navy-400 leading-relaxed mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/posts/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-sage-600 hover:text-sage-700 transition-colors group/link"
                  >
                    Read more
                    <svg
                      className="w-4 h-4 group-hover/link:translate-x-0.5 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </Link>
                </div>
              </article>
            </SwiperSlide>
          ))}
      </Swiper>
    </section>
  );
};
