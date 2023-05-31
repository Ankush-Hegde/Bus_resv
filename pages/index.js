import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../comps/header'
import Link from 'next/link'

export default function Home() {
  
  return (
    
    <div>
      {/* <Head>
        <title>MIT Bus Booking</title>
        <meta name="description" content="Bus booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head> */}
      
      
      <header/>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to 
        </h1>
        <h1 >
        Bus Ticket Booking<a href="#">!</a>
        </h1>

        <div className={styles.grid}>
          <a href="/login-signup/login" className={styles.card}>
            <h2>LOGIN &rarr;</h2>
            </a>

          {/* <a href="/login-signup/signup" className={styles.card}>
            <h2>SIGNUP &rarr;</h2>
            </a> */}

        </div>
      </main>
      

    </div>
  )
}
