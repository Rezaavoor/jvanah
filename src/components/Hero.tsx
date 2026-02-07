import Image from "next/image";
import jvanahLogo from "../../public/img/jvanah/logo.png";

export const Hero = () => {
  return (
    <div className="flex justify-center items-center w-full py-12 md:py-20">
      <div className="relative w-48 h-48 md:w-64 md:h-64 animate-pulse-soft">
        <Image
          src={jvanahLogo}
          fill={true}
          style={{ objectFit: "contain" }}
          alt="Jvanah"
          loading="eager"
          placeholder="blur"
        />
      </div>
    </div>
  );
};
