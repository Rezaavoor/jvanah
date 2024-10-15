import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/jvanah/hero.png";

export const Hero = () => {
  return (
    <Container className="flex justify-between flex-wrap ">
      <div className="flex items-center justify-center w-full lg:w-1/3">
        <div className="">
          <Image
            src={heroImg}
            width="400"
            className={"object-cover"}
            alt="Hero Illustration"
            loading="eager"
            placeholder="blur"
          />
        </div>
      </div>
      <div className="flex items-center w-full lg:w-1/2 ">
        <div className="max-w-2xl">
          {/* <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
            Jvanah
          </h1> */}
          <p className="py-5 text-xl leading-normal text-primary lg:text-xl xl:text-2xl ">
            The Jvanah Initiative is dedicated to empowering women and girls
            globally, with a particular focus on those in Afghanistan. We
            believe that education is a fundamental right and a powerful tool
            for change. Our mission is to provide access to online education,
            equipping Afghan women and girls with the skills and confidence they
            need to thrive in their communities.
          </p>
        </div>
      </div>
    </Container>
  );
};
