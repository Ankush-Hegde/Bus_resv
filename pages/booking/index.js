import styles from '../../styles/Home.module.css'
import Image from 'next/image'


export default function Home() {
    return (
    <div>

        <main className={styles.main}>
            <div className={styles.background}>
            <Image src="/map.jpg" width={1400} height={300} />
                <div className={styles.booking}>
                {/* <forms className={styles.forms}> */}
            
                <input type="text" placeholder="Departure" autocomplete="nope" className={styles.input} ></input>
            
                <input type="text" placeholder="Arrival" autocomplete="nope" className={styles.input}></input>

                <input type="Date" placeholder="Date" autocomplete="nope" className={styles.input}></input>

                <button className={styles.button}>Search Buses</button>
            
                {/* </forms> */}
                </div>
            </div>

            <div>
            <table className={styles.table}>
        <tbody>
    <tr >
    <th>ID</th>
    <th>Bus</th>
    <th>Date</th>
    <th>Location</th>
    <th>Departure Time</th>
    <th>Availability</th>
    <th>price</th>
    <th>Action</th>
    </tr>
    <tr >
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    <tr>
        <td>1</td>
        <td>Airavata</td>
        <td>15-09-2022</td>
        <td>Udupi</td>
        <td>5:00 pm</td>
        <td>25</td>
        <td>500</td>
        <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
    </tr>
    </tbody>
</table>
            </div>
        </main>

        </div>
    )
}