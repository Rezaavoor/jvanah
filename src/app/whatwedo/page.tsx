// page.tsx
"use client";

import React from "react";

const Page: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-4">
      {/* Hero Section */}
      <div className="w-full max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-primaryGreen mb-6">
          What We Do
        </h1>
        <p className="text-lg text-primary mb-8">
          At the Jvanah Initiative, we are dedicated to empowering women and
          girls, particularly in Afghanistan, by providing transformative online
          education and support programs. Through our tailored courses and
          initiatives, we equip women with the tools they need to overcome
          challenges, build confidence, and unlock their full potential.
        </p>
      </div>

      {/* Content Section */}
      <div className="w-full max-w-4xl mx-auto mt-12 space-y-12">
        {/* Our Programs */}
        <section>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Our Programs
          </h2>
          <p className="text-lg text-primary mb-6">
            We offer a wide range of programs designed to inspire growth,
            develop skills, and create opportunities:
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li className="text-primary">
              <strong>Language Courses:</strong> Learn English, Swedish, German,
              and more to open doors to global opportunities.
            </li>
            <li className="text-primary">
              <strong>Photography:</strong> Express creativity and tell stories
              through the art of photography.
            </li>
            <li className="text-primary">
              <strong>Arts:</strong> Explore various forms of artistic
              expression as a medium for empowerment and self-discovery.
            </li>
            <li className="text-primary">
              <strong>Personal Development:</strong> Build confidence, develop
              resilience, and foster a positive mindset.
            </li>
            <li className="text-primary">
              <strong>Experience Sharing Webinars:</strong> Connect with mentors
              and peers from around the world to share insights, stories, and
              inspiration.
            </li>
            <li className="text-primary">
              <strong>And Much More:</strong> From specialized skill-building
              workshops to cultural exchange programs, we continuously expand
              our offerings to meet the diverse needs of our students.
            </li>
          </ul>
        </section>

        {/* Connecting Cultures and Communities */}
        <section>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Connecting Cultures and Communities
          </h2>
          <p className="text-lg text-primary mb-6">
            We believe in the power of collaboration and cultural exchange. By
            connecting individuals from diverse backgrounds, we foster
            understanding, support, and shared growth. Our programs create a
            global network where women and girls can learn, thrive, and
            contribute meaningfully to their communities.
          </p>
        </section>

        {/* Empowering Change */}
        <section>
          <h2 className="text-3xl font-semibold text-primary mb-4">
            Empowering Change
          </h2>
          <p className="text-lg text-primary mb-6">
            Education is more than just knowledge—it's a pathway to change. By
            equipping women and girls with essential skills and confidence, we
            empower them to forge their own paths, pursue their dreams, and
            become active participants in shaping a brighter future for
            themselves and their communities.
          </p>
        </section>

        {/* Closing Statement */}
        <section>
          <p className="text-lg text-primary mb-6">
            At the Jvanah Initiative, we are not just providing education—we're
            creating opportunities for transformation. Together, we can pave the
            way for a world where women and girls are empowered to lead,
            inspire, and succeed.
          </p>
        </section>
      </div>
    </div>
  );
};

export default Page;
