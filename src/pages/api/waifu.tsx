import {NextApiRequest, NextApiResponse} from "next";
import fetch from "node-fetch";

/**
 * Get a waifu picture from the waifu endpoint (if person icon is missing).
 * @param req           req
 * @param res           res
 * @constructor
 */
export default async function Waifu(req: NextApiRequest, res: NextApiResponse) {
    const waifu = await fetch("https://api.waifu.pics/sfw/cuddle");
    const json = await waifu.json();

    return res.status(200).json({
        icon: json.url
    });
}
