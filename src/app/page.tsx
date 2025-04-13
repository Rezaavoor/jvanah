
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
      {/* Section Title for Empowerment */}
      <div className="flex flex-col items-center mb-8">
        <Image
          src="/img/jvanah/heros/21.jpg"
          alt="Empowerment Image"
          width={300}
          height={300}
          className="rounded-full shadow-lg mb-4 opacity-80"  // Adjust opacity here (e.g., 70%)
        />
        <SectionTitle preTitle="Together" title="Let's empower her steps towards a brighter tomorrow">
          We invite you to join us in our efforts to create a brighter future for
          all. By supporting us with your time or funding, you can help ensure
          that education reaches every corner of the country where women's
          education has been restricted. Together, let's empower her steps towards
          a brighter tomorrow.
        </SectionTitle>

        {/* Image added inside the section after the SectionTitle */}
        <div className="flex justify-center mb-8">
          <Image
            src="/img/jvanah/heros/44.png"
            alt="Empowerment Image"
            width={400}
            height={300}
            className=""
          />
        </div>
      </div>

          {/* Add Carousel for blog posts */}
          <Carousel blogPosts={blogPosts} />

      {/* First Section (Jvanah Introduction) */}
      <div className="flex flex-col lg:flex-row p-8 lg:p-16 text-center">
        <div className="flex-1 items-center justify-center">
          <div className="text-container">
            <SectionTitle title="Standing Together for a Brighter Future" />
            <p className="py-5 text-lg leading-normal text-primary lg:text-lg xl:text-xl">
              The <span className="text-primaryGreen">Jvanah</span> Initiative is dedicated to empowering women and girls globally,
              with a particular focus on those in Afghanistan. We believe that education is a fundamental right and a powerful tool for change.
              Our mission is to provide access to online education, equipping Afghan women and girls with the skills and confidence they need to thrive in their communities.

              In addition to our focus on education, we prioritize building confidence and a positive mindset. Our goal is to inspire young women to recognize their potential and become active participants in their communities. We also extend our support to those in need of self-development through events and programs that raise awareness and provide assistance. For those feeling lost and seeking support to start anew in Sweden, we ensure that all girls have the opportunity to learn and grow.
            </p>
          </div>
        </div>
      </div>

  

      <Video videoId="jvanah_intro.mp4" />
    </Container>
  );
}