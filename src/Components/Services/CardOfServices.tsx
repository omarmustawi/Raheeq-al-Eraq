import React from "react";
import { useInView } from "react-intersection-observer";

export default function CardOfServices({
  title,
  items,
}: {
  title: string;
  items: string[];
}): React.JSX.Element {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section
      ref={ref}
      className={`bg-[#F9F9F9]  lg:p-8 flex flex-col lg:flex-row justify-center items-center gap-3 my-4 py-3 lg:px-16  rounded-2xl  opacity-0  ${
        inView && `opacity-100 duration-[3s] `
      }  `}
    >
      <h6 className="lg:w-1/3 font-bold text-2xl ">{title}</h6>
      <ul className=" w-4/5 text-lg text-neutral-600 ">
        {items.map((item, index) => (
          <li
            key={index}
            className={`list-disc my-3`}
          >
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
