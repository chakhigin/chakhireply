import { NextApiRequest, NextApiResponse } from 'next';

export interface WebhookPayload {
    object: string;
    entry: Entry[];
}

export interface Entry {
    id: string;
    time: number;
    messaging: MessagingEvent[];
}

export interface MessagingEvent {
    sender: {
        id: string;
    };
    recipient: {
        id: string;
    };
    timestamp: number;
    message?: {
        mid: string;
        text: string;
    };
}

export interface UserDetails {
    username?: string;
    profile_pic?: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const mode = req.query['hub.mode'] as string;
        const token = req.query['hub.verify_token'] as string;
        const challenge = req.query['hub.challenge'] as string;

        if (mode === 'subscribe' && token === process.env.VERIFY_TOKEN) {
            console.log('Webhook verified');
            return res.status(200).send(challenge);
        } else {
            console.log('Webhook verification failed');
            return res.status(403).end();
        }
    } else if (req.method === 'POST') {
        const body = req.body as WebhookPayload;
        console.log('Webhook received:', JSON.stringify(body, null, 2));

        if (body.object === 'instagram' && body.entry) {
            for (const entry of body.entry) {
                for (const messagingEvent of entry.messaging) {
                    const senderId = messagingEvent.sender.id;
                    const messageText = messagingEvent.message?.text;

                    console.log(`Message from user ID: ${senderId}`);
                    console.log(`Message text: ${messageText}`);
                }
            }
        }

        return res.status(200).end();
    } else {
        return res.status(405).end();
    }
}