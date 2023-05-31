import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function header() {
return(
<div>
<header className={styles.header}>
<span className={styles.logo}>
    <Image src="/logo2.png" alt="Bus Logo" width={56} height={50} />
</span>
</header>
</div>
)
}
