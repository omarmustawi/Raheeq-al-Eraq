"use client";
import Image from "next/image";
import { IoIosArrowDropright, IoIosArrowDropleft } from "react-icons/io";
import React, { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProgressMobileStepper from "./ProgressMobileStepper";
import useCarouselLogic from "@/Hooks/useCarouselLogic";
import Link from "next/link";
import { scrollToSection } from "@/Functions/functions";
import PreloadImages from "@/PreloadImages/PreloadImages";

const HomePage = () => {
  const styleImage = [
    "bg-top",
    "bg-center",
    "bg-right xl:bg-bottom",
    "bg-left-top",
    "background-position",
    "background-position",
  ];
  const images = ["/img1.webp", "/img2.webp", "/img3.webp", "/img4.webp"];

  const [carouselItems, setCarouselItems] = useState<HTMLImageElement[]>([]);

  const { backgroundImage, isDisplayLine, updateBackgroundImage } =
    useCarouselLogic(images);

  const carouselRef = useRef<Carousel>(null);

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 3 },
    desktop: { breakpoint: { max: 3000, min: 768 }, items: 3 },
    tablet: { breakpoint: { max: 768, min: 640 }, items: 2 },
    mobile: { breakpoint: { max: 640, min: 0 }, items: 2 },
  };

  const nextImage = () => {
    const nextIndex =
      (images.indexOf(backgroundImage) + 1) % carouselItems.length;
    updateBackgroundImage(nextIndex);
  };

  const previousImage = () => {
    const previousIndex =
      (carouselItems.indexOf(backgroundImage) - 1 + carouselItems.length) %
      images.length;
    updateBackgroundImage(previousIndex);
  };

  const CustomNextArrow = () => (
    <IoIosArrowDropright
      size={60}
      className="cursor-pointer"
      aria-label="Next"
    />
  );

  const CustomPrevArrow = () => (
    <IoIosArrowDropleft
      size={60}
      className="cursor-pointer"
      aria-label="Previous"
    />
  );

  return (
    <>
      <PreloadImages images={images} onImagesLoaded={setCarouselItems} />
      <div
        style={{ textShadow: "2px 2px  9px black" }}
        className="font-El-Messiri  absolute bottom-[calc(100%-300px)] lg:bottom-32  left-1/2 -translate-x-1/2 lg:left-10 xl:left-[calc((100%-1100px)/2)] xl:w-[calc(100%-700px)]  lg:translate-x-0 z-10  text-white w-[calc(90%)] sm:w-[calc(453px)] lg:w-[calc(100%-700px)] max-w-[calc(400px)] "
      >
        <div
          style={{ fontFamily: "El Messiri" }}
          className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl  leading-10 font-semibold  "
        >
          لوجستيات
          <span className="relative">
            {" "}
            <small className="before-line"></small> سلسة
          </span>
          ، حلول عالمية
        </div>
        <div
          style={{ fontFamily: "El Messiri" }}
          className="text-xl  lg:leading-10 font-medium"
        >
          نقوم بعمل تخليص جمركي لكافة أنواع البضائع سواء البسيطة أو القيمة ونضمن
          لكم تخليص جميع الأوراق الجمركية بشكل قانوني و وقت قياسي.
        </div>
        <Link
          onClick={() => scrollToSection("#services")}
          style={{ textShadow: "0px 0px" }}
          href={"#services"}
          className="bg-yel hover:bg-yel/90 hover:text-white p-2 text-black rounded-3xl float-left "
        >
          تعرف على المزيد
        </Link>
      </div>

      <section
        id="#home"
        dir="ltr"
        className={`relative carouselSection  animateLine   ${
          styleImage[carouselItems.indexOf(backgroundImage)]
        } `}
        // style={{ backgroundImage: `url(${backgroundImage.src})` }}
      >
        <Image
          src={backgroundImage}
          alt="raheek al iraq"
          className="absolute bg-cover top-0 left-0 right-0 bottom-0 w-full h-full"
          width={6000}
          height={6000}
          priority={true}
        />
        {isDisplayLine && (
          <div className="absolute top-0 left-0 h-1 scalingLine "></div>
        )}

        <div className="relative mx-auto lg:mx-0">
          <div className="container-carousel">
            <Carousel
              arrows={false}
              responsive={responsive}
              autoPlay
              autoPlaySpeed={5000}
              infinite
              swipeable={false}
              draggable={false}
              shouldResetAutoplay={true}
              rewind={true}
              customRightArrow={<CustomNextArrow />}
              customLeftArrow={<CustomPrevArrow />}
              className="w-ful"
              ref={carouselRef}
            >
              {carouselItems.map((item, index) => (
                <div className={`container-img`} key={index}>
                  <Image
                    className={`${
                      carouselItems.indexOf(backgroundImage) === index &&
                      "border-2 border-white  "
                    } rounded-md shadow-3xl w-full h-5/6 object-cover
                  `}
                    src={item.src}
                    alt={`Raheek-AL-Iraq-${index + 1}`}
                    width={3000}
                    height={5000}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className="absolute bottom-0 right-0  w-full h-fit  flex justify-center items-center ">
            <div className="text-white flex justify-center items-center ">
              <IoIosArrowDropleft
                // size={60}
                onClick={() => {
                  previousImage();
                  carouselRef.current?.previous(0);
                }}
                className="cursor-pointer opacity-60  text-4xl lg:text-6xl"
                aria-label="Previous"
              />
              <IoIosArrowDropright
                // size={60}
                onClick={() => {
                  nextImage();
                  carouselRef.current?.next(1);
                }}
                className="cursor-pointer opacity-60 text-4xl lg:text-6xl"
                // eslint-disable-next-line jsx-a11y/aria-props
                aria-label="Next"
              />
            </div>

            <div className=" min-w-[calc((100%)-150px)]  md:min-w-[calc((100%)-86px-150px)] w-max relative ">
              <ProgressMobileStepper
                activeStep={images.indexOf(backgroundImage)}
              />
            </div>
            <div className="text-white text-4xl text-center lg:text-6xl  opacity-60 h-fit flex  justify-center">
              0{images.indexOf(backgroundImage) + 1}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
