import {
  companiesLogo1,
  companiesLogo2,
  importImages,
} from "@/dataJson/DataOurPartners";
import Image from "next/image";

export default function OurPartners() {
  const imagesBar1 = importImages(1, 11, companiesLogo1);
  const imagesBar2 = importImages(12, 23, companiesLogo2);
  return (
    <section
      id="#partners"
      className="overflow-hidden py-20 relative h-[480px]"
    >
      <h4 className="title ">شركائنا</h4>
      {/* the first bar */}
      <section className="news-bar top-32">
        {imagesBar1.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              placeholder="blur"
                     src={item.image}
              alt=""
              width={100}
              height={100}
            />
            <p className="group-hover:block hidden shadow-lg absolute -top-10 left-1/2 -translate-x-1/2 text-gray-600 bg-slate-100 w-fit p-3 z-10 rounded-xl">
              {companiesLogo1[index]}
            </p>
          </div>
        ))}
      </section>
      {/* the second bar */}
      <section className="news-bar top-72">
        {imagesBar2.map((item, index) => (
          <div key={index} className="relative group">
            <Image
              placeholder="blur"
                     className="w-36 h-36 "
              src={item.image}
              alt=""
              width={100}
              height={100}
            />
            <p className="group-hover:block hidden shadow-lg absolute -top-10 left-1/2 -translate-x-1/2 text-gray-600 bg-slate-100 w-fit p-3 z-10 rounded-xl">
              {companiesLogo2[index]}
            </p>
          </div>
        ))}
      </section>
    </section>
  );
}
