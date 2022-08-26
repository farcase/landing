import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Farcase</title>
        <meta
          name="description"
          content="A sufficiently decentralized community of builders."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.svg" alt="Vercel Logo" width={400} height={400} />
      </main>
    </div>
  );
};

export default Home;
