import styles from '../../styles/Home.module.css'
import Image from 'next/image'
import { useEffect, useState, useRef } from "react";





export default function Home() {
    const emailRef =useRef();
    const passRef = useRef();
    const [email,setEmail]=useState('');
    const [pass,setpass]=useState('');

    async function login() {
        const email = emailRef.current.value.trim();
        const pass = passRef.current.value.trim();

        const postData = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                username : email,
                password :pass,
            }),
        };
    
        
        if (email.length < 4){return(alert("enter valid email"))}

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/login-signUp/signUp`,
        postData
        );
        console.log(res)
        const response = await res.json();

        if(response.response.message !=="true")return;
        setCreated(true);

    }

    return (
    <div>

        <main className={styles.main}>
            <forms className={styles.forms}>
            <h1 className={styles.title}>Login</h1>
            <p>
            <input type="email" placeholder="Email" autocomplete="nope" className={styles.input} ref={emailRef}></input>
            </p>
            <input type="password" placeholder="Password" autocomplete="new-password" className={styles.input} ref={passRef}></input>
            <p>
            <button className={styles.button} onClick={()=>login()}>Login</button>
            </p>
            </forms>
        </main>

        </div>
    )
}