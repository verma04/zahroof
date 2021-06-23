import '../styles/globals.css'
import React, {  useEffect , useState } from 'react';
import type { AppProps } from 'next/app'
import GlobalFonts from '../theme/theme';
import { ThemeProvider } from "styled-components";
import theme from '../theme/colors';
import '../styles/reset.css';
import Head from 'next/head';
import AOS from 'aos';
import "aos/dist/aos.css";
import "nprogress/nprogress.css";
import dynamic from 'next/dynamic'
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  const TopProgressBar = dynamic(
    () => {
      return import("../components/TopProgressBar");
    },
    { ssr: false },
  );
  return(
 <div>
 
<Head>
<link rel="shortcut icon" href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1623821289/z5k5c8xjr9o0dunv7gce.png " />

      <meta
        name="viewport"
        content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
      />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com"  />

    </Head>
    <ThemeProvider theme={theme}>
 
    <GlobalFonts/>
    <TopProgressBar />
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  )
}
export default MyApp
