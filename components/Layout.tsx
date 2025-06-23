import React, { ReactNode, ReactElement } from "react";
import Head from "next/head";
import { Manrope } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
};

const manrope = Manrope({
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export default function Layout({
  children,
  title = "Ayodeji Abimbola | Deji Abimbola | Dejibimbola | Best Software Engineers in Nigeria",
  description = "Ayodeji (Deji) Abimbola - Award-winning software engineer, entrepreneur, and technical leader in Nigeria. Explore my portfolio, projects, and impact in the tech industry.",
  keywords = "Ayodeji Abimbola, Deji Abimbola, Dejibimbola, Best Software Engineers in Nigeria, Nigerian Software Engineer, Tech Entrepreneur, Software Portfolio, Lagos, Africa, CTO, Full Stack, AI Engineer",
  ogImage = "https://dejibimbola.com.ng/assets/dejibimbola_lg.png",
}: Readonly<Props>): ReactElement {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Ayodeji Abimbola" />
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://dejibimbola.com.ng" />
        <meta property="og:image" content={ogImage} />
        <meta property="og:site_name" content="Deji Abimbola Portfolio" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dejibimbola" />
        <meta name="twitter:creator" content="@dejibimbola" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />

        {/* Canonical */}
        <link rel="canonical" href="https://dejibimbola.com.ng" />

        {/* PWA and Mobile */}
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#c98a06" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Deji Abimbola" />
        <meta name="application-name" content="Deji Abimbola Portfolio" />
        <meta name="msapplication-TileColor" content="#c98a06" />

        {/* Favicons */}
        <link rel="apple-touch-icon" href="/favicon/apple-touch-icon.png" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#c98a06"
        />

        {/* Viewport and Charset */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />

        {/* Analytics */}
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="2LejtRLnIfh608Ce86L4Ng"
          async
        ></script>
      </Head>
      <Box bg="brand.dark" minH="100vh">
        <div className={manrope.className}>
          <Navbar />
          {children}
          <Footer />
        </div>
      </Box>
    </div>
  );
}
