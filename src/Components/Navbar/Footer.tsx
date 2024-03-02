/* eslint-disable react/jsx-key */
"use client";
import { IoSend } from "react-icons/io5";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";
import {
  links,
  branches,
  socialMediaAccounts,
  iconComponents,
} from "@/dataJson/DataFooter";
import logo from "/public/logo.png";
import ticktok from "/public/letterTicktok.png";
import LoaderSpinner from "../LoaderSpinner/LoaderSpinner";
import { scrollToSection } from "@/Functions/functions";

export default function Footer() {
  // Define the type for socialMediaAccounts
  type SocialMediaAccount = (typeof socialMediaAccounts)[number];
  const [number, setNumber] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const success = () => toast.success("تم إرسال الرسالة بنجاح");
  const error = (msg: string) => toast.error(msg);

  const handleSubmit = async (e: any) => {
    setIsLoading(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(number),
      });

      const data = await response.json();

      if (data.success) {
        setIsLoading(false);
        setNumber("");
        success();
      } else {
        setIsLoading(false);
        error("لم يتم إرسال الرسالة  حدث خطأ ");
      }
    } catch (error) {
      console.error(error);
      setIsLoading(false);
    }
  };

  return (
    <>
      {isLoading && <LoaderSpinner />}
      <Toaster toastOptions={{ duration: 3000 }} />
      <nav className="text-white  bg-black md:text-xl  py-10 px-5   md:leading-10">
        <footer className="  flex flex-col lg:flex-row items-center gap-4">
          {/* The right section */}
          <section className="md:p-5 h-fit lg:border-l-4 border-yel w-fit lg:w-[333px]">
            <div>
              <p className="my-4"> لطفا أدخل رقم هاتفك للتواصل معك... </p>
              <form className="flex items-center gap-2">
                <IoSend
                  onClick={handleSubmit}
                  size={30}
                  className="bg-yel p-2 h-10 w-10 rounded-s-xl cursor-pointer"
                />
                <input
                  className="bg-yel p-2 rounded-e-xl outline-none placeholder:text-white h-10"
                  placeholder="ادخل رقمك"
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </form>
            </div>
            <div>
              <p className="my-8"> أو يمكنك التواصل معنا عبر : </p>
              <ul className="flex gap-2 md:gap-4">
                {socialMediaAccounts.map(
                  (account: SocialMediaAccount, index) => {
                    const IconComponent = iconComponents[account.name]; // Get the corresponding React component
                    return (
                      <Link
                        key={index}
                        href={account.link}
                        className={`even:bg-yel odd:bg-[#FFFFFF]/50 relative  h-28 w-10 p-2 rounded-2xl flex  ${
                          index % 2 ? "animate-up-down" : "animate-down-up"
                        }`}
                        style={{
                          animationDuration: "8s",
                        }}
                      >
                        <li className=" relative  h-full w-full p-2 rounded-2xl flex">
                          <IconComponent
                            size={30}
                            className={`${
                              index % 2 ? " top-0" : "bottom-0"
                            } absolute right-1/2 translate-x-1/2`}
                          />
                        </li>
                      </Link>
                    );
                  }
                )}
                {/*Note Note : Here  You Have To Add link tick tok handly*/}
                <Link
                  href={
                    "https://www.tiktok.com/@rahik.aliraq?_t=8k2co8oeXXa&_r=1"
                  } // add link tick tok here
                  className={`bg-[#FFFFFF]/50 relative  h-28 w-10 p-2 rounded-2xl flex 
                  animate-down-up 
                  `}
                  style={{
                    animationDuration: "8s",
                  }}
                >
                  <li className="relative h-full w-full p-1 rounded-2xl flex">
                    <Image
                      placeholder="blur"
                      blurDataURL="/public/logo.png"
                      className=" absolute  bottom-2 right-1/2 translate-x-1/2 rounded-full w-[25px] h-[25px]"
                      width={40}
                      height={40}
                      src={ticktok}
                      alt="ticktok"
                    />
                  </li>
                </Link>
              </ul>
            </div>
          </section>
          {/* The left section */}
          <section className=" flex flex-col md:flex-row gap-9 lg:gap-0 justify-around items-center w-full lg:w-[calc(100%-333px)] ">
            {/* start branches */}
            <ul className="whitespace-break-spaces">
              {branches.map((branch, index) => (
                <li key={index} className="my-5 lg:w-[95%] ">
                  <span>{branch.nameBranch} </span>
                  <span>{branch.address} </span>
                </li>
              ))}
            </ul>
            {/* end branches */}

            <div className="flex gap-7 lg:gap-2 w-full md:w-fit justify-center items-center  ">
              {/* start Navigate links */}
              <ul>
                {links.map((item, index) => (
                  <li
                    key={index}
                    onClick={() => scrollToSection(item.id)}
                    className="w-fit flex whitespace-nowrap my-3 hover:text-yel hover:translate-x-3 transition-all duration-1000 ease-in-out "
                  >
                    <Link href={item.id} className="w-full h-8">
                      {item.link}
                    </Link>
                  </li>
                ))}
              </ul>
              {/* end Navigate links */}

              {/* start logo */}
              <Image
                placeholder="blur"
                blurDataURL="/public/logo.png"
                className="w-36 lg:w-28 xl:w-40 h-fit"
                src={logo}
                alt="Raheek-al-iraq-logo"
              />
              {/* end logo */}
            </div>
          </section>
        </footer>
        <p className="relative text-gray-400 text-center ">
          {" "}
          جميع الحقوق محفوظة لشركة{" "}
          <span className="text-yel"> رحيق العراق الذهبية </span> 2024{" "}
        </p>
      </nav>
    </>
  );
}
