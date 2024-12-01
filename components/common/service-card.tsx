import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  cardImage: { src: string; alt: string; };
  title: string;
  type: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ cardImage, title, type }) => {
  return (
    <>
      <div className="group sm:block relative space-y-5">
        <div className="relative overflow-hidden rounded-xl shadow-lg">
          <Image
            src={cardImage.src}
            alt={cardImage.alt}
            width={188}
            height={176}
            className="card-image"
          />
          <div className="hover-fade-in-bg"></div>
        </div>
        <div className="card-text space-y-4 text-left">
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <span className="card-span">{type}</span>
          </div>
          <div>
            <Button variant={"outline"}>Saiba Mais</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceCard;
