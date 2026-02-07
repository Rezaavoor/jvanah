import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { Container } from "@/components/Container";
import { Carousel } from "@/components/Carousel";
import { SectionTitle } from "@/components/SectionTitle";
import { Video } from "@/components/Video";
import Image from "next/image";
import Link from "next/link";

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
    <>
      {/* Hero section */}
      <section className="relative overflow-hidden">
        {/* Soft organic background shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-sage-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cream-200/30 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

        <Container className="relative pt-16 pb-20 md:pt-24 md:pb-32">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            {/* Circular hero image */}
            <div className="relative mb-8">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full overflow-hidden shadow-soft-lg ring-4 ring-white">
                <Image
                  src="/img/jvanah/heros/21.jpg"
                  alt="Empowering women through education"
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              {/* Decorative ring */}
              <div className="absolute -inset-3 rounded-full border border-sage-200/60 -z-10" />
              <div className="absolute -inset-6 rounded-full border border-sage-100/40 -z-10" />
            </div>

            <SectionTitle
              preTitle="Together"
              title="Empowering her steps towards a brighter tomorrow"
            >
              Join us in creating a brighter future for all. By supporting us
              with your time or funding, you can help ensure that education
              reaches every corner where women&apos;s education has been restricted.
            </SectionTitle>

            <div className="flex flex-col sm:flex-row items-center gap-4 mt-8">
              <Link
                href="/support"
                className="inline-flex items-center px-7 py-3 text-sm font-medium text-white bg-sage-500 rounded-full shadow-green-glow hover:bg-sage-600 transition-all duration-300 hover:-translate-y-0.5"
              >
                Support Our Mission
              </Link>
              <Link
                href="/become-a-member"
                className="inline-flex items-center px-7 py-3 text-sm font-medium text-sage-700 bg-sage-50 rounded-full hover:bg-sage-100 transition-all duration-300"
              >
                View Courses
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* Decorative image band */}
      <section className="py-8 flex justify-center">
        <Image
          src="/img/jvanah/heros/44.png"
          alt="Jvanah illustration"
          width={360}
          height={270}
          className="opacity-90"
        />
      </section>

      {/* About section */}
      <section className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage-50/30 to-transparent -z-10" />
        <Container className="py-20 md:py-28">
          <div className="max-w-3xl mx-auto text-center">
            <SectionTitle title="Standing Together for a Brighter Future" />
            <div className="mt-8 space-y-5 text-base md:text-lg leading-relaxed text-navy-400">
              <p>
                The{" "}
                <span className="font-semibold text-sage-600">Jvanah</span>{" "}
                Initiative is dedicated to empowering women and girls globally,
                with a particular focus on those in Afghanistan. We believe that
                education is a fundamental right and a powerful tool for change.
                Our mission is to provide access to online education, equipping
                Afghan women and girls with the skills and confidence they need to
                thrive in their communities.
              </p>
              <p>
                In addition to our focus on education, we prioritize building
                confidence and a positive mindset. Our goal is to inspire young
                women to recognize their potential and become active participants
                in their communities. We also extend our support to those in need
                of self-development through events and programs that raise
                awareness and provide assistance.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* News and Events */}
      <Container>
        <Carousel blogPosts={blogPosts} />
      </Container>

      {/* Video section */}
      <section className="py-16 md:py-24">
        <Container>
          <div className="text-center mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-sage-500 mb-3 block">
              Watch
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900">
              Our Story
            </h2>
          </div>
          <Video videoId="jvanah_intro.mp4" />
        </Container>
      </section>
    </>
  );
}
