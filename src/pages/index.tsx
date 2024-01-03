import Head from "next/head";

import Homes from "./medical/homes";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Medical App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h4>Um texto qualquer</h4>
      <Homes nome="Bruno" />
    </div>
  );
}
