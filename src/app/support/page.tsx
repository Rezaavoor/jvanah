// page.tsx
"use client";

import React from "react";
import Image from "next/image";
import jvanahStudentImg from "../../../public/img/jvanah/heros/3.jpg";
import afghanGrilsImg from "../../../public/img/jvanah/afghan-girls2.jpeg";
import Link from "next/link";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16">
      {/* Hero Section */}
      <div className="w-full max-w-6xl mx-auto px-4 text-center">
        <h1 className="text-4xl font-bold text-primaryGreen mb-6">
          Support the Jvanah Initiative
        </h1>
        <p className="text-xl text-primary mb-8">
          Your support empowers Afghan women and girls through education and
          self-development. Whether you're an individual, a professional, or an
          organization, there are many ways you can help us create a brighter
          future.
        </p>
        <h1 className="text-xl font-bold text-primary mt-16">
          Start by becoming a member!
        </h1>
        <p className="text-lg text-primary mb-6">
          Becoming a member is simple and impactful.
        </p>
        <Link
          target="_blank"
          href="https://docs.google.com/forms/d/136MEIP9djVl2NWlD7gYAemuUpTqUp4HZWWaCEoMKeB8/prefill"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
        >
          Become a Member Now
        </Link>
      </div>

      {/* Content Section */}
      <div id="support-options" className="w-full max-w-6xl mx-auto mt-16 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Are You an Organization? */}
          <section className="flex flex-col items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Are You an Organization?
            </h2>
            <p className="text-lg text-primary mb-6">
              We welcome partnerships with organizations that share our vision
              of empowering women and girls globally. Reach out to us at{" "}
              <a
                href="mailto:jvanah.se@gmail.com"
                className="text-primary underline font-semibold"
              >
                jvanah.se@gmail.com
              </a>{" "}
              to explore collaboration opportunities.
            </p>
            <Image
              src={jvanahStudentImg}
              alt="Organization Support"
              width={200}
              height={200}
              className="rounded-md shadow-md"
            />
          </section>

          {/* How to Fund Our Programs */}
          <section className="flex flex-col items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Fund Our Programs
            </h2>
            <p className="text-lg text-primary mb-6">
              Your financial contributions directly empower women and girls in
              Afghanistan by providing internet access, educational resources,
              and life-changing opportunities.
            </p>
            <Link
              target="_blank"
              href="https://gofund.me/414a536b"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
            >
              Donate on GoFundMe
            </Link>
          </section>

          {/* Become a Volunteer */}
          <section className="flex flex-col items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Become a Volunteer
            </h2>
            <p className="text-lg text-primary mb-6">
              Volunteers are the backbone of our work. Share your ideas, skills,
              and time to help Afghan women and girls access quality education
              and self-development opportunities.
            </p>
            <Link
              target="_blank"
              href="mailto:jvanah.se@gmail.com"
              className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
            >
              Contact Us by sending an email
            </Link>
          </section>
          {/* Share Your Expertise */}
          <section className="flex flex-col items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Share Your Expertise
            </h2>
            <p className="text-lg text-primary mb-6">
              Your skills can make a meaningful impact! Whether you're a
              teacher, a mentor, or an industry professional, you can help our
              students thrive.
            </p>
            <Image
              src={afghanGrilsImg}
              alt="Share Expertise"
              width={200}
              height={200}
              className="rounded-md shadow-md"
            />
          </section>

          {/* Join Our Team */}
          <section className="col-span-1 md:col-span-2 flex flex-col items-center bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-primary mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-primary mb-6">
              If you're passionate about making a difference, consider joining
              the Jvanah Initiative. We're always looking for individuals who
              can contribute their talents to support our mission.
            </p>
          </section>
        </div>
      </div>

      {/* Closing Section */}
      <div className="w-full max-w-6xl mx-auto mt-16 px-4 text-center">
        <h2 className="text-4xl font-extrabold text-primary mb-4">
          Every Contribution Counts
        </h2>
        <p className="text-xl text-primary mb-6">
          Your time, skills, or financial support is a vital part of helping
          women and girls in Afghanistan unlock their potential and lead
          empowered lives.
        </p>
        <Link
          href="#support-options"
          className="inline-block px-6 py-3 text-lg font-semibold text-white bg-primary rounded-md shadow-md hover:bg-primaryGreen hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition duration-200"
        >
          Support Us Today!
        </Link>
      </div>
    </div>
  );
};

export default Page;
