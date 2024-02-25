import React from "react";
import Image from "next/image";

export default function CardFeature({
  icon,
  title,
  paragraph,
  index,
  inView,
}: {
  icon: string;
  title: string;
  paragraph: string;
  index: number;
  inView: boolean;
}) {
  return (
    <section
      className={` relative rounded-2xl bg-[#F6F6F6] shadow-xl p-5 pt-14 lg:pt-28 max-w-80 min-w-56 lg:w-72  flex flex-col justify-end xl:mx-5 ${
        inView && `animate pop delay-${index + 2} `
      }`}
    >
      <Image
        className="absolute -top-10 -left-6 lg:-top-12 lg:-left-10 w-28 lg:w-40 z-10"
        src={icon}
        alt={"Raheek-Al-Iraq"}
        width={150}
        height={150}
      />
      <h4 className="text-xl lg:text-4xl font-semibold"> {title} </h4>
      <p className="lg:text-xl">{paragraph}</p>
    </section>
  );
}
