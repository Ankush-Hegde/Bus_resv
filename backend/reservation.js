import { connection, initConnection } from "./connection";


export async function getAllReservations() {
    if (connection == null) await initConnection();

    const [rows, fields] = await connection.execute(
        'SELECT * FROM `slots`'
    );
    // console.log(rows);
    return JSON.parse(JSON.stringify(rows));
}