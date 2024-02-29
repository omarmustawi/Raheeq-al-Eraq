import LoaderSpinner from "@/Components/LoaderSpinner/LoaderSpinner";
import Head from "next/head";
import React, { useEffect, useState } from "react";

interface PreloadImagesProp {
  images: string[];
  onImagesLoaded: (preloadimages: HTMLImageElement[]) => void;
}

const PreloadImages: React.FC<PreloadImagesProp> = ({
  images,
  onImagesLoaded,
}) => {
  const [imagesLoading, setImagesLoading] = useState(true);
  const [preloadedImages, setPreloadedImages] = useState<HTMLImageElement[]>(
    []
  );

  useEffect(() => {
    const loadImage = (src: string) => {
      return new Promise<HTMLImageElement>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve(img);
        img.onerror = reject;
      });
    };
    // ===========================

    Promise.all(images.map(loadImage))
      .then((loadedImages) => {
        setPreloadedImages(loadedImages);
        setImagesLoading(false);
        onImagesLoaded(loadedImages);
      })
      .catch((error) => console.error("Error loading images:", error));      
  }, []);

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
};

export default PreloadImages;
