"use client";

import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import ServiceCard from "@/components/common/service-card";
import { cardService } from "@/data/card-service";
import Link from "next/link";

const Services: React.FC = () => {
  return (
    <>
      <div className="bg-services p-10">
        <div className="pt-16 space-y-16">
          <div>
            <h2 className="section-title">Meus Serviços</h2>
          </div>
          <Swiper
            spaceBetween={20}
            slidesPerView={5}
            modules={[Autoplay]}
            loop={true}
            grabCursor={true}
            keyboard={{ enabled: true }}
            centeredSlides={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              540: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {cardService.map((item) => (
              <SwiperSlide key={item.id} className="">
                <Link href={`/servicos/${item.id}`}>
                  <ServiceCard
                    cardImage={item.cardImage}
                    title={item.title}
                    type={item.type}
                  />
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Services;
