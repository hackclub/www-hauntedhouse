import "@/styles/globals.css";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
// import AnimatedCursor from "react-animated-cursor";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}
