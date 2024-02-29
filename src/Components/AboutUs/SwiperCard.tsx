import Image from "next/image";
import React from "react";
import { EffectCards, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// interface ImageInfo {
//   img: string;
//   style: string;
// }

interface SwiperCardProps {
  imgs: HTMLImageElement[];
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
          // eslint-disable-next-line react/jsx-key
          <SwiperSlide key={index}>
            <Image
              src={item.src}
              // className={`${item.style} `}
              className={`w-full h-full `}
              alt="RaheekIraq"
              width={2000}
              height={2000}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
