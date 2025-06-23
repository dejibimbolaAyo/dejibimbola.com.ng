import React, { ReactNode, ReactElement } from "react";
import Head from "next/head";
import { Manrope } from "next/font/google";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Box } from "@chakra-ui/react";

type Props = {
  children?: ReactNode;
  title?: string;
};

const manrope = Manrope({
  weight: ["300", "400", "800"],
  subsets: ["latin"],
});

export default function Layout({
  children,
  title = "This is the default title",
}: Readonly<Props>): ReactElement {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@dejibimbola" />
        <meta name="twitter:creator" content="@dejibimbola" />
        <meta name="twitter:title" content="Dejibimbola" />
        <meta
          name="twitter:description"
          content="Dejibimbola's works as a Software Engineer"
        />
        <meta
          name="twitter:image"
          content={`https://www.dejibimbola.com.ng/assets/dejibimbola-mark.png`}
        />
        <meta property="og:url" content="https://www.dejibimbola.com.ng" />
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Dejibimbola" />
        <meta property="og:description" content="Deibimbola's works" />
        <meta
          property="og:image"
          content={`https://www.dejibimbola.com.ng/assets/dejibimbola-mark.png`}
        />
        <meta name="description" content="Abimbola Ayodeji's work" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
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
