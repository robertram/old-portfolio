import { useEffect } from "react";
import "../i18n/i18n";
import "../src/styles/global.scss";
import Head from "next/head";
import AOS from "aos";
import { WorkProvider } from "../contexts/WorkContext";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <WorkProvider>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <meta
          name="viewport"
          content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        ></meta>
        <meta
          name="viewport"
          content="width=device-width, height=device-height"
        ></meta>
      </Head>
      <Component {...pageProps} />
    </WorkProvider>
  );
}
