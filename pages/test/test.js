import { getAllReservations } from '../../backend/reservation'
import styles from '../../styles/Home.module.css'



var a = 2;




const BookingA1 = () => {
    if (a == 2) {
        return (
            <input type="checkbox" disabled id="1A" />
        );
    }
    else {
        return (
            <input type="checkbox" id="1A" />
        );
    }
};

export default function Home({ seats }) {
    console.log("sets", seats);
    return (
        
        <div>
            {/* <div>
        {
                                seats.map((seat) => {
                                    return (<div>{seat.ticket_id}</div>
                                        // <tr>
                                            
                                        //     <td>{seat.bus_name}</td>                                            
                                        //     <td>{seat.origine}</td>
                                        //     <td>{seat.destination}</td>
                                        //     <td>{seat.availability}</td>
                                        //     <td>{seat.dep_time}</td>
                                        //     <td>{seat.price}</td>
                                        //     <td className={styles.button} ><a href="/booking/seets">Reserve </a></td>
                                        // </tr>
                                    );
                                })
                            }
        </div> */}

            <div>
                <div className="theatre">
                    <div className="screen-side">
                        <h3 className="select-text">Please select a seat</h3>
                    </div>
                    <div className="exit exit--front">
                    </div>
                    <div>
                        <ol className="cabin">
                            <li className="row row--1">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <BookingA1 />
                                        {/* <input type="checkbox"disabled id="1A" /> */}
                                        <label for="1A">1A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1B" />
                                        <label for="1B">1B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1C" />
                                        <label for="1C">1C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" disabled id="1D" />
                                        <label for="1D">Occupied</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="1E" />
                                        <label for="1E">1E</label>
                                    </li>
                                </ol>
                            </li>
                            <li className="row row--2">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="2A" />
                                        <label for="2A">2A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id='2B' />
                                        <label for="2B">2B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2C" />
                                        <label for="2C">2C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2D" />
                                        <label for="2D">2D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="2E" />
                                        <label for="2E">2E</label>
                                    </li>
                                </ol>
                            </li>


                            <li className="row row--3">
                                <ol className="seats" type="A">
                                    <li className="seat">
                                        <input type="checkbox" id="3A" />
                                        <label for="3A">3A</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3B" />
                                        <label for="3B">3B</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3C" />
                                        <label for="3C">3C</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3D" />
                                        <label for="3D">3D</label>
                                    </li>
                                    <li className="seat">
                                        <input type="checkbox" id="3E" />
                                        <label for="3E">3E</label>
                                    </li>
                                </ol>
                            </li>
                        </ol>

                       


                        </div>
                        <div>
                <button className={styles.Paybutton} onClick={getValue}>Pay</button>
            </div>
                    </div>
                    
                </div>
                
        </div>)

}

function getValue(){
    var checkbox= document.getElementById('');
    var result="Thank You for Booking";
    const Add_query="INSERT INTO `reservation` (`ticket_id`, `passanger_id`, `bus_id`, `seatss`) VALUES (NULL, '1', '1', '10A');"
    // for (var i=0;i<checkbox.length;i++){
    //     if(checkbox[i].checked){
    //         result+=checkbox[i].id;
    //     }
    // }
    document.write("<p>"+result+"</p>")
    
}

export async function getServerSideProps(context) {
    const result = await getAllReservations();
    return {
        props: { seats: result }, // will be passed to the page component as props
    }
}
