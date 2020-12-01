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
				<div className="w-full phone__bg">
					<svg viewBox="0 0 768 108" fill="none" xmlns="http://www.w3.org/2000/svg">
						<defs />
						<mask id="a" width="1440" height="171" x="0" y="0" maskUnits="userSpaceOnUse">
							<path fill="#fff" d="M0 0h1440v171H0z" />
						</mask>
						<g mask="url(#a)">
							<ellipse cx="387" cy="600" fill="#d69e2e" rx="501" ry="563" />
						</g>
					</svg>
				</div>
			</div>
		</div>
	)
}
