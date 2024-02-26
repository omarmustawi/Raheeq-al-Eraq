
import Head from "next/head";
import React, { useEffect, useState } from "react";
export default function PreloadImages({ images }: { images: string[] }) {
  const [imagesLoading, setImagesLoading] = useState(false);
  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };

    Promise.all(images.map((src) => loadImage(src)))
      .then(() => setImagesLoading(true))
      .catch((error) => console.error("Error loading images:", error));
  }, [images]);
  console.log(" imagesLoading" , imagesLoading);
  
  return (
    <div>
      <Head>
        {images.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
    </div>
  );
}
