import mysql from "mysql2/promise";

export async function querry({querry,value = []}){

        const dbconnection = await mysql.createConnection({
            host: process.env.MYSQL_HOST,//'127.0.0.1',
            port: process.env.MYSQL_PORT,//'3306'
            user: process.env.MYSQL_USER,//'root',
            database: process.env.MYSQL_DATABASE,//'booking',
            password: process.env.MYSQL_PASSWORD,//'',
        });

        try{
            const [results]= await dbconnection.execute(querry,value);
            dbconnection.end();
            return results;
        }
        catch (error){
            throw Error(error.message);
            return {error};
        }

}

//this is the second way of fetching data from the api and sql