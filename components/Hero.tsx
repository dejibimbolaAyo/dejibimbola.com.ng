import React, { ReactElement } from 'react'
import ProgressiveImage from "../components/elements/ProgressiveImage";

interface Props {

}

export default function Hero({ }: Props): ReactElement {
	return (
		<div className="flex-col pt-56">
			<div className="container w-10/12 pt-4 pb-4 mx-auto sm:pt-16">
				<div className="flex-col items-center w-full text-center">
					<h5 className="font-serif text-base font-semibold leading-3 tracking-widest uppercase">Software Engineer
				</h5>
					<h1 className="font-sans text-3xl font-extrabold whitespace-no-wrap sm:text-4xl md:text-5xl">Abimbola
					Ayodeji
				</h1>
					<h5 className="font-serif text-xs font-black tracking-widest sm:text-lg">NODE.JS | REACT.JS | TYPESCRIPT |
					JAVASCRIPT
				</h5>
				</div>
			</div>
			<div className="flex-col items-center justify-center max-w-6xl mx-auto phone--container">
				<div className="phone">
					{/* <img src="assets/phoneMockup@1.5x.png" className="w-64 h-auto mx-auto" alt="" /> */}
					<ProgressiveImage tinyImageSrc="assets/tiny_phoneMockup@1.5x.png" originalImageSrc="assets/phoneMockup@1.5x.png" className="w-64 h-auto mx-auto"/>
				</div>
				<div className="w-full phone__bg"></div>
			</div>
		</div>
	)
}
