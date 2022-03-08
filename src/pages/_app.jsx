import * as React from 'react';
import Head from 'next/head';
import Router from 'next/router';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';
import { CacheProvider } from '@emotion/react';
import createEmotionCache from '@/lib/createEmotionCache';
import muiTheme from '@/lib/muiTheme';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import '@/styles/globals.css';
import '@/styles/style.css';
import '@/styles/style2.css';
import '@/styles/progress.css';
import '@/styles/fontawesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-quill/dist/quill.snow.css'
import {ParticipantProvider} from '../contexts/participant'
config.autoAddCss = false;

Router.events.on('routeChangeStart', () => NProgress.start());
Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done());

function App(props) {
  const { Component, pageProps, emotionCache = createEmotionCache() } = props;

  return (
    <ParticipantProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="initial-scale=1, width=device-width" />
          <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" integrity="sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU"></link>
          <title>
            Globashare
          </title>
          <meta
            name="description"
            content="Magic: The Gathering Cards, Yu-Gi-Oh! Cards, Pokémon Cards And More."
          />
        </Head>
        <ThemeProvider theme={muiTheme}>
          <CssBaseline />
          <Component {...pageProps} />
        </ThemeProvider>
      </CacheProvider>
    </ParticipantProvider>
  );
}

export default App;
