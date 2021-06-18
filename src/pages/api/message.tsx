import {NextApiRequest, NextApiResponse} from "next";
import {messages, SleepMessage} from "../../data/messages";

/**
 * Retrieve a sleep message and format it.
 * @param req       request
 * @param res       response
 * @constructor
 */
export default function Message(req: NextApiRequest, res: NextApiResponse) {
    if (!req.query.name) {
        return res.status(400).json("Missing a name for the message.");
    }

    const messageIndex = Math.floor(Math.random() * messages.length);

    return res.status(200).json({
        message: getMessage(req.query.name as string, messageIndex)
    })
}

/**
 * Get a message and format it
 * @param name      name to format
 * @param index     index of message
 */
function getMessage(name: string, index: number): SleepMessage {
    return messages[index].replace("{}", name);
}
