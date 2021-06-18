import {NextApiRequest, NextApiResponse} from "next";
import {messages, SleepMessage} from "../../data/messages";

export default function Message(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.name) {
        return res.status(400).json("Missing a name for the message.");
    }

    const messageIndex = Math.floor(Math.random() * messages.length);

    return res.status(200).json({
        message: getMessage(req.query.name as string, messageIndex)
    })
}

function getMessage(name: string, index: number): SleepMessage {
    return messages[index].replace("{}", name);
}
