import Link from 'next/link'
import React, { ReactElement, useState } from 'react'
import { motion } from "framer-motion"


interface Props {

}

export default function Navbar({ }: Props): ReactElement {
	const [navBarCollapse, setNavBarCollapse] = useState(false);
	const variants = {
		open: { opacity: 1, x: "200%" },
		closed: { opacity: 0, x: "-10%" },
	  }
	return (
		<header
			className="fixed z-10 flex items-center w-full h-16 pt-4 mb-4 bg-white border-b border-gray-200 shadow-xs header">
			<div className="flex justify-between w-10/12 mx-auto">
				<Link href="/">
					<div className="w-3/4">
						<img src="https://blog.dejibimbola.com.ng/_next/static/media/dejibimbola-logo.715f7623c319e03076cefdd56b5785e6.png"
							className="w-40 h-auto" alt="" />
					</div>
				</Link>
				<nav className="hidden md:flex md:items-center nav">
					<div className="text-right">
						<ul className="flex nav__links">
							<li className="mx-4 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
								<a target="_blank" href="https://blog.dejibimbola.com.ng">Blog</a>
							</li>
							<li className="mx-4 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
								<Link href="/portfolio">Portfolio</Link>
							</li>
							<li className="mx-4 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
								<Link href="/contact">Contact</Link>
							</li>
						</ul>
					</div>
				</nav>
				<div className="self-center justify-self-end nav__collapse md:hidden" onClick={() => setNavBarCollapse(!navBarCollapse)}>
					<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path
							d="M12 8C10.8954 8 10 7.10457 10 6C10 4.89543 10.8954 4 12 4C13.1046 4 14 4.89543 14 6C14 7.10457 13.1046 8 12 8Z"
							fill="black" />
						<path
							d="M12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14Z"
							fill="black" />
						<path
							d="M12 20C10.8954 20 10 19.1046 10 18C10 16.8954 10.8954 16 12 16C13.1046 16 14 16.8954 14 18C14 19.1046 13.1046 20 12 20Z"
							fill="black" />
					</svg>
				</div>

			</div>
			<motion.nav animate={navBarCollapse? "open" : "closed"} variants={variants} className="absolute w-4/12 px-10 py-8 mt-56 bg-white shadow nav md:hidden">
				<div className="text-right">
					<ul className="nav__links">
						<li className="mx-4 mb-5 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
							<a target="_blank" href="https://blog.dejibimbola.com.ng">Blog</a>
						</li>
						<li className="mx-4 mb-5 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
							<Link href="/portfolio">Portfolio</Link>
						</li>
						<li className="mx-4 mb-5 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
							<Link href="/contact">Contact</Link>
						</li>
					</ul>
				</div>
			</motion.nav>
		</header>
	)
}
