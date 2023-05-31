import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { getAllReservations } from '../../backend/reservation'


export default function Home({ seats }) {
    console.log("sets", seats);
    return (
        <div>

            <main className={styles.main}>
                <div className={styles.background}>
                    <Image src="/map1.jpg" width={1400} height={100} />
                    <div className={styles.booking}>
                        {/* <forms className={styles.forms}> */}

                        <input type="text" placeholder="Departure" autocomplete="nope" className={styles.input} ></input>

                        <input type="text" placeholder="Arrival" autocomplete="nope" className={styles.input}></input>

                        {/* <input type="Date" placeholder="Date" autocomplete="nope" className={styles.input}></input> */}

                        <button className={styles.button}>Search Buses</button>

                        {/* </forms> */}
                    </div>
                    <Image src="/map2.jpg" width={1400} height={100} />
                </div>

                <div>
                    <table className={styles.table}>
                        <tbody>
                            <tr >
                                <th>ID</th>
                                <th>Bus</th>
                                <th>Origine</th>
                                <th>Destination</th>
                                {/*<th>Date</th>*/}
                                <th>Departure Date and Time</th>
                                {/* <th>Availability</th> <th>price</th>*/}
                                <th>Action</th>
                            </tr>
                            {
                                seats.map((seat) => {
                                    return (
                                        <tr>
                                            <td>{seat.bus_id}</td>
                                            <td>{seat.bus_name}</td>                                            
                                            <td>{seat.origine}</td>
                                            <td>{seat.destination}</td>
                                            {/*<td>{seat.availability}</td>*/}
                                            <td>{seat.dep_time}</td>
                                            {/* <td>{seat.price}</td> */}
                                            <td className={styles.button} ><a href={"BusId/"+seat.bus_id}>Reserve </a></td>
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
