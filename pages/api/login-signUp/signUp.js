import {querry} from "../../../backend/lib/db";

export default async function handler(req,res){
    if(req.method==="POST"){
        const username = req.body.username;
        const password = req.body.password;
        //console.log(username+"wqw")
        const results = await querry({
            querry : "INSERT INTO `users` (`username`, `pass`) VALUES (?, ?);",
            value : [username,password],
            

        });
        
    res.status(200).json({response : {result : results} });
    }
}