import { connection } from "./connection";


export function getAllReservations() {


    connection.query(
        'SELECT * FROM `slots`',
        function (err, results, fields) {
            console.log(results); // results contains rows returned by server
            console.log(fields); // fields contains extra meta data about results, if available
        }
    );
}