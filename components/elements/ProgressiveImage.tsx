import React from "react";
import useProgressiveImg from "../../hooks/useProgressiveImage";
import { Image } from "@chakra-ui/react";
interface Props {
  originalImageSrc: string;
  tinyImageSrc?: string;
  className?: string;
  alt?: string;
}

const ProgressiveImage = ({
  tinyImageSrc,
  originalImageSrc,
  className,
  alt,
}: Props) => {
  const [src, { blur }] = useProgressiveImg(tinyImageSrc, originalImageSrc);

  return (
    <Image
      alt={alt || "progressive-image"}
      src={src}
      style={{
        filter: blur ? "blur(20px)" : "none",
        transition: blur ? "none" : "filter 0.3s ease-out",
      }}
      className={className}
    />
  );
};

export default ProgressiveImage;
