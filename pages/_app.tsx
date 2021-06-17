import '../styles/globals.css'
import React, {  useEffect , useState } from 'react';
import type { AppProps } from 'next/app'
import GlobalFonts from '../theme/theme';
import { ThemeProvider } from "styled-components";
import theme from '../theme/colors';
import '../styles/reset.css';
import AOS from 'aos';
import "aos/dist/aos.css";
function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  }, []);
  
  return(
 <div>
    <ThemeProvider theme={theme}>
 
    <GlobalFonts/>
  <Component {...pageProps} />
  </ThemeProvider>
  </div>
  )
}
export default MyApp
