import Head from "next/head";
import AppXYZ from "@components/@core/app";

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <AppXYZ />
  </div>
);

export default Home;
