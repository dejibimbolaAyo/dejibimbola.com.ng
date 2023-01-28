import React from "react";
import Image from "next/image";

import useProgressiveImg from "../../hooks/useProgressiveImage";

const ProgressiveImage = ({tinyImageSrc, originalImageSrc, className}: any) => {
	console.log(tinyImageSrc, originalImageSrc, className)
	const [src, { blur }] = useProgressiveImg(
		tinyImageSrc,
		originalImageSrc
	);

	return (
		<Image src={src} style={{ filter: blur ? "blur(20px)" : "none", transition: blur ? "none" : "filter 0.3s ease-out"  }} alt="progressive-blur" className={className} />
	)
}

export default ProgressiveImage;
