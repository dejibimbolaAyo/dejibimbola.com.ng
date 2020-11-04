import Link from 'next/link'
import React, { ReactElement } from 'react'

interface Props {

}

export default function FunWorks({ }: Props): ReactElement {
	return (
		<div className="container w-10/12 p-10 mx-auto">
			<h1 className="py-4 text-2xl font-extrabold leading-tight text-center sm:text-4xl md:leading-none">Fun Stuff</h1>
			<div className="flex pt-8 pb-12 overflow-x-scroll sm:justify-center md:overflow-hidden">
				<div className="flex-col flex-shrink-0 m-4 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
					<div>
						<img src="./assets/1.png" alt="" className="w-56 h-auto" />
					</div>
				</div>
				<div className="flex-col flex-shrink-0 m-4 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
					<div>
						<img src="./assets/2.png" alt="" className="w-56 h-auto" />
					</div>
				</div>
				<div className="flex-col flex-shrink-0 m-4 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
					<div>
						<img src="./assets/3.png" alt="" className="w-56 h-auto" />
					</div>
				</div>
				<div className="flex-col flex-shrink-0 m-4 transition duration-300 ease-in-out shadow-lg hover:shadow-xl">
					<div>
						<img src="./assets/4.png" alt="" className="w-56 h-auto" />
					</div>
				</div>
			</div>
			<div className="p-16 text-sm font-bold text-right text-yellow-600">
				<Link href="portfolio">
					<div className="inline-flex">
						<span>See more</span>
						<svg xmlns="http://www.w3.org/2000/svg" className="self-center w-8 h-4" fill="none" viewBox="0 0 24 24">
							<defs />
							<path fill="#d69e2e"
								d="M17.92 11.62c-.0476-.1228-.119-.2349-.21-.33l-5-5c-.0932-.09324-.2039-.1672-.3258-.21766-.1218-.05046-.2523-.07643-.3842-.07643-.2663 0-.5217.10578-.71.29409-.0932.09324-.1672.20393-.2177.32575-.0504.12182-.0764.25239-.0764.38425 0 .2663.1058.52169.2941.71l3.3 3.29H7c-.26522 0-.51957.1054-.70711.2929C6.10536 11.4804 6 11.7348 6 12c0 .2652.10536.5196.29289.7071C6.48043 12.8946 6.73478 13 7 13h7.59l-3.3 3.29c-.0937.093-.1681.2036-.2189.3254-.0508.1219-.0769.2526-.0769.3846s.0261.2627.0769.3846c.0508.1218.1252.2324.2189.3254.093.0937.2036.1681.3254.2189.1219.0508.2526.0769.3846.0769s.2627-.0261.3846-.0769c.1218-.0508.2324-.1252.3254-.2189l5-5c.091-.0951.1624-.2073.21-.33.1-.2435.1-.5165 0-.76z" />
						</svg>
					</div>
				</Link>
			</div>
		</div>
	)
}
