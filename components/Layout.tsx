import React, { ReactNode } from 'react'
import Head from 'next/head'
import Footer from './Footer'
import Navbar from './Navbar'
import { ReactElement } from 'react'

type Props = {
	children?: ReactNode
	title?: string
}

export default function Layout({ children, title = 'This is the default title' }: Props): ReactElement {
	return (
		<div>
			<Head >
				<title>{title}</title>
				<meta name="twitter:card" content="summary_large_image" />
				<meta name="twitter:site" content="@dejibimbola" />
				<meta name="twitter:creator" content="@dejibimbola" />
				<meta name="twitter:title" content="Dejibimbola" />
				<meta name="twitter:description" content="Dejibimbola's works as a Software Engineer" />
				<meta name="twitter:image" content={`https://www.dejibimbola.com.ng/assets/dejibimbola-mark.png`} />
				<meta property="og:url" content="https://www.dejibimbola.com.ng" />
				<meta property="og:type" content="article" />
				<meta property="og:title" content="Dejibimbola" />
				<meta property="og:description" content="Deibimbola's works" />
				<meta property="og:image" content={`https://www.dejibimbola.com.ng/assets/dejibimbola-mark.png`} />
				<meta name="description" content="Abimbola Ayodeji's work" />
				<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
				<link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
				<link
					href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;900&family=Manrope:wght@300;700;800&display=swap"
					rel="stylesheet" />
				<meta charSet="utf-8" />
				<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			</Head >
			<div className="box-border min-h-screen m-0 antialiased">
				<div>
					<Navbar></Navbar>
					{children}
					<Footer></Footer>
				</div>
			</div>
		</div >
	)
}
