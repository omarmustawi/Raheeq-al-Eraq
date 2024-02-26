import Image from "next/image";
import React from "react";
import icon1 from "@/Images/BorderCrossings/icon1.jpg";
import icon2 from "@/Images/BorderCrossings/icon2.jpg";
import icon3 from "@/Images/BorderCrossings/icon3.jpg";
import mapIraq from "@/Images/BorderCrossings/mapIraq.jpg";
import { crossings } from "@/dataJson/DataBorderCrossings";
import { useInView } from "react-intersection-observer";

export default function BorderCrossings() {
  const icons = [icon1, icon2, icon3];
  const [ref, inView] = useInView({
    triggerOnce: false,
  });

  return (
    <section
      id="#border-crossings"
      className="py-40 lg:px-10 flex flex-col md:flex-row justify-around items-center overflow-x-hidden"
    >
      {/* right section  */}
      <section
        ref={ref}
        className={`flex flex-col md:flex-row items-center gap-4 animated-right-hidden ${inView && "animated-come"} `}
      >
        <div className="flex  flex-row md:flex-col gap-4 mx-10">
          {icons.map((img, index) => (
            <Image key={index} src={img} alt="" width={70} height={70} />
          ))}
        </div>

        <div ref={ref} className="flex flex-col gap-3">
          {crossings.map((crossing, index) => (
            <div
              key={index}
              className={`flex gap-4 ${
                inView && ` animate pop delay-${index}`
              } `}
            >
              <span
                style={{ backgroundColor: `${crossing.color}` }}
                className={`w-7 h-7 rounded-md`}
              ></span>
              <h4 className="text-xl">{crossing.name}</h4>
            </div>
          ))}
        </div>
      </section>
      {/* left section */}
      <section ref={ref} className={`animated-left-hidden ${inView && "animated-come"}`}>
        <Image src={mapIraq} alt="" width={400} height={400} />
      </section>
    </section>
  );
}
