import Image from "next/image";
import { Container } from "@/components/Container";
import jvanahLogo from "../../public/img/jvanah/logo.png";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full relative h-screen">
      <div className="w-2/3 sm:w-1/2 md:w-1/3 relative h-full">
        <Image
          src={jvanahLogo}
          fill={true}
          style={{ objectFit: "contain" }}
          alt="Jvanah-Hero"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </div>
  );
};
