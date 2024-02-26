"use client";
import Image from "next/image";
import { images } from "@/dataJson/DataTeam";
import React, { Suspense, useEffect, useState } from "react";
import Skeleton from "../LoaderSpinner/Skeleton";

export default function Team() {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const nextIndex = (currentImageIndex + 1) % images.length;
      setCurrentImageIndex(nextIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex]);

  return (
    <section
      id="#team"
      className=" flex flex-col justify-around items-center md:flex-row  bg-[#D9D9D9] relative p-5 gap-7 lg:gap-10"
    >
      {/* section right */}
      <div className="h-fit grid-repeat justify-center items-center">
        <Image
          src={images[currentImageIndex].src}
          alt="raheek-iraq-team"
          className="rounded-full border-4 border-yel img-current w-full h-full "
        />
        {images.map((img, index) => (
          <Suspense key={index} fallback={<Skeleton />}>
            <Image
              className={`rounded-full w-full h-full ${img.style}`}
              src={img.src}
              alt={`raheek-iraq-team-${index}`}
            />
          </Suspense>
        ))}
      <Skeleton />
      </div>

      {/* section right */}
      <div className=" flex flex-col gap-2 lg:gap-4 items-center justify-center min-w-[300px] max-w-[450px] text-center">
        <h4 className="font-extrabold text-xl md:text-3xl lg:text-5xl text-yel ">
          {images[currentImageIndex].name}
        </h4>
        <span className="text-dark-blue text-xl md:text-2xl lg:text-4xl">
          {images[currentImageIndex].role}
        </span>
        <p className=" text-black-sp lg:text-xl">
          {images[currentImageIndex].paragraph}
        </p>
      </div>
    </section>
  );
}
