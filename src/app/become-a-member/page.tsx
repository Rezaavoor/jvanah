"use client";

import { useState } from "react";
import Image from "next/image";
import React from "react";
import afghanGirls from "../../../public/img/jvanah/afghan-girls.jpeg";
import Link from "next/link";

const Page: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  // Google Form POST URL (replace with your form's URL)
  const FORM_URL =
    "https://docs.google.com/forms/d/e/YOUR_GOOGLE_FORM_ID/formResponse";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    // Create a FormData object from the form
    const data = new FormData(form);

    // Send the form data to Google Forms
    fetch(FORM_URL, {
      method: "POST",
      mode: "no-cors",
      body: data,
    })
      .then(() => {
        setSubmitted(true);
        form.reset();
      })
      .catch((error) => {
        console.error("Error!", error.message);
      });
  };

  return (
    <div className="flex flex-col items-center justify-center py-16 px-4 bg-gray-100">
      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto text-center mb-16">
        <div className="relative">
          <Image
            src="/img/jvanah/heros/44.png"
            alt="Empowering Women"
            width={500}
            height={500}
            className="rounded-full mx-auto mb-4"
          />
        </div>
        <h1 className="text-4xl font-extrabold text-primaryGreen mb-4">
          Empower Women and Girls with the Jvanah Initiative
        </h1>
        <p className="text-lg text-primary mb-8">
          Join us in supporting our mission to provide access to education,
          foster confidence, and build a brighter future for Afghan women and
          girls.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mx-auto mt-16 px-4 text-center space-y-16">

        {/* Why Become a Member Section */}
        <section className="bg-gradient-to-r from-primaryGreen to-primary p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Why Become a Member?</h2>
          <p className="text-lg text-white mb-6">
            As a member of the Jvanah Initiative, you’ll be an essential part of
            our global network dedicated to creating positive change.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center">
            <div className="flex items-center space-x-4 hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="w-14 h-14 rounded-full bg-white text-primaryGreen flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Empower Women and Girls</h3>
                <p className="text-white">
                  Your support helps us provide online education, skill-building courses, and personal development programs for Afghan women and girls.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="w-14 h-14 rounded-full bg-white text-primaryGreen flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Expand Opportunities</h3>
                <p className="text-white">
                  By joining us, you help connect women and girls with resources, mentorship, and networks that inspire growth and success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Member Benefits Section */}
        <section className="bg-gradient-to-r from-primary to-primaryGreen p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">Member Benefits</h2>
          <p className="text-lg text-white mb-6">
            As a valued member, you’ll enjoy exclusive access to our latest updates and opportunities:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 justify-center">
            <div className="flex items-center space-x-4 hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="w-14 h-14 rounded-full bg-white text-primaryGreen flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Stay Informed</h3>
                <p className="text-white">
                  Be the first to know about our latest news, events, and initiatives.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 hover:scale-105 transform transition duration-300 ease-in-out">
              <div className="w-14 h-14 rounded-full bg-white text-primaryGreen flex items-center justify-center">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414L9 14.414 4.293 9.707a1 1 0 011.414-1.414L9 11.586l6.293-6.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-white">Exclusive Access</h3>
                <p className="text-white">
                  Receive notifications about new courses, programs, and events before they’re publicly announced.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How to Join Section */}
        <section className="bg-gradient-to-r from-primaryGreen to-primary p-8 rounded-xl shadow-xl">
          <h2 className="text-3xl font-bold text-white mb-6">How to Join</h2>
          <p className="text-lg text-white mb-6">
            Becoming a member is simple and impactful. Sign up today to start
            making a difference in the lives of Afghan women and girls. Together,
            we can build a better future, one step at a time.
          </p>
          <Link
            target="_blank"
            href="https://docs.google.com/forms/d/e/1FAIpQLSepFD4AVJzYSM8Be-cJy5ovZVCMZ2Nz1p_ippN-6-vNYn7uOg/viewform"
            className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
          >
            Become a Member Now
          </Link>
        </section>
      </div>

      {/* Closing Section */}
      <div className="w-full max-w-4xl mx-auto mt-16 px-4 text-center">
        <p className="text-lg text-primary">
          Your support makes all the difference. Join us in our journey to
          create a brighter tomorrow for women and girls everywhere. Thank you
          for standing with us!
        </p>
      </div>
    </div>
  );
};

export default Page;
