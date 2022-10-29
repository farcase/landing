import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Farcase</title>
        <meta
          name="description"
          content="A suite of Farcaster applications and tools to improve user experience."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Image src="/logo.svg" alt="Vercel Logo" width={300} height={100} />
        <div className={styles.apps}>
          <div className={styles.app}>
            <a href="https://farapps.farcase.xyz/" rel="noreferrer noopener" target="_blank">
              farapps
            </a>
          </div>
          <div className={styles.app}>
            <a href="https://castalytics.farcase.xyz/" rel="noreferrer noopener" target="_blank">
              castalytics
            </a>
          </div>
          <div className={styles.app}>
            <a href="https://essayify.farcase.xyz/" rel="noreferrer noopener" target="_blank">
              essayify
            </a>
          </div>
          <div className={styles.app}>
            <a href="https://pollcaster.farcase.xyz/" rel="noreferrer noopener" target="_blank">
              pollcaster
            </a>
          </div>
          <div className={styles.app}>
            <a href="https://og.farcase.xyz/" rel="noreferrer noopener" target="_blank">
              og
            </a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
