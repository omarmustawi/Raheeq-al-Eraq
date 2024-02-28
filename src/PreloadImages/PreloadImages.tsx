import LoaderSpinner from "@/Components/LoaderSpinner/LoaderSpinner";
import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function PreloadImages({ images }: { images: string[] }) {
  const [imagesLoading, setImagesLoading] = useState(true);
  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = resolve;
        img.onerror = reject;
      });
    };
    // ===========================

    Promise.all(images.map((src) => loadImage(src)))
      .then(() => {
        setImagesLoading(false);
      })
      .catch((error) => console.error("Error loading images:", error));
  }, [images]);

  return (
    <div>
      <Head>
        {images.map((src, index) => (
          <link key={index} rel="preload" href={src} as="image" />
        ))}
      </Head>
      {imagesLoading && <LoaderSpinner />}
    </div>
  );
}
