import { AppProps } from "next/app";
import "../styles/index.css";
import { Providers } from "../utils/providers";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
