import '../styles/globals.css'
import type { AppProps } from 'next/app'
import GlobalFonts from '../theme/theme';
import { ThemeProvider } from "styled-components";
import theme from '../theme/colors';
import '../styles/reset.css';
function MyApp({ Component, pageProps }: AppProps) {
  
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
