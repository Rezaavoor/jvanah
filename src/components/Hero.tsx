import Image from "next/image";
import { Container } from "@/components/Container";
import jvanahLogo from "../../public/img/jvanah/logo.png";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full relative h-[50vh]">
      <div className="w-2/3 sm:w-1/2 lg:w-1/4 relative h-full">
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
