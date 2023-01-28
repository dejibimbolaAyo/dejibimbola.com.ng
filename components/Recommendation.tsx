import React, { ReactElement } from 'react';
import Image from 'next/image';

interface Props {

}

export default function Recommendation({ }: Props): ReactElement {
	return (
		<div className="bg-gray-900">
			<div className="container w-10/12 py-12 mx-auto">
				<h1 className="py-4 text-2xl font-extrabold leading-tight text-center text-white sm:text-4xl md:leading-none">
					Recommendations
			</h1>
				<div className="flex h-full py-8 mx-auto overflow-x-scroll sm:justify-center xl:overflow-x-hidden">
					<div className="flex-col flex-shrink-0 p-4">
						<div className="max-w-xs px-8 py-4 text-center bg-white rounded-md recommendation__bubble">
							<h5 className="p-2 text-lg font-bold">Highly Skilled</h5>
							<p className="text-xs">Ayodeji is a real team player, always ready to help and has great technical
							skills.</p>
						</div>
						<div className="flex justify-center m-4">
							<div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
								<Image src="./assets/toluwalope_yussuff.jpg" alt="" className="object-cover w-16 h-auto" />
							</div>
							<div className="text-white">
								<h4 className="font-bold">Toluwalope Yussuff</h4>
								<p className="text-xs">Software Developer at ParallelScore</p>
							</div>
						</div>
					</div>
					<div className="flex-col flex-shrink-0 p-4">
						<div className="max-w-xs px-8 py-4 text-center bg-white rounded-md recommendation__bubble">
							<h5 className="p-2 text-lg font-bold">Outstanding</h5>
							<p className="text-xs">Working with Ayodeji for over 2 years now and the experience has contributed
							to my growth.
							Ayo is a passionate and proactive individual that pays strong attention to detail when he
							works. He is keen on collaboration and is quick-witted when it comes to problem-solving. He
							tries to create value on every task he works on and has an amazing eye for design.</p>
							<p className="text-xs font-bold">An outstanding individual!</p>
						</div>
						<div className="flex justify-center m-4">
							<div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
								<Image src="./assets/shalom_zebhor.jpg" alt="" className="object-cover w-16 h-auto" />
							</div>
							<div className="text-white">
								<h4 className="font-bold">Shalom Izebhor</h4>
								<p className="text-xs">Product design freelancer</p>
							</div>
						</div>
					</div>
					<div className="flex-col flex-shrink-0 p-4">
						<div className="max-w-xs px-8 py-4 text-center bg-white rounded-md recommendation__bubble">
							<h5 className="p-2 text-lg font-bold">Talented</h5>
							<p className="text-xs">One rarely come across real talents who stand out like Abimbola Ayodeji. I
							had the pleasure
							of working with him for two years at ParallelScore, collaborating on several project teams.
							Ayodeji’s ability to handle multiple projects was unlike any I’ve seen before and made a
							dramatic increase in the productivity level of our company. No matter how tense a meeting,
							Abimbola Ayodeji made sure everyone left with a smile. As a team member Abimbola Ayodeji
							earns my highest recommendation</p>
						</div>
						<div className="flex justify-center m-4">
							<div className="w-12 h-12 mr-4 overflow-hidden rounded-full">
								<Image src="./assets/moses_igbuku.jpg" alt="" className="object-cover w-16 h-auto" />
							</div>
							<div className="text-white">
								<h4 className="font-bold">Moses Igbuku</h4>
								<p className="text-xs">Senior Fullstack Nodejs Developer at Comyne</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
