import {NextApiRequest, NextApiResponse} from "next";
import fetch from "node-fetch";

export default async function Waifu(req: NextApiRequest, res: NextApiResponse) {
    const waifu = await fetch("https://api.waifu.pics/sfw/cuddle");
    const json = await waifu.json();

    return res.status(200).json({
        icon: json.url
    });
}
