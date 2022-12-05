import makeConnection from "../../../lib/db";

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

        const [data] = await dbConnection.execute("SELECT Cnumber, Name FROM company", [], (err, res, fields) => {
            console.log(res);
        });

        res.status(200).json({ data: data });
    } catch (e) {
        console.log(e);
        res.status(200).json({ auth: false });
    }
}
