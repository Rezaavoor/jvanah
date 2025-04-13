"use client";

import { Container } from "@/components/Container";
import { ProfileContainer } from "@/components/ProfileContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import { useState } from "react";

export default function AboutUs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // Track the expanded profile

  const profiles = [
    {
      name: "Hena",
      title: "President",
      description: [
        "As Hena, a proud resident of Sweden and a dedicated student of textile design, our roots trace back to the beautiful land of Afghanistan, a place filled with resilience and hope. Having experienced the profound impact of education firsthand, we are acutely aware of the struggles endured by women and girls in Afghanistan, unable to pursue their educational dreams. Driven by a deep sense of purpose, we have embarked on a personal mission to make a difference through Jvanah, an online education program specifically tailored for Afghan women. With Jvanah, we are determined to break down barriers and provide these women with the tools they need to continue their education, despite the challenges they face.",
      ],
      img: "hena.png",  // Updated image path
    },
    {
      name: "Sare",
      title: "Vice President",
      description: [
        "As a sociology and anthropology student, I've always wondered how I can contribute to improving my community. Jvanah provides a great opportunity for me to support girls from my hometown through education.",
      ],
      img: "sare.png",  // Updated image path
    },
    {
      name: "Reza",
      title: "IT Manager",
      description: [
        "As a young Afghan man having the privilege of living and studying in Sweden, I feel responsible for fighting injustice in my homeland. Jvanah allows me to do that and lets me help Afghan girls and women get access to education—a fundamental right.",
      ],
      img: "reza.png",  // Updated image path
    },
    {
      name: "Shafiq",  
      title: "Education Manager & IT",
      description: [
        "As the founder and a passionate advocate for education, I aim to help Afghan girls and women overcome the barriers preventing them from accessing education. With a background in data science and a focus on security, I want to make a lasting impact on the lives of those in need through Jvanah.",
      ],
      img: "Shafiq.JPG",  
    },
    {
      name: "Zahra",
      title: "Finance Manager",
      description: [
        "As an Afghan photographer and visual storyteller, I've always had on my mind to make a small difference in someone's life and that's why I joined Jvanah's team. I'm glad to work as an event manager with wonderful people.",
      ],
      img: "zahra.png",  // Updated image path
    },
 
    {
      name: "Taha",
      title: "Coordinator",
      description: [
        "I am passionate about technology and helping people, especially my sisters in Afghanistan who cannot go to school. Through my involvement in Jvanah, I want to make a meaningful difference in their future.",
      ],
      img: "taha.png",  // Updated image path
    },
  ];

  // Function to toggle Read More / Read Less
  const toggleDescription = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <Container>
      {/* General Team Section */}
      <div className="mb-12">
        <div className="mt-8 text-center">
          <h2 className="text-3xl font-bold text-primary mb-4">
            A Global Community of Support
          </h2>
          <p className="text-lg text-primary max-w-2xl mx-auto">
            At Jvanah, we are blessed with the support of teachers, volunteers,
            and supporters from around the world. Their dedication and passion
            empower us to bring education and hope to women and girls in
            Afghanistan. Together, we are making a difference, one lesson at a
            time.
          </p>
        </div>
      </div>

      {/* Main Group Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Meet Our Main Group at Jvanah
        </h1>
        <p className="text-lg text-primary max-w-2xl mx-auto">
          Our main group is a diverse and talented team dedicated to leading
          Jvanah and its mission. Learn more about our team members and their
          stories.
        </p>
      </div>

      {/* Swiper Section for Profiles */}
      <div className="mb-12">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3, // Display 3 profiles at once on large screens
            },
          }}
          className="px-8"
        >
          {profiles.map((profile, index) => (
            <SwiperSlide key={index}>
              <div className="relative bg-white rounded-lg shadow-xl overflow-hidden p-6 mb-8 h-[450px]">
                <div className="relative h-40 w-40 mx-auto rounded-full overflow-hidden border-4 border-gray-200">
                  <Image
                    src={`/img/jvanah/profiles/${profile.img}`}  // Correct image path
                    alt={profile.name}
                    width={160}               // Adjusted width for profile picture
                    height={160}              // Adjusted height
                    objectFit="cover"         // Ensure the image fits correctly
                    className="rounded-full"  // Circular profile image
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-primary mb-2">
                    {profile.name}
                  </h3>
                  <p className="text-lg text-primary mb-4">{profile.title}</p>

                  {/* Display full description or part of it based on expandedIndex */}
                  <div className="text-gray-700 mb-4 h-[120px] overflow-hidden">
                    {expandedIndex === index
                      ? profile.description.map((paragraph, idx) => (
                          <p key={idx}>{paragraph}</p>
                        ))
                      : `${profile.description[0].substring(0, 150)}...`}
                  </div>

                  <button
                    onClick={() => toggleDescription(index)}
                    className="text-primary hover:text-blue-500"
                  >
                    {expandedIndex === index ? "Read Less" : "Read More"}
                  </button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </Container>
  );
}
