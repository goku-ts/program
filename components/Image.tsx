// components/ResponsiveImage.js
import React from "react";
import Image from "next/image";

const ResponsiveImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <div className={`relative w-full max-w-md mx-auto`}>
      <Image
        src={src}
        alt={alt}
        layout="responsive"
        width={16} // Aspect ratio width
        height={9} // Aspect ratio height
        className="rounded-lg"
      />
    </div>
  );
};

export default ResponsiveImage;
