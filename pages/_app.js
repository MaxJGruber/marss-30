import Head from "next/head";
import Router from "next/router";
import React from "react";
import { useState, useEffect } from "react";
import { Provider } from "react-redux";
import { enableStaticRendering } from "mobx-react-lite";
import { DefaultSeo } from "next-seo";
import { TITLE, META_DESCRIPTION, META_IMAGE, URL } from "root/config";
import store from "stores/store";
import changeLanguage from "stores/languageContent";
import "styles/globals.css";
import * as gtag from "helpers/gtag";

function App({ Component, pageProps }) {
  if (typeof window === undefined) {
    enableStaticRendering(true);
  }
  // Remove the server-side injected CSS.
  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  // Track pages
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url);
    };
    Router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      Router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, []);

  // eslint-disable-next-line
  const [content, setContent] = useState(null);
  useEffect(() => {
    store.subscribe(() => {
      store.getState();
      setContent(changeLanguage());
    }, []);
  });

  return (
    <div className="App">
      <Provider store={store}>
        <Head>
          <meta
            name="viewport"
            content="minimum-scale=1, initial-scale=1, width=device-width"
          />
        </Head>
        <DefaultSeo
          title={TITLE}
          description={META_DESCRIPTION}
          openGraph={{ url: URL, images: [{ url: META_IMAGE }] }}
          twitter={{ cardType: "summary_large_image" }}
        />
        <Component {...pageProps} />
      </Provider>
    </div>
  );
}

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
