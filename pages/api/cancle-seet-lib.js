import {querry} from "../../backend/lib/db";

export default async function handler(req,res){
    let seats;
    let message;

    if(req.method === "GET"){
        const results = await querry({
            querry : "SELECT * FROM `reservation`",
            value : [],

        });
        res.status(200).json({ seats : results});
    }
    

    if(req.method === "DELETE"){
        const seatId = req.body.seatss;
        const deleteProduct =await querry({
            querry : "delete from reservation where seatss =?",
            value : [seatId],
        });
        const result = deleteProduct.affectedRows;
        if (result){
            message= "success";
        }else{
            message = "error";
        }
        res.status(200).json({response : {message:message, seatss : result} });
    }



        // try{
        //     const querrySql = "SELECT * FROM `reservation`";

        //     const value =[];
        //     const data = await querry({querry: querrySql , value:value});

        //     res.status(200).json({ seats : data});
        // }
        // catch (error){
        //      res.status(500).json({error:error.message});
        // }

}


