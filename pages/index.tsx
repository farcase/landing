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
        <div className={styles.apps}>
          <div className={styles.app}>
            <a
              href="https://farapps.farcase.xyz/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                src="/farapps.svg"
                alt="Farapps Logo"
                width={300}
                height={150}
              />
            </a>
          </div>
          <div className={styles.app}>
            <a
              href="https://castalytics.farcase.xyz/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                src="/castalytics.svg"
                alt="Castlytics Logo"
                width={300}
                height={150}
              />
            </a>
          </div>
          <div className={styles.app}>
            <a
              href="https://essayify.farcase.xyz/"
              rel="noreferrer noopener"
              target="_blank"
            >
              <Image
                src="/essayify.svg"
                alt="Essayify Logo"
                width={300}
                height={150}
              />
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
