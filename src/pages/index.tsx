import Team from "@/Components/Team/Team";
import OurPartners from "@/Components/OurPartners/OurPartners";
import AboutUs from "@/Components/AboutUs/AboutUs";
import OurAims from "@/Components/OurAims/OurAims";
import Services from "@/Components/Services/Services";
import BorderCrossings from "@/Components/BorderCrossings/BorderCrossings";
import Footer from "@/Components/Navbar/Footer";
import HomePage from "@/Components/HomePage";
import { useWindowSize } from "@/Contexts/WindowWidthContext";
import LargeScreenNavbar from "@/Components/Navbar/LargeScreenNavbar";
import SmallScreenNavbar from "@/Components/Navbar/SmallScreenNavbar";
import { useEffect, useState } from "react";
import LoaderSpinner from "@/Components/LoaderSpinner/LoaderSpinner";
import { NextSeo } from "next-seo";
import PreloadImages from "@/PreloadImages/PreloadImages";

export default function Home() {
  const { width } = useWindowSize();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window) {
      setLoading(false);
    }
  }, []);
  // if (loading) {
  //   return <LoaderSpinner />;
  // }
  const images = [
    "/img1.webp",
    "/img2.webp",
    "/img3.webp",
    "/img4.webp",
  ];  
  return (
    <>
      {loading ? (
        <LoaderSpinner /> 
        ) : (
          <>
          <NextSeo
            title="شركة رحيق العراق الذهبية للنقل والتخليص الجمركي"
            description="تعمل الشركة على تفادي المخاطر وعدم الوقوع تحت طائلة الغرامات. تقوم الشركة بكافة الأمور اللازمة في التخليص الجمركي للاستيراد. نقوم بعمل تخليص جمركي لكافة أنواع البضائع سواء البسيطة أو القيمة."
            openGraph={{
              type: "website",
              url: "https://raheekiq.com", // here url for website
              title: "Raheek Al Iraq Company",
              description:
                "تعمل الشركة على تفادي المخاطر وعدم الوقوع تحت طائلة الغرامات. تقوم الشركة بكافة الأمور اللازمة في التخليص الجمركي للاستيراد. نقوم بعمل تخليص جمركي لكافة أنواع البضائع سواء البسيطة أو القيمة.",
              // images: [
              //   {
              //     url: "https://example.com/og-image.jpg",
              //     width: 800,
              //     height: 600,
              //     alt: "شركة رحيق العراق الذهبية",
              //   },
              // ],
              site_name: "شركة رحيق العراق الذهبية",
            }}
          />
          <main>
            {width > 1160 ? <LargeScreenNavbar /> : <SmallScreenNavbar />}
            <PreloadImages images={images} />
            <HomePage />
            <AboutUs />
            <OurAims />
            <Services />
            <BorderCrossings />
            <Team />
            <OurPartners />
            <Footer />
          </main>
        </>
      )}
    </>
  );
}
