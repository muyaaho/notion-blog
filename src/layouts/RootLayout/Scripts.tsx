import Script from "next/script"
import { CONFIG } from "site.config"

const Scripts: React.FC = () => (
  <>
    {CONFIG?.googleAnalytics?.enable === true && (
      <>
        <Script async src={`https://www.googletagmanager.com/gtag/js?id=G-Q1TXY13P5Y`}></Script>
        {/* <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${CONFIG.googleAnalytics.config.measurementId}`}
        /> */}
        {/* <Script strategy="lazyOnload" id="ga">
          {`window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${CONFIG.googleAnalytics.config.measurementId}', {
              page_path: window.location.pathname,
            });`}
        </Script> */}
        <Script strategy="lazyOnload" id="ga"> 
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Q1TXY13P5Y');
          
          `}
          
          </Script>
      </>
    )}
  </>
)

export default Scripts
