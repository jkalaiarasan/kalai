import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Financial Management System
        </p>
        <div>
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className={styles.vercelLogo}
              width={100}
              height={24}
              priority
            /> */} Nu Finc
          </a>
        </div>
      </div>

      <div className={styles.center}>
        <Image
          className={styles.logo}
          src="/Hand.png"
          alt="Next.js Logo"
          width={250}
          height={160}
          priority
        />
      </div>

      <div className={styles.grid}>
        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            About
          </h2>
          <p className={inter.className}>
            Manage your Finance with <p>Nu Finc</p>
          </p>
        </a>

        <a
          href=""
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Application <span>-&gt;</span>
          </h2>
          <p className={inter.className}>Go to your Application</p>
        </a>

        <a
          href="tel:+917868883417"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2 className={inter.className}>
            Contact
          </h2>
          <p className={inter.className}>
            If you need any clarifications, click here
          </p>
        </a>
      </div>
    </main>
  )
}
