import Head from "next/head";

import Layout from "../components/layout/Layout";
import StyledComponentsRegistry from "../registry";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medical App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <StyledComponentsRegistry>
        <Layout />
      </StyledComponentsRegistry>
    </div>
  );
}
