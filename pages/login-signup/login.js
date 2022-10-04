import styles from '../../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
    return (
    <div>

        <main className={styles.main}>
            <forms className={styles.forms}>
            <h1 className={styles.title}>Login</h1>
            <p>
            <input type="email" placeholder="Email" autocomplete="nope" className={styles.input}></input>
            </p>
            <input type="password" placeholder="Password" autocomplete="new-password" className={styles.input}></input>
            <p>
            <button className={styles.button}>Login</button>
            </p>
            </forms>
        </main>

        </div>
    )
}