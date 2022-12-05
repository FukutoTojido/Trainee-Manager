import makeConnection from "../../../../lib/db";

export default async function handler(req, res) {
    try {
        const rawCookies = req.headers.cookie;
        const cookiesList = {};

        rawCookies.split("; ").forEach((c) => {
            const kV = c.split("=");
            cookiesList[kV[0]] = kV[1];
        });

        const authStatus = JSON.parse(decodeURIComponent(cookiesList.authStatus));
        const dbConnection = await makeConnection(authStatus.uname, authStatus.pwd);

        const id = parseInt(req.query.id);

        const [data] = await dbConnection.execute(
            `SELECT t.SSN, Fname, Lname, Address, Phone, Photo FROM trainee t, person p WHERE p.SSN = t.SSN AND t.SSN = ${id};`,
            [],
            (err, res, fields) => {
                console.log(res);
            }
        );

        res.status(200).json({ data: data[0] });
    } catch (e) {
        res.status(200).json({ auth: false });
    }
}
