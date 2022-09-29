import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Upholzer.net</title>
        <meta name="description" content="Uphozler Virtual Private Cloud" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://upholzer.net">Upholzer.net</a>
        </h1>

        <p className={styles.description}>
          Upholzer virtual private cloud network
        </p>

        <div className={styles.grid}>
          <a href="https://www.upholzer.net" className={styles.card}>
            <h2>Link One &rarr;</h2>
            <p>placeholder text. placeholder text. placeholder text. </p>
          </a>

          <a href="https://www.ecloud.io/profiles/github" className={styles.card}>
            <h2>Link Two</h2>
            <p>placeholder text. placeholder text. placeholder text. </p>
          </a>

          <a
            href="https://help.ecloud.io"
            className={styles.card}
          >
            <h2>Examples &rarr;</h2>
            <p>Discover and deploy new voice integration projects.</p>
          </a>

          <a
            href="https://www.ecloud.io/signup"
            className={styles.card}
          >
            <h2>Deploy &rarr;</h2>
            <p>
              Instantly deploy your companys voice migration console.
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://www.ecloud.io"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
          </span>
        </a>
      </footer>
    </div>
  )
}
