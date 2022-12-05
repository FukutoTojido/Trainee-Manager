import makeConnection from "../../../lib/db";
import formidable from "formidable";
import path from "path";
import fs from "fs/promises";

export const config = {
    api: {
        bodyParser: false,
    },
};

const saveFile = (req) => {
    const options = {};
    options.uploadDir = path.join(process.cwd(), "/public/trainees");
    options.filename = (name, ext, path, form) => {
        return `${path.originalFilename}`;
    };
    options.maxFileSize = 4 * 1024 * 1024;

    const form = formidable(options);
    return new Promise((res, rej) => {
        form.parse(req, (err, fields, files) => {
            if (err) rej(err);
            res({ fields, files });
        });
    });
};

export default async function handler(req, res) {
    try {
        await saveFile(req);
        res.status(200).json({});
    } catch (e) {
        console.log(e);
        res.status(200).json({ auth: false });
    }
}
