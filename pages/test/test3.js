import { useEffect, useState, useRef } from "react";
import styles from "../../styles/Home.module.css";

export default function Home() {

    const ProductNameRef = useRef();
    const ProductIDToDeleteRef = useRef();
    const ProductIDToUpdateRef = useRef();
    const productNameToUpdateRef = useRef();


    const [products, setProducts] = useState([]);

    const [updated, setUpdated] = useState(false);
    const [created, setCreated] = useState(false);
    const [deleted, setDeleted] = useState(false);

    const [updatedError, setUpdatedError] = useState(false);
    const [deletedError, setDeletedError] = useState(false);


    async function getProduct() {
        const postData = {
            method : "GET",
            headers : {
                "Content-Type" : "application/json",
            },
        };
        //const res = await fetch(`http://localhost:3000/api/test3`,
        const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/test3`,
        postData
        );
        const response = await res.json();
        setProducts(response.product);

        console.log(response.product);
    }

    async function addProduct() {
        const productName = ProductNameRef.current.value.trim();

        const postData = {
            method : "POST",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                product : productName,
            }),
        };
    
        
        if (productName.length < 4){return(alert("the product name is small"))}

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/test3`,
        postData
        );
        console.log(res)
        const response = await res.json();

        if(response.response.message !=="success")return;

        setCreated(true);

        const newproduct = response.response.product;

        setProducts([
            ...products,{
                id:newproduct.id,
                product:newproduct.product,
            },
        ]);
        
    }

    
    
    async function updateProduct() {
        const ProductIDToUpdate = ProductIDToUpdateRef.current.value.trim();
        const productNameToUpdate = productNameToUpdateRef.current.value.trim();

        console.log(productNameToUpdate)
        if(ProductIDToUpdate.length<1){return(alert("enter product id"))}

        const putData = {
            method : "PUT",
            headers : {
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({
                id:ProductIDToUpdate,
                product : productNameToUpdate,
            }),
        };

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_URL}/api/test3`,
        putData
        );
        const response = await res.json();
        if(response.response.message !=="success")return;
        setUpdated(true);

        //updatestate
        const ProductIDToUpdated = parseFloat(response.response.product.id);
        const productUpdatedName = response.response.product.product;

        const productStateAfterUpdate = products.map((product)=>{
            if(product.id===ProductIDToUpdated){
                const productUpdated = {
                    ...product,
                    product:productUpdatedName,
                };
                return productUpdated;
            }
            else{
                return{
                    ...product,
                };
            }
        });
        setProducts(productStateAfterUpdate);

    }


    async function deleteProduct(id) { 
        if(!id){
            return(alert("empty not allowed"))
        }
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


    useEffect(() => {
        getProduct();
    },[])



    return (
        <div className={styles.container}>
            <div className={styles.main}>

                <section>
                <div className={styles.title}>
                    <h3>
                        <center>read</center>
                    </h3>
                </div>
                        <div>
                        <h1>--------------------------------------------------</h1>
                            {products.map((product, index)=>{
                                return(
                                    <div key = {product.id} className={styles.forms}>
                                        <span>product_id</span>:{product.id}<br />{" "}
                                        <span>product_name</span>:{product.product}<br />{" "}
                                    </div>
                                )
                            })}
                            <h1>--------------------------------------------------</h1>
                        
                    </div>
                </section>


                <div className={styles.title}>
                    <h3>
                        <center>create</center>
                    </h3>
                </div>


                <div>
                    <forms className={styles.forms}>
                        
                        <input type="text" placeholder="Name" autocomplete="nope" ref={ProductNameRef} className={styles.input}/>
                        <button className={styles.button} onClick={addProduct}>create</button>

                    </forms>
                    {created ? <div>Success!</div>:null}

                </div>
                


                <div className={styles.title}>
                    <h3>
                        <center>update</center>
                    </h3>
                </div>


                <div>
                    <forms className={styles.forms}>
                        
                        <input type="number" placeholder="ID" autocomplete="nope" ref={ProductIDToUpdateRef} className={styles.input} ></input>
                        <input type="text" placeholder="Name" autocomplete="nope" ref={productNameToUpdateRef} className={styles.input}></input>
                        
                        
                        
                        

                        <button onClick={updateProduct} className={styles.button}>update</button>

                    </forms>
                </div>
                {updated ? <div>success!!</div>:null}
                {updatedError ? <div>Error</div>:null}

                <div className={styles.title}>
                    <h3>
                        <center>delete</center>
                    </h3>
                </div>


                <div>
                    <forms className={styles.forms}>
                        
                        <input type="number" placeholder="ID" autocomplete="nope" ref={ProductIDToDeleteRef} className={styles.input} ></input>
                        
                        <button className={styles.button} onClick={()=>deleteProduct(ProductIDToDeleteRef.current.value)}>delete</button>
                    </forms>
                    
                </div>
                {deleted ? <div>success!!</div>:null}
                {deletedError ? <div>Error</div>:null}


            </div>
        </div>
    )



}