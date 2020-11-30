import React, { ReactElement } from 'react'
import Link from 'next/link'
interface Props {

}

export default function Footer({ }: Props): ReactElement {
	return (
		<div className="flex justify-center pt-12 pb-2 bg-gray-900">
			<div className="container flex-col justify-center w-11/12">
				<div className="sm:flex">
					<div className="relative hidden -ml-64 opacity-10 sm:h-auto sm:w-full sm:block">
						<img className="" src="./assets/dejibimbola_lg.png" alt="" />
					</div>
					<div className="p-4 sm:w-2/4">
						<div className="flex justify-around text-white">
							<div>
								<h2 className="mb-2 text-2xl">Navigation</h2>
								<ul>
									<li className="py-1 text-xs transition duration-300 ease-in-out hover:text-yellow-600">
										<a target="_blank" href="https://blog.dejibimbola.com.ng">Blog</a>
									</li>
									<li className="py-1 text-xs transition duration-300 ease-in-out hover:text-yellow-600">
										<Link href="/portfolio">Portfolio</Link>

									</li>
									<li className="py-1 text-xs transition duration-300 ease-in-out hover:text-yellow-600">
										<Link href="/contact">Contact</Link>

									</li>
								</ul>
							</div>
							<div>
								<h2 className="mb-2 text-2xl">Links</h2>
								<ul>
									<li className="py-1 text-xs transition duration-300 ease-in-out hover:text-yellow-600">
										<a target="_blank" href="https://github.com/dejibimbolaAyo">GitHub</a>
									</li>
									<li className="py-1 text-xs transition duration-300 ease-in-out hover:text-yellow-600">
										<a target="_blank" href="https://linkedin.com/in/dejibimbola">LinkedIn</a>
									</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="flex-col items-center text-center sm:flex sm:justify-between">
					<div className="flex justify-center p-4">
						<div className="mx-2">
							<a target="_blank" href="https://github.com/dejibimbolaAyo">
								<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M24.0432 0.179932C10.8147 0.179932 0.0876465 11.0878 0.0876465 24.5445C0.0876465 35.3096 6.95165 44.4426 16.4699 47.6643C17.6672 47.8899 18.1067 47.1358 18.1067 46.4922C18.1067 45.9112 18.0845 43.9919 18.0742 41.956C11.4097 43.4299 10.0034 39.0812 10.0034 39.0812C8.9137 36.265 7.34358 35.5161 7.34358 35.5161C5.17009 34.0039 7.50742 34.035 7.50742 34.035C9.91297 34.2065 11.1796 36.5458 11.1796 36.5458C13.3162 40.2707 16.7837 39.1938 18.1507 38.5712C18.3657 36.9969 18.9866 35.9212 19.6716 35.3132C14.3508 34.6971 8.7574 32.6079 8.7574 23.2719C8.7574 20.6118 9.6932 18.4383 11.2256 16.732C10.9769 16.1179 10.1569 13.6402 11.4577 10.2841C11.4577 10.2841 13.4693 9.62928 18.0472 12.7816C19.9581 12.2418 22.0074 11.971 24.0432 11.9618C26.0791 11.971 28.13 12.2418 30.0444 12.7816C34.6167 9.62928 36.6256 10.2841 36.6256 10.2841C37.9295 13.6402 37.1091 16.1179 36.8604 16.732C38.3964 18.4383 39.3259 20.6118 39.3259 23.2719C39.3259 32.6301 33.7218 34.6906 28.3874 35.2938C29.2467 36.0499 30.0123 37.5327 30.0123 39.8059C30.0123 43.0655 29.9845 45.6893 29.9845 46.4922C29.9845 47.1406 30.4157 47.9003 31.63 47.6611C41.1431 44.4357 47.9984 35.3059 47.9984 24.5445C47.9984 11.0878 37.273 0.179932 24.0432 0.179932Z"
										fill="white" />
								</svg>
							</a>
						</div>
						<div className="mx-2">
							<a target="_blank" href="https://linkedin.com/in/dejibimbola">
								<svg width="16" height="16" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" clipRule="evenodd"
										d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM11.5216 19.8778H16.9605V36.2196H11.5216V19.8778ZM17.3188 14.8227C17.2835 13.2204 16.1377 12 14.277 12C12.4164 12 11.2 13.2204 11.2 14.8227C11.2 16.3918 12.3805 17.6473 14.2064 17.6473H14.2412C16.1377 17.6473 17.3188 16.3918 17.3188 14.8227ZM30.3131 19.4941C33.8922 19.4941 36.5754 21.8303 36.5754 26.8497L36.5752 36.2196H31.1365V27.4767C31.1365 25.2807 30.3494 23.7822 28.3805 23.7822C26.8779 23.7822 25.9829 24.7924 25.5898 25.7682C25.446 26.1178 25.4107 26.605 25.4107 27.0934V36.22H19.9711C19.9711 36.22 20.0428 21.4117 19.9711 19.8783H25.4107V22.1929C26.1325 21.0802 27.4254 19.4941 30.3131 19.4941Z"
										fill="white" />
								</svg>
							</a>
						</div>

					</div>
					<p className="text-xs text-gray-500">&copy; 2020. dejibimbola. All rights reserved.</p>
				</div>
			</div>
		</div>
	)
}
