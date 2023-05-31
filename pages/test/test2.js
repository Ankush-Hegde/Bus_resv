import { useEffect, useState, useRef } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {

    const tid = useRef();
    const tname = useRef();
    const tdep = useRef();
    const tarriv = useRef();
    const ttest = useRef();

    const [test,setTest] = useState([]);

    




    const [dataResponse, setdataResponse] = useState([]);

    useEffect(() => {
        async function getPageData() {
            const apiUrlEndpoint = "http://localhost:3000/api/test";
            const response = await fetch(apiUrlEndpoint);
            const res = await response.json();
            //console.log(res.seats);

            setdataResponse(res.test)
        }
        getPageData();
    }, []);
    return (
        <div className={styles.container}>
            <div className={styles.main}>


                <div className={styles.title}>
                    <h3>
                        <center>insert</center>
                    </h3>
                </div>


                <div>
                    <forms className={styles.forms}>

                        <input type="number" placeholder="ID" autocomplete="nope" className={styles.input} ></input>

                        <input type="text" placeholder="Name" autocomplete="nope" className={styles.input}></input>

                        <input type="text" placeholder="Arriv" autocomplete="nope" className={styles.input}></input>

                        <input type="text" placeholder="Dep" autocomplete="nope" className={styles.input}></input>

                        <input type="number" placeholder="test" autocomplete="nope" className={styles.input}></input>

                        <button className={styles.button}>Search Buses</button>

                    </forms>
                </div>



                <div><h1>read</h1></div>


                <div className={styles.title}><h3><center>cancle</center></h3></div>


                {dataResponse.map((test) => {
                    // seats.bus_id
                    return (
                        <div>
                            <table className={styles.table}>
                                <tbody>
                                    <tr >
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>arriv</th>
                                        <th>dep</th>
                                        <th>test</th>
                                    </tr>
                                    <tr>
                                        <td>{test.id}</td>
                                        <td>{test.name}</td>
                                        <td>{test.arriv}</td>
                                        <td>{test.dep}</td>
                                        <td>{test.test}</td>
                                    </tr>
                                </tbody>
                                <center><td className={styles.button} ><a href="#">cancle </a></td></center>
                            </table>
                        </div>
                    )
                })}

            </div>

        </div>
    )
}