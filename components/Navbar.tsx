import Link from 'next/link'
import useOnclickOutside from "react-cool-onclickoutside";
import React, { ReactElement, useState } from 'react'
import { motion } from "framer-motion"


type Props = {

}

export default function Navbar({ }: Props): ReactElement {
	const [navBarCollapse, setNavBarCollapse] = useState(false);

	const variants = {
		open: { opacity: 1, x: "200%" },
		closed: { opacity: 0, x: "-10%" },
	}

	const toggleNavbar = (state: boolean) => {
		setNavBarCollapse(state)
	}

	const ref = useOnclickOutside(() => {
		toggleNavbar(false);
	}, { disabled: false });

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
								<Link href="/">Home</Link>
							</li>
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
				{!navBarCollapse && <div className="self-center justify-self-end nav__collapse md:hidden" onClick={() => toggleNavbar(true)} onTouchStart={() => toggleNavbar(true)}>
					<motion.svg whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M3 6C3 5.44772 3.44772 5 4 5H20C20.5523 5 21 5.44772 21 6C21 6.55228 20.5523 7 20 7H4C3.44772 7 3 6.55228 3 6Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M3 12C3 11.4477 3.44772 11 4 11H20C20.5523 11 21 11.4477 21 12C21 12.5523 20.5523 13 20 13H4C3.44772 13 3 12.5523 3 12Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M3 18C3 17.4477 3.44772 17 4 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H4C3.44772 19 3 18.5523 3 18Z" fill="black" />
					</motion.svg>
				</div>}
				{navBarCollapse && <div className="self-center justify-self-end nav__collapse md:hidden" onClick={() => toggleNavbar(false)} ref={ref}>
					<motion.svg animate={{ scale: [1, 2, 2, 1, 1], rotate: [0, 0, 270, 270, 0] }} whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} transition={{ ease: "easeOut", duration: 0.5 }} width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path fillRule="evenodd" clipRule="evenodd" d="M6.29289 6.29289C5.90237 6.68342 5.90237 7.31658 6.29289 7.70711L16.2929 17.7071C16.6834 18.0976 17.3166 18.0976 17.7071 17.7071C18.0976 17.3166 18.0976 16.6834 17.7071 16.2929L7.70711 6.29289C7.31658 5.90237 6.68342 5.90237 6.29289 6.29289Z" fill="black" />
						<path fillRule="evenodd" clipRule="evenodd" d="M17.7071 6.29289C18.0976 6.68342 18.0976 7.31658 17.7071 7.70711L7.70711 17.7071C7.31658 18.0976 6.68342 18.0976 6.29289 17.7071C5.90237 17.3166 5.90237 16.6834 6.29289 16.2929L16.2929 6.29289C16.6834 5.90237 17.3166 5.90237 17.7071 6.29289Z" fill="black" />
					</motion.svg>
				</div>}

			</div>
			{navBarCollapse && <motion.nav animate={navBarCollapse ? "open" : "closed"} variants={variants} ref={ref} className="absolute z-0 w-4/12 px-10 py-8 mt-56 bg-white shadow nav md:hidden">
				<div className="text-right">
					<ul className="nav__links">
						<li className="mx-4 mb-5 font-sans text-sm font-bold transition duration-300 ease-in-out hover:text-yellow-600">
							<Link href="/">Home</Link>
						</li>
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
			</motion.nav>}
		</header>
	)
}
