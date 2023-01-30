import Layout from "../components/layout/Layout";
import Theme from "../context/ThemeContext";
import "../styles/globals.css";
import Script from "next/script";
import AnimatedMouse from "../components/commen/AnimatedMouse";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Script src="https://smtpjs.com/v3/smtp.js" />
          <AnimatedMouse />
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
