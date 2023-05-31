import {querry} from "../../../backend/lib/db";

export default async function handler(req,res){
    let seats;
    let message;
    
    const BusIdd = req.query.BusId;

    if(req.method === "GET"){
        const results = await querry({
            querry : "SELECT seatss FROM `reservation` where bus_id = ?",
            value : [BusIdd],

        });
        //res.status(200).json({ seats : BusIdd});
        res.status(200).json({ seats : results});
    }

}