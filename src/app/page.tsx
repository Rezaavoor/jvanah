import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import Image from "next/image";
import heroImg1 from "../../public/img/jvanah/heros/1.jpg";
import heroImg2 from "../../public/img/jvanah/heros/2.jpg";
import heroImg3 from "../../public/img/jvanah/heros/3.jpg";
import heroImg4 from "../../public/img/jvanah/heros/4.jpg";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />
      {/* First Image */}
      <div className="flex p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:ml-0">
            <Image
              src={heroImg1}
              // width="5000"
              // fill={true}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className="flex-1 items-center 
 "
        >
          <div className="flex h-full justify-center items-center ">
            <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl text-center ">
              The <span className="text-primaryGreen ">Jvanah</span> Initiative
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
      {/* Second Image */}
      <div className="flex p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div
          className="flex-1 items-center 
 "
        >
          <div className="flex h-full justify-center items-center ">
            <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl text-center ">
              We understand the challenges faced by Afghan women, who often
              struggle for their basic rights in a restrictive environment. Our
              initiative is designed not just to educate but to create a support
              network that fosters personal and professional growth. We connect
              individuals from Sweden and other countries with Afghan women,
              facilitating the sharing of experiences, skills, and cultural
              insights.
            </p>
          </div>
        </div>
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:mr-0">
            <Image
              src={heroImg2}
              // width="5000"
              // fill={true}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
      </div>
      {/* Third Image */}
      <div className="flex p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:ml-0">
            <Image
              src={heroImg3}
              // width="5000"
              // fill={true}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
          </div>
        </div>
        <div
          className="flex-1 items-center 
 "
        >
          <div className="flex h-full justify-center items-center ">
            <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl text-center ">
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
      {/* Fourth Image */}
      <div className="flex p-16 flex-col lg:flex-row lg:border-none border-b-2 border-primaryGreen border-spacing-6">
        <div
          className="flex-1 items-center 
 "
        >
          <div className="flex h-full justify-center items-center ">
            <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl text-center ">
              At the Jvanah Initiative, we are committed to making a lasting
              impact. By standing together and supporting one another, we can
              create a brighter future for women and girls everywhere. Together,
              we believe we can make a difference and pave the way for a better
              tomorrow.
            </p>
          </div>
        </div>
        <div className="flex-1 relative ">
          <div className="w-full sm:w-1/2 lg:w-2/3 relative h-full m-auto lg:mr-0">
            <Image
              src={heroImg4}
              // width="5000"
              // fill={true}
              style={{ objectFit: "fill" }}
              alt="Girl reading a book - Image"
              loading="eager"
              placeholder="blur"
            />
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
      {/*

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />


      <Video videoId="fZ0D0cnR88E" />


      <Testimonials />

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq /> */}
    </Container>
  );
}
