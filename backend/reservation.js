import { connection, initConnection } from "./connection";


export async function getAllReservations() {
    if (connection == null) await initConnection();

    const [rows, fields] = await connection.execute(
        // 'SELECT * FROM `buss`'
        'SELECT bus.bus_id ,bus.bus_name, rout.origine, rout.destination, rout.dep_time FROM `bus`,`rout` WHERE bus.bus_id=rout.bus_id;'
    );
    // console.log(rows);
    return JSON.parse(JSON.stringify(rows));
}