import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="bg-hero p-6 sm:p-10 xl:p-10 rounded-xl flex-col lg:flex-row flex items-center justify-center lg:justify-between relative space-y-6">
        <div className="w-full text-center lg:text-start space-y-6">
          <h1 className="text-3xl sm:text-5xl font-medium leading-9 text-white md:!leading-[56px] lg:max-w-[543px] ">
            I’m Franklin William{" "} <br />
            <span className="font-extrabold">Front-end</span>
            <span className="border-text"> Developer</span>
          </h1>

          <p className="md:my-6 text-base text-white/70  leading-6 md:leading-7 lg:max-w-[460px]">
          Criando soluções funcionais e atraentes, sempre com foco na experiência do usuário.
          </p>
        </div>
        <div className="container-lg">
          <Image
            alt="Wallpaper Samurai"
            width="488"
            height="383"
            src="/assets/images/hero/samurai.svg"
            className="absolute top-[-31px] right-[-20px] z-10"
          />
          <Image
            alt="Wallpaper Jett - Valorant"
            width="381"
            height="341"
            src="/assets/images/hero/shinobi.svg"
            className="absolute top-[10px] right-[150px] z-[9] opacity-60 drop"
          />
        </div>
        <div className="assets">
          <Button variant={"action"} size={"lg"}  >Iniciar Projeto</Button>
          <Image 
            src="/assets/images/icons/geometric.svg"
            alt="Formas Geométricas Abstratas"
            width={160}
            height={80}
            className="hidden lg:block"
          />
        </div>
      </div>
    </>
  );
};

export default HeroSection;
