import React from "react";
import { aboutUsImg, data } from "@/dataJson/DataAboutUs";
import WhyWe from "./WhyWe";
import SwiperCard from "./SwiperCard";

export default function AboutUs() {
  return (
    <>
      <section
        id={"#about-us"}
        className="w-screen flex flex-col lg:flex-row about-flex-row-for-min-900 justify-between items-center gap-9 py-10 px-7 md:px-10 lg:px-20  overflow-hidden"
      >
        {/* right section */}
        <section className={"child-one "}>
          <h4 className="title text-start"> {data.title1} </h4>
          <h4 className="text-xl lg:text-4xl my-5"> {data.title2} </h4>
          <p className="lg:text-xl text-justify ">{data.paragraph}</p>
        </section>
        {/* left section */}
        <section className="w-[calc(300px)] h-[calc(400px)] my-0 ">
          <div className="relative m-auto flex items-center  w-full h-full">
            <SwiperCard imgs={aboutUsImg} />
          </div>
        </section>
      </section>
      <WhyWe />
    </>
  );
}
