import {querry} from "../../backend/lib/db";

export default async function handler(req,res){
    let seats;
    let message;

    if(req.method === "GET"){
        //const BusId = req.params.BusId;
        const results = await querry({
            querry : "SELECT seatss FROM `reservation` ",//where bus_id = 1
            //value : [BusId],

        });
        res.status(200).json({ seats : results});
    }

    if(req.method==="POST"){
        const seatName = req.body.seat;
        console.log(seatName)
        const addseat = await querry({
            querry : "INSERT INTO `reservation` (`ticket_id`, `passanger_id`, `bus_id`, `seatss`) VALUES ('2', '2', '2', ?);",
            value : [seatName],
            

        });
        
        if(addseat.insertId){
            message = "Success";
        }else{
            message = "error";
        }
        let product = {
            seat : seatName,
        }
    res.status(200).json({response : {message : message, seat : addseat} });
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


