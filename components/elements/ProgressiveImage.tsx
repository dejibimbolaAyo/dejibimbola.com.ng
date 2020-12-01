import React from "react";
import useProgressiveImg from "../../hooks/useProgressiveImage";

const ProgressiveImage = ({tinyImageSrc, originalImageSrc, className}: any) => {
	console.log(tinyImageSrc, originalImageSrc, className)
	const [src, { blur }] = useProgressiveImg(
		tinyImageSrc,
		originalImageSrc
	);

	return (
		<img src={src} style={{ filter: blur ? "blur(20px)" : "none", transition: blur ? "none" : "filter 0.3s ease-out"  }} className={className} />
	)
}

export default ProgressiveImage;
