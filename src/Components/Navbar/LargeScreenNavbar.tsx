// import SendIcon from "@mui/icons-material/Send";
// import { Button } from "@mui/material";
import Link from "next/link";
import React from "react";
import { BsArrowUpCircleFill } from "react-icons/bs";
// import { useIsOpenContact } from "@/context/IsOpenContact";
import { links } from "@/dataJson/DataFooter";
import { scrollToSection } from "@/Functions/functions";
import useScrollTopDetection from "@/Hooks/useScrollTopDetection";

export default function LargeScreenNavbar() {
  const showScrollTop = useScrollTopDetection(100);
  return (
    <>
      <main className="flex  items-center absolute top-2 mx-7 left-0 w-[calc(100%-2*28px)] font-medium text-white bg-black/20 text-2xl z-20 rounded-3xl ">
        <Link
          href={"https://2h.ae/NIQs"}
          className="py-2 px-6 border-2 rounded-3xl   hover:border-yel hover:text-yel cursor-pointer "
        >
          طلب استشارة مجانية
        </Link>
        <nav className=" flex flex-grow justify-center">
          <ul className="flex  gap-9">
            {links.map((item, index) => (
              <li
                onClick={() => scrollToSection(item.id)}
                key={index}
                className="relative group"
              >
                <Link href="#home"> {item.link} </Link>
                <div className="line-animation"></div>
              </li>
            ))}
          </ul>
        </nav>
      </main>
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
