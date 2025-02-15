import UserId from '@/app/action/userId';
import { NextRequest, NextResponse } from 'next/server';

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

export async function GET(req:NextRequest) {
        const mode = req.nextUrl.searchParams.get("hub.mode") as string;
        const token = req.nextUrl.searchParams.get("hub.verify_token") as string;
        const challenge = req.nextUrl.searchParams.get("hub.challenge") as string;
        if(mode === "subscribe" && token === "chakhitoken"){
            console.log(challenge);
            console.log(token);
            console.log(mode);
            console.log('Webhook verified');
            return new NextResponse(challenge);
        }
        else {
            console.log('Webhook verification failed');
            return new NextResponse("error");
        }
}

export async function POST(req:NextRequest){
    const body = await req.json();
    console.log('Webhook received:', JSON.stringify(body, null, 2));

    if (body.object === 'instagram' && body.entry) {
        for (const entry of body.entry) {
            for (const messagingEvent of entry.messaging) {
                const senderId = messagingEvent.sender.id;
                const messageText = messagingEvent.message?.text;
                await UserId(body,messagingEvent.sender.id)
                console.log(`Message from user ID: ${senderId}`);
                console.log(`Message text: ${messageText}`);
            }
        }
    }
}