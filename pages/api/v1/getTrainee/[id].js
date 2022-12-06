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

        const id = req.query.id;

        const [data] = await dbConnection.execute(
            `SELECT t.SSN, Fname, Lname, Address, Phone, Photo FROM trainee t, person p WHERE p.SSN = t.SSN AND t.SSN = ?;`,
            [id],
            (err, res, fields) => {
                console.log(res);
            }
        );

        const [year] = await dbConnection.execute(`SELECT Year FROM seasontrainee WHERE SSN_Trainee = ?;`, [id], (err, res, fields) => {
            console.log(res);
        });

        const resultPerYear = {};

        for (const y of year) {
            const [[data]] = await dbConnection.execute(`CALL GET_YEAR_RESULT(?, ?)`, [id, y.Year], (err, res, fields) => {
                console.log(res);
            });

            resultPerYear[y.Year] = data;
        }

        res.status(200).json({ data: { ...data[0], resultPerYear } });
    } catch (e) {
        console.log(e);
        res.status(200).json({ auth: false });
    }
}
