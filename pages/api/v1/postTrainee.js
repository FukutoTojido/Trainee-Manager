import makeConnection from "../../../lib/db";

export default async function handler(req, res) {
    try {
        const data = req.body;
        console.log(data);

        const rawCookies = req.headers.cookie;
        const cookiesList = {};

        rawCookies.split("; ").forEach((c) => {
            const kV = c.split("=");
            cookiesList[kV[0]] = kV[1];
        });

        const authStatus = JSON.parse(decodeURIComponent(cookiesList.authStatus));
        const dbConnection = await makeConnection(authStatus.uname, authStatus.pwd);

        await dbConnection.execute(
            "INSERT INTO person VALUES (?, ?, ?, ?, ?)",
            [data.SSN, data.Fname, data.Lname, data.Address, data.Phone],
            (err, res, fields) => {
                console.log(res);
            }
        );

        await dbConnection.query(
            "INSERT INTO trainee VALUES (?, str_to_date('?,?,?', '%d,%m,%Y'), ?, ?);",
            [
                data.SSN,
                parseInt(data.DoB.split("-")[2]),
                parseInt(data.DoB.split("-")[1]),
                parseInt(data.DoB.split("-")[0]),
                data.Photo,
                data.Company,
            ],
            (err, res, fields) => {
                console.log(res);
            }
        );

        // res.status(200).json({ data: data });
        res.status(200).json({});
    } catch (e) {
        console.log(e);
        res.status(200).json({ auth: false });
    }
}
