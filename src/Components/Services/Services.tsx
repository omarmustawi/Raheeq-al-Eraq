import React from "react";
import services from "@/dataJson/Services.json";
import CardOfServices from "./CardOfServices";

export default function Services() {
  return (
    <section id="#services" className="container-mx">
      <h4 className="titleSection lg:mb-16"> خـــدمــــــاتـــنــــــــا </h4>
      <div className="lg:mx-32">
        {services.data.map(
          (
            service: { title: string; items: string[] },
            index: React.Key | null | undefined
          ): React.JSX.Element => (
            <CardOfServices
              key={index}
              title={service.title}
              items={service.items}
    
            />
          )
        )}
      </div>
    </section>
  );
}
