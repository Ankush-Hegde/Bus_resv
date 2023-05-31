import {querry} from "../../backend/lib/db";

export default async function handler(req,res){
    let product;
    let message;
    if(req.method === "GET"){
        const results = await querry({
            querry : "SELECT * FROM `test2`",
            value : [],

        });
        res.status(200).json({ product : results});
    }

    if(req.method==="POST"){
        const ProductName = req.body.product;
        console.log(ProductName)
        const addProduct = await querry({
            querry : "INSERT INTO `test2` (`product`) VALUES (?)",
            value : [ProductName],
            

        });
        
        if(addProduct.insertId){
            message = "Success";
        }else{
            message = "error";
        }
        let product = {
            id : addProduct.insertId,
            product : ProductName,
        }
    res.status(200).json({response : {message : message, product : addProduct} });
    }

    if(req.method === "PUT"){
        const productId = req.body.id;
        const productName = req.body.product;

        const updateProduct = await querry({
            querry : "update test2 set product = ? where id =?",
            value : [productName,productId],
        });

        const result =updateProduct.affectedRows;

        if(result){
            message = "success";
        }else{
            message = "error";
        }

        const product ={
            id:productId,
            name:productName
        };

        res.status(200).json({response : {message:message, product : result} });
    }

    if(req.method === "DELETE"){
        const productId = req.body.id;
        const deleteProduct =await querry({
            querry : "delete from test2 where id =?",
            value : [productId],
        });
        const result = deleteProduct.affectedRows;
        if (result){
            message= "success";
        }else{
            message = "error";
        }
        res.status(200).json({response : {message:message, id : result} });
    }
}


