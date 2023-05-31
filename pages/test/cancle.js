import { useEffect, useState } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {

    const [deletedError, setDeletedError] = useState(false);
    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const getDatass = {
                method : "GET",
                headers : {
                    "Content-Type" : "application/json",
                },
            };
            const apiUrlEndpoint = `${process.env.NEXT_PUBLIC_URL}/api/test`;
            const response = await fetch(apiUrlEndpoint,getDatass);
            const res = await response.json();
            console.log(res.seats);

            setdataResponse(res.seats)
        }
        getPageData();
    }, []);

    async function deleteProduct(id) { 
        // if(!id){
        //     return(alert("empty not allowed"))
        // }
        const deleteData = {
            method : "DELETE",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                id:id,
            }),
        };
        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/test3`,
        deleteData
        );
        const response = await res.json();
        if(response.response.message !=="success")return;
        setDeleted(true);

        //updatestate
        const idToRemove = parseFloat(response.response.id);
        setProducts(products.filter((a)=>a.id !== idToRemove));


    }

    return (
        <div className={styles.container}>
            <div className={styles.main}>
                <div><center>cancle seats</center></div>
                {dataResponse.map((seats) => {
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
                            <button className={styles.button} onClick={()=>deleteProduct(seats.seatss)}>cancle</button>
                        </table>
                    </div>
                    )
                })}
                {/* <div><p>hello</p></div> */}
            </div>

        </div>
    )
}