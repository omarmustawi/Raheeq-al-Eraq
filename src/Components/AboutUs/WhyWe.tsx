import React from "react";
import { features } from "@/dataJson/WhyWeData";
import CardFeature from "./CardFeature";
import { useInView } from "react-intersection-observer";
export default function WhyWe() {
  const [ref, inView] = useInView({
    triggerOnce: false,
  });
  return (
    <section className={`container-mx`}>
      <h4 className="titleSection "> لماذا رحيق العراق ؟ </h4>
      <div
        ref={ref}
        className={`flex flex-wrap lg:flex-nowrap justify-center items-center mx-5 gap-7 my-20 lg:my-40`}
      >
        {features.map(
          (
            feature: { icon: string; title: string; paragraph: string },
            index: number
          ) => (
            <CardFeature
              key={index}
              icon={feature.icon}
              title={feature.title}
              paragraph={feature.paragraph}
              index={index}
              inView={inView}
            />
          )
        )}
      </div>
    </section>
  );
}
