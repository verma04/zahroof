import "../styles/globals.css";
import React, { useEffect, useState } from "react";
import type { AppProps } from "next/app";
import GlobalFonts from "../theme/theme";
import { ThemeProvider } from "styled-components";
import Chatt from './index'
import theme from "../theme/colors";
import "../styles/reset.css";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import "nprogress/nprogress.css";
import dynamic from "next/dynamic";
var perf =`<!DOCTYPE html><html lang="en"><head> <script>window.pipedriveLeadboosterConfig = {base: 'leadbooster-chat.pipedrive.com',companyId: 8000944,playbookUuid: 'de6e08a0-1384-45bb-89a2-ea045dc5df4a',version: 2};(function () {var w = window;if (w.LeadBooster) {console.warn('LeadBooster already exists');} else {w.LeadBooster = {q: [],on: function (n, h) {this.q.push({ t: 'o', n: n, h: h });},trigger: function (n) {this.q.push({ t: 't', n: n });},};}})();</script><script src="https://leadbooster-chat.pipedrive.com/assets/loader.js" async></script></head><body></body></html>`
import Chat from '../components/Chat'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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
          href="https://res.cloudinary.com/dzcmadjl1/image/upload/v1625722926/irixxsrjzdt3zlsw7bou.png "
        />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
        />
  
        
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.14.0/css/all.min.css   "/> 



<style data-href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@200&display=swap">




</style>
      </Head>
<ToastContainer/>
      <ThemeProvider theme={theme}>
      <div dangerouslySetInnerHTML={ {__html: perf} } />  
        <GlobalFonts />
        <TopProgressBar />
        <Component {...pageProps} />
      </ThemeProvider>
    </div>
  );
}
export default MyApp;
