// pages/index.js

import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { Carousel } from "@/components/Carousel";
import Image from "next/image";
import heroImg1 from "../../public/img/jvanah/heros/1.jpg";
import heroImg3 from "../../public/img/jvanah/heros/3.jpg";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";

export default function Home() {
  const postsDirectory = path.join(process.cwd(), "content", "posts");
  const filenames = fs.readdirSync(postsDirectory);

  const blogPosts = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf8");
    const { data } = matter(fileContents);
    console.log(data.image);
    return {
      id: data.id,
      title: data.title,
      excerpt: data.excerpt,
      date: data.date,
      image: data.image,
      slug: data.slug,
    };
  });
  return (
    <Container>
      {/* <Hero /> */}

      {/* Carousel Component */}
      <Carousel blogPosts={blogPosts} />

      {/* First Image */}
      <div className="flex p-8 lg:p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:ml-0">
            <Image
              src={heroImg1}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex-1 items-center">
          <div className="flex h-full justify-center items-center">
            <p className="py-5 text-lg leading-normal text-primary lg:text-lg xl:text-xl text-center">
              The <span className="text-primaryGreen">Jvanah</span> Initiative
              is dedicated to empowering women and girls globally, with a
              particular focus on those in Afghanistan. We believe that
              education is a fundamental right and a powerful tool for change.
              Our mission is to provide access to online education, equipping
              Afghan women and girls with the skills and confidence they need to
              thrive in their communities.
            </p>
          </div>
        </div>
      </div>

      <SectionTitle
        preTitle=""
        title="Empowering Afghan Women Through Global Connections"
      >
        We understand the challenges faced by Afghan women, who often struggle
        for their basic rights in a restrictive environment. Our initiative is
        designed not just to educate but to create a support network that
        fosters personal and professional growth. We connect individuals from
        Sweden and other countries with Afghan women, facilitating the sharing
        of experiences, skills, and cultural insights.
      </SectionTitle>

      <SectionTitle preTitle="" title="Standing Together for a Brighter Future">
        At the Jvanah Initiative, we are committed to making a lasting impact.
        By standing together and supporting one another, we can create a
        brighter future for women and girls everywhere. Together, we believe we
        can make a difference and pave the way for a better tomorrow.
      </SectionTitle>

      {/* Second Image */}
      <div className="flex p-8 lg:p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:ml-0">
            <Image
              src={heroImg3}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div className="flex-1 items-center">
          <div className="flex h-full justify-center items-center">
            <p className="py-5 text-lg leading-normal text-primary lg:text-lg xl:text-xl text-center">
              In addition to our focus on education, we prioritize building
              confidence and a positive mindset. Our goal is to inspire young
              women to recognize their potential and become active participants
              in their communities. We also extend our support to those in need
              of self-development through events and programs that raise
              awareness and provide assistance. For those feeling lost and
              seeking support to start anew in Sweden, we ensure that all girls
              have the opportunity to learn and grow.
            </p>
          </div>
        </div>
      </div>

      <SectionTitle
        preTitle="Together"
        title="Let's empower her steps towards a brighter tomorrow"
      >
        We invite you to join us in our efforts to create a brighter future for
        all. By supporting us with your time or funding, you can help ensure
        that education reaches every corner of the country where women's
        education has been restricted. Together, let's empower her steps towards
        a brighter tomorrow.
      </SectionTitle>

      <Video videoId="jvanah_intro.mp4" />
    </Container>
  );
}
