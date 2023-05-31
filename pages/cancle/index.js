import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {

    const [Seatss, setSeatss] = useState([]);
    const [deleted, setDeleted] = useState(false);
    const [deletedError, setDeletedError] = useState(false);


    async function getSeats() {
        const getData = {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
            },
        };
        //const res = await fetch(`http://localhost:3000/api/test3`,
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/cancle-seet-lib`,
        getData
        );
        const response = await res.json();
        setSeatss(response.seats);

        console.log(response.seats);
    }

    useEffect(() => {
        getSeats();
    },[])
    
    async function deleteProduct(seatss) { 
        // if(!id){
        //     return(alert("empty not allowed"))
        // }
        const deleteData = {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                seatss:seatss,
            }),
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/cancle-seet-lib`,
        deleteData
        );
        const response = await res.json();
        if(response.response.message !=="success")return;
        setDeleted(true);

        //updatestate
        const seatsTORemove = parseFloat(response.response.seatss);
        setSeatss(Seatss.filter((a) => a.seatss !== seatsTORemove));
    }


    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div><center>cancle seats</center></div>
                {Seatss.map((seats) => {
                    // seats.bus_id
                    return (
                    <div>
                        <table className={styles.table}>
                            <tbody>
                                <tr >
                                    <th>ticket_id</th>
                                    <th>Bus ID</th>
                                    <th>seats</th>
                                </tr>
                                <tr>
                                    <td>{seats.ticket_id}</td>
                                    <td>{seats.bus_id}</td>
                                    <td>{seats.seatss}</td>
                                </tr>
                            </tbody>
                            <button className={styles.button} onClick={function(event){deleteProduct(seats.seatss);getValue();}}>cancle</button>
                        </table>

                    </div>
                    )
                })}
                {deleted ? <div>success!!</div>:null}
                {deletedError ? <div>Error</div>:null}
            </div>

        </div>
    )
}
function getValue() {
    var result = "Can we have The FeedBack";
    //document.write("<center><h1>"+result+"</h1></center>");
    document.write("<center><h1>" + result + "</h1></center>");
}