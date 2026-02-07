"use client";

import { useState } from "react";
import { Container } from "@/components/Container";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const profiles = [
  {
    name: "Hena",
    title: "President",
    description:
      "As Hena, a proud resident of Sweden and a dedicated student of textile design, our roots trace back to the beautiful land of Afghanistan, a place filled with resilience and hope. Having experienced the profound impact of education firsthand, we are acutely aware of the struggles endured by women and girls in Afghanistan, unable to pursue their educational dreams. Driven by a deep sense of purpose, we have embarked on a personal mission to make a difference through Jvanah, an online education program specifically tailored for Afghan women.",
    img: "hena.png",
  },
  {
    name: "Sare",
    title: "Vice President",
    description:
      "As a sociology and anthropology student, I've always wondered how I can contribute to improving my community. Jvanah provides a great opportunity for me to support girls from my hometown through education.",
    img: "sare.png",
  },
  {
    name: "Reza",
    title: "IT Manager",
    description:
      "As a young Afghan man having the privilege of living and studying in Sweden, I feel responsible for fighting injustice in my homeland. Jvanah allows me to do that and lets me help Afghan girls and women get access to education — a fundamental right.",
    img: "reza.png",
  },
  {
    name: "Shafiq",
    title: "Education Manager",
    description:
      "As someone deeply committed to education with a background in Data Science, I am dedicated to helping Afghan women and girls overcome the barriers preventing them from accessing education. I am motivated to contribute to their growth and create lasting change through Jvanah.",
    img: "442.JPG",
  },
  {
    name: "Zahra",
    title: "Finance Manager",
    description:
      "As an Afghan photographer and visual storyteller, I've always had on my mind to make a small difference in someone's life and that's why I joined Jvanah's team. I'm glad to work as an event manager with wonderful people.",
    img: "zahra.png",
  },
  {
    name: "Taha",
    title: "Coordinator",
    description:
      "I am passionate about technology and helping people, especially my sisters in Afghanistan who cannot go to school. Through my involvement in Jvanah, I want to make a meaningful difference in their future.",
    img: "taha.png",
  },
];

export default function AboutUs() {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-1/2 w-[600px] h-[600px] bg-sage-100/30 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <Container className="relative pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3 block">
              Our People
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 text-balance">
              A Global Community of Support
            </h1>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed">
              At Jvanah, we are blessed with the support of teachers, volunteers,
              and supporters from around the world. Their dedication and passion
              empower us to bring education and hope to women and girls in
              Afghanistan.
            </p>
          </div>
        </Container>
      </section>

      {/* Team section */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-3">
              Meet Our Team
            </h2>
            <p className="text-navy-400 max-w-lg mx-auto">
              A diverse and talented team dedicated to leading Jvanah and its
              mission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {profiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <div className="group bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
                  {/* Profile image */}
                  <div className="relative pt-8 flex justify-center">
                    <div className="w-28 h-28 rounded-full overflow-hidden ring-3 ring-sage-100 shadow-soft">
                      <Image
                        src={`/img/jvanah/profiles/${profile.img}`}
                        alt={profile.name}
                        width={150}
                        height={150}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="px-6 pt-4 pb-6 text-center">
                    <h3 className="text-lg font-semibold text-navy-900">
                      {profile.name}
                    </h3>
                    <p className="text-sm text-sage-600 font-medium mb-3">
                      {profile.title}
                    </p>

                    <AnimatePresence mode="wait">
                      <motion.p
                        key={expandedIndex === index ? "expanded" : "collapsed"}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-sm text-navy-400 leading-relaxed"
                      >
                        {expandedIndex === index
                          ? profile.description
                          : `${profile.description.substring(0, 120)}...`}
                      </motion.p>
                    </AnimatePresence>

                    <button
                      onClick={() =>
                        setExpandedIndex(
                          expandedIndex === index ? null : index
                        )
                      }
                      className="mt-3 text-xs font-medium text-sage-500 hover:text-sage-700 transition-colors"
                    >
                      {expandedIndex === index ? "Read less" : "Read more"}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
