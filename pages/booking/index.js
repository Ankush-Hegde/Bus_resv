import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { getAllReservations } from '../../backend/reservation'


export default function Home({ seats }) {
    console.log("sets", seats);
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
                            {
                                seats.map((seat) => {
                                    return (
                                        <tr>
                                            <td>{seat.id}</td>
                                            <td>{seat.busname}</td>
                                            <td>{seat.date}</td>
                                            <td>{seat.location}</td>
                                            <td>{seat.depaturetime}</td>
                                            <td>{seat.availability}</td>
                                            <td>{seat.price}</td>
                                            <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </main>

        </div>
    )
}


export async function getServerSideProps(context) {
    const result = await getAllReservations();
    return {
        props: { seats: result }, // will be passed to the page component as props
    }
}
