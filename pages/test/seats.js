

import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState, useRef } from "react";





export default function Home() {

    const [Seatss, setSeatss] = useState([]);
    var arraySeats = [];
    const seatNameRef = useRef();
    const [created, setCreated] = useState(false);

    async function addSeat() {
        const SeatName = seatNameRef.current.value.trim();

        const postData = {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                seat: SeatName,
            }),
        };


        if (SeatName.length < 2) { return (alert("the product name is small")) }

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/test`,
            postData
        );
        console.log(res)
        const response = await res.json();

        if (response.response.message !== "success") return;
        setCreated(true);

        const newSeat = response.response.seatss;

        setSeatss([
            ...products, {
                seat: newSeat.seatss,
            },
        ]);

    }

    async function getSeats() {
        const getData = {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        };
        //const res = await fetch(`http://localhost:3000/api/test3`,
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/test`,
            getData
        );
        const response = await res.json();
        setSeatss(response.seats);

        console.log(response.seats);
    }


    Seatss.map((element) => {
        arraySeats.push(element.seatss)
    })
    console.log(arraySeats)
    var A1 = arraySeats.includes('1A');
    var A2 = arraySeats.includes('2A');
    var A3 = arraySeats.includes('3A');
    var A4 = arraySeats.includes('4A');
    var A5 = arraySeats.includes('5A');
    var A6 = arraySeats.includes('6A');
    var A7 = arraySeats.includes('7A');

    var B1 = arraySeats.includes('1B');
    var B2 = arraySeats.includes('2B');
    var B3 = arraySeats.includes('3B');
    var B4 = arraySeats.includes('4B');
    var B5 = arraySeats.includes('5B');
    var B6 = arraySeats.includes('6B');
    var B7 = arraySeats.includes('7B');

    var C1 = arraySeats.includes('1C');
    var C2 = arraySeats.includes('2C');
    var C3 = arraySeats.includes('3C');
    var C4 = arraySeats.includes('4C');
    var C5 = arraySeats.includes('5C');
    var C6 = arraySeats.includes('6C');
    var C7 = arraySeats.includes('7C');

    var D1 = arraySeats.includes('1D');
    var D2 = arraySeats.includes('2D');
    var D3 = arraySeats.includes('3D');
    var D4 = arraySeats.includes('4D');
    var D5 = arraySeats.includes('5D');
    var D6 = arraySeats.includes('6D');
    var D7 = arraySeats.includes('7D');

    var E1 = arraySeats.includes('1E');
    var E2 = arraySeats.includes('2E');
    var E3 = arraySeats.includes('3E');
    var E4 = arraySeats.includes('4E');
    var E5 = arraySeats.includes('5E');
    var E6 = arraySeats.includes('6E');
    var E7 = arraySeats.includes('7E');

    var F7 = arraySeats.includes('7F');




    useEffect(() => {
        getSeats();
    }, [])

    return (
        <div>
            <div className={styles.main}>
                <div className="theatre">
                    <div className="screen-side">
                        <h3 className="select-text">Please select a seat</h3>
                    </div>
                    <div className="exit exit--front">
                    </div>
                    <ol className="cabin">
                        <li className="row row--1">
                            <ol className="seats" type="A">
                                <li className="seat">

                                    <input type="checkbox" disabled={A1} id="1A" />
                                    <label for="1A">1A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B1} id="1B" />
                                    <label for="1B">1B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C1} id="1C" />
                                    <label for="1C">1C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D1} id="1D" />
                                    <label for="1D">1D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E1} id="1E" />
                                    <label for="1E">1E</label>
                                </li>
                            </ol>
                        </li>
                        <li className="row row--2">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" disabled={A2} id="2A" />
                                    <label for="2A">2A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B2} id="2B" />
                                    <label for="2B">2B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C2} id="2C" />
                                    <label for="2C">2C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D2} id="2D" />
                                    <label for="2D">2D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E2} id="2E" />
                                    <label for="2E">2E</label>
                                </li>
                            </ol>
                        </li>


                        <li className="row row--3">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" id="3A" disabled={A3} />
                                    <label for="3A">3A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B3} id="3B" />
                                    <label for="3B">3B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C3} id="3C" />
                                    <label for="3C">3C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D3} id="3D" />
                                    <label for="3D">3D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E3} id="3E" />
                                    <label for="3E">3E</label>
                                </li>
                            </ol>
                        </li>


                        <li className="row row--4">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" disabled={A4} id="4A" />
                                    <label for="4A">4A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B4} id="4B" />
                                    <label for="4B">4B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C4} id="4C" />
                                    <label for="4C">4C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D4} id="4D" />
                                    <label for="4D">4D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E4} id="4E" />
                                    <label for="4E">4E</label>
                                </li>
                            </ol>
                        </li>


                        <li className="row row--5">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" disabled={A5} id="5A" />
                                    <label for="5A">5A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B5} id="5B" />
                                    <label for="5B">5B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C5} id="5C" />
                                    <label for="5C">5C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D5} id="5D" />
                                    <label for="5D">5D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E5} id="5E" />
                                    <label for="5E">5E</label>
                                </li>
                            </ol>
                        </li>


                        <li className="row row--6">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" disabled={A6} id="6A" />
                                    <label for="6A">6A</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={B6} id="6B" />
                                    <label for="6B">6B</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={C6} id="6C" />
                                    <label for="6C">6C</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={D6} id="6D" />
                                    <label for="6D">6D</label>
                                </li>
                                <li className="seat">
                                    <input type="checkbox" disabled={E6} id="6E" />
                                    <label for="6E">6E</label>
                                </li>
                            </ol>
                        </li>


                        <li className="row row--7">
                            <ol className="seats" type="A">
                                <li className="seat">
                                    <input type="checkbox" disabled={A7} id="7A" />
                                    <label for="7A">7A</label>
                                </li>
                                <li className="lseat">
                                    <input type="checkbox" disabled={B7} id="7B" />
                                    <label for="7B">7B</label>
                                </li>
                                <li className="lseat">
                                    <input type="checkbox" disabled={C7} id="7C" />
                                    <label for="7C">7C</label>
                                </li>
                                <li className="lseat">
                                    <input type="checkbox" disabled={D7} id="7D" />
                                    <label for="7D">7D</label>
                                </li>
                                <li className="lseat">
                                    <input type="checkbox" disabled={E7} id="7E" />
                                    <label for="7E">7E</label>
                                </li>
                                <li className="lseat">
                                    <input type="checkbox" disabled={F7} id="7F" />
                                    <label for="7F">7F</label>
                                </li>
                            </ol>
                        </li>
                    </ol>



                </div>
                <div>
                    <div>





                        <center><input type="text" placeholder="enter seat" autocomplete="nope" ref={seatNameRef} className={styles.input} /></center>
                        {/* <button className={styles.button} onClick={addSeat}>create</button> */}


                    </div>
                    {created ? <div>Success!</div> : null}
                    <button className={styles.Paybutton} onClick={function(event){addSeat();getValue();}}>BOOK SEAT</button>
                    <center><h1>test</h1></center>
                </div>
            </div>



            {/* <div>{Seatss.map((seats)=>{
        return(<div>
            <h4 className={styles.title}>{seats.seatss}</h4>
        </div>)
      })}</div> */}




        </div>
    )
}



function getValue() {
    var result = "Thank You for Booking";
    //document.write("<center><h1>"+result+"</h1></center>");
    document.write("<center><h1>" + result + "</h1></center>");
}