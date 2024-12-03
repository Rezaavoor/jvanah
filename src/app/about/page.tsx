"use client";

import { Container } from "@/components/Container";
import { ProfileContainer } from "@/components/ProfileContainer";
import Image from "next/image";
import teamImage from "../../../public/img/jvanah/jvanah-team.png"; // Corrected the image path

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
        "As an Afghan photographer and visual storyteller, I've always had on my mind to make a small difference in someone's life and that's why I joined Jvanah's team. I'm glad to work as an event manager with wonderful people.",
      ],
      img: "zahra.png",
    },
    {
      name: "Bjorn",
      title: "Strategic Advisor",
      description: [
        "I specialize in strategic planning and transformational coaching for businesses, organizations, and individuals. With a passion for empowering teams to reach their full potential, I am committed to supporting Jvanah's mission to inspire and give hope to our students.",
      ],
      img: "bjorn.png",
    },
    {
      name: "Taha",
      title: "Legal Advisor",
      description: [
        "I am passionate about technology and helping people, especially my sisters in Afghanistan who cannot go to school. Through my involvement in Jvanah, I want to make a meaningful difference in their future.",
      ],
      img: "taha.png",
    },
    {
      name: "Sare",
      title: "Social Media Manager",
      description: [
        "As a sociology and anthropology student, I've always wondered how I can contribute to improving my community. Jvanah provides a great opportunity for me to support girls from my hometown through education.",
      ],
      img: "sare.png",
    },
    {
      name: "Reza",
      title: "IT Manager",
      description: [
        "As a young Afghan man having the privilege of living and studying in Sweden, I feel responsible for fighting injustice in my homeland. Jvanah allows me to do that and lets me help Afghan girls and women get access to education—a fundamental right.",
      ],
      img: "reza.png",
    },
  ];

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
