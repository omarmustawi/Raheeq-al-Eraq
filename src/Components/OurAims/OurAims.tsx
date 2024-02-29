import React from "react";
import OurAims1 from "/public/OurAims/OurAims1.jpg";
import OurAims2 from "/public/OurAims/OurAims2.jpg";
import OurAims3 from "/public/OurAims/OurAims3.jpg";
import OurAims4 from "/public/OurAims/OurAims4.jpg";
import Image from "next/image";
import { data } from "@/dataJson/DataOurAims";
import { useInView } from "react-intersection-observer";

const imgs = [OurAims1, OurAims2, OurAims3, OurAims4];

export default function OurAims() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <>
      <h4 id="#aims" className="titleSection container-mx">
        {" "}
        أهدافنا{" "}
      </h4>
      <section
        ref={ref}
        className="overflow-x-hidden flex flex-col lg:flex-row justify-center py-10 px-5 lg:mx-10  mb-36"
      >
        {/* right section */}
        <section
          className={`animated-right-hidden ${inView && "animated-come"}`}
        >
          {data.map((item, index) => (
            <div
              key={index}
              className={`flex items-center gap-6 p-2 xl:p-5 my-5 relative`}
            >
              <span
                className={`${
                  index % 2 ? " bg-yel text-black" : "bg-black text-white"
                } relative p-3 rounded-full w-10 h-10 flex items-center justify-center text-2xl ${
                  index !== data.length - 1 && "lineAfterNumber"
                }`}
              >
                {item.number}
              </span>
              <p>{item.paragraph}</p>
            </div>
          ))}
        </section>
        {/* left section */}
        <section
          ref={ref}
          className={` lg:w-[calc(40rem)] xl:min-w-[calc(660px)] flex justify-center items-center gap-1 lg:gap-5 relative mt-7 lg:mt-0 animated-left-hidden ${
            inView && "animated-come"
          } `}
        >
          {imgs.map((img, index) => (
            <Image
              className={`${index % 2 ? "animate-up-down" : "animate-down-up"} 
              w-14 sm:w-28
              `}
              key={index}
              src={img}
              alt=""
              width={5000}
              height={5000}
            />
          ))}
        </section>
      </section>
    </>
  );
}
