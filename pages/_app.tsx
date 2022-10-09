import "../styles/globals.css";
import Layout from "../components/Layout/Layout";

import { SessionProvider } from "next-auth/react"

interface Props {
  Component?: any;
  pageProps?: any;
}

const MyApp: React.FC<Props> =  ({ Component, pageProps: {session, ...pageProps}}) => {
  return (
    <SessionProvider>
      <Layout />
      <Component {...pageProps} />
    </SessionProvider>
  );
}

export default MyApp;
