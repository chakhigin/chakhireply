import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest } from 'next/server';

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

export default async function handler(req:NextRequest, res: NextApiResponse) {
    if (req.method === 'GET') {
        const mode = req.nextUrl.searchParams.get("hub.mode") as string;
        const token = req.nextUrl.searchParams.get("hub.verify_token") as string;
        const challenge = req.nextUrl.searchParams.get("hub.challenge") as string;
        return res.status(200).send(challenge);
    } else if (req.method === 'POST') {
        const body = await req.json();
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