import Image from "next/image";
import React from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

interface SwiperCardProps {
  imgs: string[];
}

export default function SwiperCard({
  imgs,
}: SwiperCardProps): React.JSX.Element {
  return (
    <>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards, Navigation]}
        navigation={true}
        className="mySwiper"
      >
        {imgs.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              className={`w-full h-full `}
              alt="RaheekIraq"
              width={2000}
              height={2000}
              placeholder="blur"
              blurDataURL="/public/logo.png"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
