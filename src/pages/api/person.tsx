import {NextApiRequest, NextApiResponse} from "next";
import {createHash} from 'crypto';
import fetch from "node-fetch";

/**
 * Request data for a person to tell them to sleep.
 * @param req           req
 * @param res           res
 * @constructor
 */
export default async function PersonRequest(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.email || !req.query.name) {
        return res.status(422).json("Missing either an email or name.");
    }

    const email = req.query.email.toString().toLowerCase().trim();
    const emailHash = createHash("md5").update(email).digest('hex');
    const gravatar = await fetch(`https://gravatar.com/${emailHash}.json`);

    const message = await fetch(`http://${req.headers.host}/api/message?name=${req.query.name}`);
    const messageJson = await message.json();

    if (gravatar.status == 200) {
        const json = await gravatar.json();
        const entries = json.entry as any[];
        // Use last entry.
        const entry = entries[entries.length - 1];
        const photos = entry.photos as any[];
        // Return data.
        return res.status(200).json({
            who: req.query.name,
            icon: photos[photos.length - 1].value,
            message: messageJson.message
        });
    } else {
        // Use the waifu endpoint.
        const waifu = await fetch(`http://${req.headers.host}/api/waifu`);
        const json = await waifu.json();
        return res.status(200).json({
            who: req.query.name,
            icon: json.icon,
            message: messageJson.message
        });
    }
}
