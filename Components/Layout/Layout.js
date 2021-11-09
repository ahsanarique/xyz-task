import Head from "next/head";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>XYZ | Career</title>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main>{props.children}</main>
      <Footer />
    </>
  );
};

export default Layout;
