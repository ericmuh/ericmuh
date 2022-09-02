import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Eric Muhwezi</title>
        <meta name="description" content="A personal website by Eric Muhwezi" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       Eric Muhwezi
      </main>

      <footer className={styles.footer}>
      
          Powered by NextJS
      </footer>
    </div>
  )
}

export default Home
