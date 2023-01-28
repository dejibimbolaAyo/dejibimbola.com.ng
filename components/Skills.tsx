import React, { ReactElement } from 'react';
import Image from 'next/image';

interface Props {

}

export default function Skills({ }: Props): ReactElement {
	return (
		<div className="container w-10/12 h-full pb-8 mx-auto">
			<h1 className="text-2xl font-extrabold text-center sm:text-4xl">
				Core Skills
		</h1>
			<div className="m-4">
				<div className="md:flex md:justify-center skills">
					<div className="flex justify-center">
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/node.png" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/aws_lambda.png" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/firestore.png" alt="" />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/html.png" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/javascript.png" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/typescript.png" alt="" />
							</div>
						</div>
					</div>
					<div className="flex justify-center">
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/react.svg" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/mongodb-logo.png" alt="" />
							</div>
						</div>
						<div className="flex-col items-center justify-center m-8 skill__badge">
							<div className="w-16 mx-auto">
								<Image src="./assets/digital_ocean.png" alt="" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
