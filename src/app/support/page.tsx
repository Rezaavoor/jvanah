"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/Container";

const supportOptions = [
  {
    title: "For Organizations",
    description:
      "Partner with us to empower women and girls globally. Let's collaborate to make a lasting impact through education.",
    action: { label: "Contact Us", href: "mailto:info@jvanah.se" },
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0H21"
      />
    ),
  },
  {
    title: "Fund Our Programs",
    description:
      "Your donation provides essential resources and life-changing opportunities to Afghan women and girls seeking education.",
    action: {
      label: "Donate Now",
      href: "https://gofund.me/414a536b",
      external: true,
    },
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
      />
    ),
    featured: true,
  },
  {
    title: "Become a Volunteer",
    description:
      "Share your skills, time, and passion. Join our community of volunteers helping Afghan women and girls thrive.",
    action: { label: "Join Us", href: "mailto:info@jvanah.se" },
    icon: (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"
      />
    ),
  },
];

const Page: React.FC = () => {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sage-100/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cream-200/20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4" />

        <Container className="relative pt-16 pb-12 md:pt-24 md:pb-16">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3 block">
              Make a Difference
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-6 text-balance">
              Support Our Mission
            </h1>
            <p className="text-base md:text-lg text-navy-400 leading-relaxed">
              Empower Afghan women and girls through education and
              self-development. Together, we can create a brighter future.
            </p>
          </div>
        </Container>
      </section>

      {/* Support options */}
      <section className="py-12 md:py-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12, duration: 0.5 }}
              >
                <div
                  className={`relative h-full rounded-2xl p-7 transition-all duration-300 ${
                    option.featured
                      ? "bg-gradient-to-br from-sage-500 to-sage-600 text-white shadow-green-glow"
                      : "bg-white shadow-soft hover:shadow-soft-lg"
                  }`}
                >
                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${
                      option.featured
                        ? "bg-white/20"
                        : "bg-sage-50"
                    }`}
                  >
                    <svg
                      className={`w-6 h-6 ${
                        option.featured ? "text-white" : "text-sage-600"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      {option.icon}
                    </svg>
                  </div>

                  <h3
                    className={`text-xl font-semibold mb-2 ${
                      option.featured ? "text-white" : "text-navy-900"
                    }`}
                  >
                    {option.title}
                  </h3>
                  <p
                    className={`text-sm leading-relaxed mb-6 ${
                      option.featured ? "text-white/80" : "text-navy-400"
                    }`}
                  >
                    {option.description}
                  </p>

                  <Link
                    href={option.action.href}
                    target={option.action.external ? "_blank" : undefined}
                    className={`inline-flex items-center gap-1.5 text-sm font-medium transition-colors ${
                      option.featured
                        ? "text-white hover:text-sage-100"
                        : "text-sage-600 hover:text-sage-700"
                    }`}
                  >
                    {option.action.label}
                    <svg
                      className="w-4 h-4"
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
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-navy-800 to-navy-900 px-8 py-16 md:px-16 md:py-20 text-center">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-sage-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-sage-400/10 rounded-full blur-2xl" />

            <div className="relative max-w-xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-balance">
                Every Contribution Makes a Difference
              </h2>
              <p className="text-navy-200 mb-8 text-base md:text-lg leading-relaxed">
                Whether it&apos;s your time, expertise, or financial support,
                you&apos;re helping women and girls unlock their potential and build a
                better future.
              </p>
              <Link
                target="_blank"
                href="https://gofund.me/414a536b"
                className="inline-flex items-center px-8 py-3.5 text-sm font-semibold text-navy-900 bg-white rounded-full shadow-soft-lg hover:shadow-soft-xl hover:-translate-y-0.5 transition-all duration-300"
              >
                Donate on GoFundMe
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
};

export default Page;
