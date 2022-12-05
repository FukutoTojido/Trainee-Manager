import mysql from "mysql2/promise";

export async function testConnection(uname, pwd) {
    try {
        const dbConnection = await mysql.createConnection({
            host: "localhost",
            database: "ass2",
            port: 3306,
            user: uname,
            password: pwd,
        });

        const authStatus = {
            uname: uname,
            pwd: pwd,
        };

        return true;
    } catch (e) {
        return false;
    }
}

export default async function makeConnection(uname, pwd) {
    try {
        const dbConnection = await mysql.createConnection({
            host: "localhost",
            database: "ass2",
            port: 3306,
            user: uname,
            password: pwd,
        });

        return dbConnection;
    } catch (e) {
        return null;
    }
}
