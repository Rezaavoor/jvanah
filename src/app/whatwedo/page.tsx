"use client";

import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade"; // Import fade effect styles

const programs = [
  {
    title: "Language Courses",
    description: "Learn English, Swedish, German, and more to open doors to global opportunities.",
    image: "/img/jvanah/heros/Lang.jpg",
  },
  {
    title: "Photography",
    description: "Express creativity and tell stories through the art of photography.",
    image: "/img/jvanah/heros/photo.jpg",
  },
  {
    title: "Arts",
    description: "Explore artistic expression for empowerment and self-discovery.",
    image: "/img/jvanah/heros/Art.jpg",
  },
  {
    title: "Personal Development",
    description: "Build confidence, resilience, and foster a positive mindset.",
    image: "/img/jvanah/heros/Self.jpg",
  },
  {
    title: "Webinars",
    description: "Connect with mentors and peers to share insights and inspiration.",
    image: "/img/jvanah/heros/Web.jpg",
  },
  {
    title: "And Much More",
    description: "Specialized workshops and cultural exchange programs.",
    image: "/img/jvanah/heros/More.jpg",
  },
];

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* What We Do Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-bold text-primaryGreen mb-6">
          What We Do
        </h1>
        <p className="text-lg text-primary mb-8">
          At Jvanah, we are dedicated to empowering women and
          girls, particularly in Afghanistan, by providing transformative online
          education and support programs.
          We offer a wide range of programs designed to inspire growth, develop skills, and create opportunities.
        </p>
      </div>

      {/* Programs Section */}
      <div className="w-full max-w-6xl mx-auto mt-12 flex justify-center">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectFade]}
          spaceBetween={5} // Reduced space between cards
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="w-full flex justify-center"
        >
          {programs.map((program, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white bg-opacity-30 backdrop-blur-lg text-black rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 w-[250px] h-[400px] flex flex-col justify-between mx-auto">
                <div className="relative h-[200px] w-full rounded-t-xl overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.title}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-t-xl"
                  />
                </div>
                <div className="p-4 text-center flex-1">
                  <h2 className="text-xl font-semibold mb-4">{program.title}</h2>
                  <p className="text-base">{program.description}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Connecting Cultures and Communities Section */}
      <section className="w-full max-w-4xl mx-auto text-center mt-16 mb-16">
        <h2 className="text-3xl font-semibold text-primary mb-4">
          Connecting Cultures and Communities
        </h2>
        <p className="text-lg text-primary mb-6">
          We believe in the power of collaboration and cultural exchange. By
          equipping women and girls with essential skills and confidence, we
          empower them to forge their own paths, pursue their dreams, and
          become active participants in shaping a brighter future for
          themselves and their communities. Education is more than just knowledge it's a pathway to change.
          At the Jvanah Initiative, we are not just providing education we're
          creating opportunities for transformation.
        </p>
      </section>
    </div>
  );
};

export default Page;
