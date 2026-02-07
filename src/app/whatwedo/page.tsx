"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const programs = [
  {
    title: "Language Courses",
    description:
      "Learn English, Swedish, German, and more to open doors to global opportunities.",
    image: "/img/jvanah/heros/Lang.jpg",
  },
  {
    title: "Photography",
    description:
      "Express creativity and tell powerful stories through the art of photography.",
    image: "/img/jvanah/heros/photo.jpg",
  },
  {
    title: "Arts",
    description:
      "Explore artistic expression for empowerment and self-discovery.",
    image: "/img/jvanah/heros/Art.jpg",
  },
  {
    title: "Personal Development",
    description:
      "Build confidence, resilience, and foster a positive mindset for life.",
    image: "/img/jvanah/heros/Self.jpg",
  },
  {
    title: "Webinars",
    description:
      "Connect with mentors and peers to share insights and inspiration.",
    image: "/img/jvanah/heros/Web.jpg",
  },
  {
    title: "And Much More",
    description:
      "Specialized workshops and cultural exchange programs await you.",
    image: "/img/jvanah/heros/More.jpg",
  },
];

const Page: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-3xl -translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-20 right-0 w-[400px] h-[400px] bg-cream-200/20 rounded-full blur-3xl translate-x-1/4" />

        <Container className="relative pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3 block">
              Our Programs
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 text-balance">
              What We Do
            </h1>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed">
              At Jvanah, we provide transformative online education and support
              programs designed to inspire growth, develop skills, and create
              opportunities for women and girls.
            </p>
          </div>
        </Container>
      </section>

      {/* Programs grid */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {programs.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.5 }}
              >
                <div className="group relative bg-white rounded-2xl shadow-soft hover:shadow-soft-lg transition-all duration-300 overflow-hidden">
                  {/* Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-900/40 via-transparent to-transparent" />
                  </div>

                  {/* Content */}
                  <div className="p-5">
                    <h3 className="text-lg font-semibold text-navy-900 mb-1.5">
                      {program.title}
                    </h3>
                    <p className="text-sm text-navy-400 leading-relaxed">
                      {program.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Connecting section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative rounded-3xl bg-gradient-to-br from-sage-50 to-cream-100 px-8 py-14 md:px-16 md:py-20">
            {/* Decorative */}
            <div className="absolute top-0 right-0 w-48 h-48 bg-sage-200/40 rounded-full blur-2xl" />
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-cream-300/30 rounded-full blur-2xl" />

            <div className="relative text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-6 text-balance">
                Connecting Cultures and Communities
              </h2>
              <div className="space-y-4 text-base md:text-lg text-navy-400 leading-relaxed">
                <p>
                  We believe in the power of collaboration and cultural exchange.
                  By equipping women and girls with essential skills and
                  confidence, we empower them to forge their own paths, pursue
                  their dreams, and become active participants in shaping a
                  brighter future.
                </p>
                <p>
                  Education is more than just knowledge — it&apos;s a pathway to
                  change. At the Jvanah Initiative, we are not just providing
                  education — we&apos;re creating opportunities for transformation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
