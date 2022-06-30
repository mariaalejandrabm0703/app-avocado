// import {App, AppProps} from 'next/app'
import '../styles/global.css'

import Layout from "@components/Layout/Layout";


function MyApp({ Component, pageProps }) {
  return (
    <Layout >
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
