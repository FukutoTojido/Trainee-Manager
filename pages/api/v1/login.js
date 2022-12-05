import makeConnection, { testConnection } from "../../../lib/db";

export default async function handler(req, res) {
    const dbConnection = await testConnection(req.body.uname, req.body.pwd);

    if (!dbConnection) return res.status(200).json({ auth: false });

    res.status(200).json({ auth: true });
}
