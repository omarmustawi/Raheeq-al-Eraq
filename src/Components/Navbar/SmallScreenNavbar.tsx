"use client";
import { IoCloseSharp } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import Link from "next/link";
import React from "react";
import { useIsOpenContact } from "@/Contexts/IsOpenContact";
import { links } from "@/dataJson/DataFooter";
import { scrollToSection } from "@/Functions/functions";
import { BsArrowUpCircleFill } from "react-icons/bs";
import useScrollTopDetection from "@/Hooks/useScrollTopDetection";

export default function SmallScreenNavbar() {
  const { IsOpenContact, setIsOpenContact } = useIsOpenContact();
  const showScrollTop = useScrollTopDetection(100);

  return (
    <>
      <main className="flex justify-between items-center absolute top-2 sm:mx-7 left-0 w-full sm:w-[calc(100%-2*28px)] font-medium text-white bg-black/20 sm:text-xl z-30 rounded-3xl ">
        <Link
          href={"https://2h.ae/NIQs"}
          className="py-2 px-6 border-2 rounded-3xl   hover:border-yel hover:text-yel cursor-pointer "
        >
          طلب استشارة مجانية
        </Link>
        <span
          onClick={() => setIsOpenContact(!IsOpenContact)}
          className="hover:bg-yel rounded-2xl p-1 ml-6"
        >
          {IsOpenContact ? <IoCloseSharp size={30} /> : <TiThMenu size={30} />}
        </span>
      </main>
      <nav
        className={`absolute ${
          IsOpenContact ? "top-0 " : "-top-full"
        } duration-1000 left-0 bg-black/90 w-screen h-fit z-20 p-7 pt-[100px]`}
      >
        <ul className="flex flex-col items-center text-white text-2xl  gap-9 animate">
          {links.map((item, index) => (
            <li
              onClick={() => scrollToSection(item.id)}
              key={index}
              className={`relative group ${
                IsOpenContact && `animate pop delay-${index} `
              }   `}
            >
              <Link href="#home"> {item.link} </Link>
              <div className="line-animation"></div>
            </li>
          ))}
        </ul>
      </nav>
      {showScrollTop && (
        <BsArrowUpCircleFill
          size={30}
          className="rounded-full fixed bottom-10 left-10 text-yel cursor-pointer z-40"
          onClick={() => scrollToSection("#home")}
        />
      )}
    </>
  );
}
