import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'

type Props = {
	children?: ReactNode
	title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
	<div>
		<Head>
			<title>{title}</title>
			<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
			<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
			<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
			<link
				href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Manrope:wght@300;700;800&display=swap"
				rel="stylesheet" />
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
		</Head>
		<body className="box-border m-0 antialiased">
			<Navbar></Navbar>
			{children}
			<Footer></Footer>
		</body>
	</div>
)

export default Layout
