import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import GlobalFonts from "../theme/theme";
import { ThemeProvider } from "styled-components";
import theme from "../theme/colors";
import "../styles/reset.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration: 3000,
    });
  }, []);

  const TopProgressBar = dynamic(
    () => {
      return import("../components/TopProgressBar");
    },
    { ssr: false }
  );
  return (
    <div>
      <Head>
        <link
          rel="shortcut icon"
          href="http://18.217.254.134/wp-content/uploads/2021/07/z5k5c8xjr9o0dunv7gce.png "
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "
        />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
