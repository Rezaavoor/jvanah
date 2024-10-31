"use client";

import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import heroImg1 from "../../../public/img/jvanah/heros/1.jpg";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
import { ProfileContainer } from "@/components/ProfileContainer";
export default function AboutUs() {
  const profiles = [
    {
      name: "Hena",
      title: "Founder",
      description: [
        "As Hena, a proud resident of Sweden and a dedicated student of textile design, our roots trace back to the beautiful land of Afghanistan, a place filled with resilience and hope. Having experienced the profound impact of education firsthand, we are acutely aware of the struggles endured by women and girls in Afghanistan, unable to pursue their educational dreams. Driven by a deep sense of purpose, we have embarked on a personal mission to make a difference through Jvanah, an online education program specifically tailored for Afghan women. With Jvanah, we are determined to break down barriers and provide these women with the tools they need to continue their education, despite the challenges they face.",
      ],
      img: "hena.png",
    },
    {
      name: "Zahra",
      title: "Event Manager",
      description: [
        "As an Afghan photographer and visual storyteller, I've always had on my mind to make a small difference in someone's life and that's why i joined Jvanah's team. I'm glad to work as event manager with winderful people",
      ],
      img: "zahra.png",
    },
    {
      name: "Bjorn",
      title: "Strategic Advisor",
      description: [
        "I specialize in strategic planning and transformational coaching for businesses, organizations and individuals. With a passion for empowering teams to reach their full potential, I am commited to supporting Jvanah's mission to inspire and give hope to our students",
      ],
      img: "bjorn.png",
    },
    {
      name: "Taha",
      title: "Legal Advisor",
      description: [
        "I am passonate about technology and helping people, especially my sisters in Afghanistan who cannot go to school. Through my involvement in Jvanah I want to make a meaningful difference in their future",
      ],
      img: "taha.png",
    },
    {
      name: "Sare",
      title: "Social Media Manager",
      description: [
        "As a socilogy and anthropology student, I've always wondered how I can contribute to improving my community. Jvanah provides a great opportunity for me to support girls from my hometown through education",
      ],
      img: "sare.png",
    },
    {
      name: "Reza",
      title: "IT Manager",
      description: [
        "As a young Afghan man having the privilege of living and studying in Sweden, I feel responsible for fighting injustice in my homeland. Jvanah allows me to do that and lets me help Afghan girls and women to get access to education. A fundamental right",
      ],
      img: "reza.png",
    },
  ];
  return (
    <Container>
      {/* Introductory Section */}
      <div className="text-center mb-12 mt-36">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Meet Our Team at Jvanah
        </h1>
        <p className="text-lg text-primary max-w-2xl mx-auto">
          At Jvanah, we are proud to have a diverse and talented team dedicated
          to help our women and girls in Afghanistan. Learn more about our team
          members and their stories.
        </p>
      </div>

      {/* Profiles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {profiles.map((profile, index) => (
          <ProfileContainer
            key={index}
            img={profile.img}
            name={profile.name}
            title={profile.title}
          >
            {profile.description.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </ProfileContainer>
        ))}
      </div>
    </Container>
  );
}
