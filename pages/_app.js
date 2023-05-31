import Layout from '../comps/Layout'
import '../styles/globals.css'
import Head from 'next/head'
import Link from 'next/link'
import '../comps/Navbar.css'

function MyApp({ Component, pageProps }) {
    return( 
      <div>
      <Head>
        <title>MIT Bus Booking</title>
        <meta name="description" content="Bus booking app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout>
        <Component {...pageProps} />
    </Layout>
    </div>
    )
}

export default MyApp
