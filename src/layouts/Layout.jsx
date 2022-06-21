import Head from "next/head";

const Layout = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};

export default Layout;
