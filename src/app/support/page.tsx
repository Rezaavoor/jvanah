"use client";

import React from "react";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto text-center mb-16">
        <h1 className="text-4xl font-semibold text-primaryGreen mb-6">
          Support Our Mission
        </h1>
        <p className="text-xl text-primary mb-8">
          Empower Afghan women and girls through education and self-development. Together, we can create a brighter future.
        </p>
      </div>

      {/* Support Options Section */}
      <div
        id="support-options"
        className="w-full max-w-6xl mx-auto mt-16 flex justify-center items-center"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 justify-center">
          {/* Organization Support */}
          <div className="flex flex-col items-center bg-transparent p-8 rounded-lg border border-primary hover:border-primaryGreen transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">For Organizations</h3>
            <p className="text-lg text-primary mb-4 text-center">
              Partner with us to empower women and girls globally. Let’s collaborate to make a lasting impact.
            </p>
            <Link href="mailto:info@jvanah.se" className="text-primary hover:text-primaryGreen underline">Contact Us</Link>
          </div>

          {/* Financial Support */}
          <div className="flex flex-col items-center bg-transparent p-8 rounded-lg border border-primary hover:border-primaryGreen transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">Fund Our Programs</h3>
            <p className="text-lg text-primary mb-4 text-center">
              Your donation will provide essential resources and life-changing opportunities to Afghan women and girls.
            </p>
            <Link
              href="https://gofund.me/414a536b"
              className="text-primary hover:text-primaryGreen underline"
              target="_blank"
            >
              Donate Now
            </Link>
          </div>

          {/* Volunteer Support */}
          <div className="flex flex-col items-center bg-transparent p-8 rounded-lg border border-primary hover:border-primaryGreen transition-all duration-300 ease-in-out shadow-sm hover:shadow-xl max-w-sm w-full">
            <h3 className="text-2xl font-semibold text-primary mb-4">Become a Volunteer</h3>
            <p className="text-lg text-primary mb-4 text-center">
              Share your skills, time, and passion. Join our community of volunteers helping Afghan women and girls thrive.
            </p>
            <Link href="mailto:info@jvanah.se" className="text-primary hover:text-primaryGreen underline">Join Us</Link>
          </div>
        </div>
      </div>

      {/* Closing Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 text-center">
        <h2 className="text-4xl font-bold text-primary mb-4">Every Contribution Makes a Difference</h2>
        <p className="text-xl text-primary mb-6">
          Whether it's your time, expertise, or financial support, you’re helping women and girls unlock their potential and build a better future.
        </p>
        <Link
          target="_blank"
          href="https://gofund.me/414a536b"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
        >
          Donate on GoFundMe
        </Link>
      </div>
    </div>
  );
};

export default Page;
