import Layout from "../components/layout/Layout";
import Theme from "../context/ThemeContext";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </Theme>
    </>
  );
}
