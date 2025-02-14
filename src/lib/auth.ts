import { betterAuth } from "better-auth";
import { genericOAuth } from "better-auth/plugins"
import Database from "better-sqlite3";

export const auth = betterAuth({
    database: new Database("./chakhireply.db"),
    plugins: [ 
        genericOAuth({ 
            config: [ 
                { 
                    providerId: "instagram",
                    clientId: process.env.INSTAGRAM_CLIENT_ID as string,
                    clientSecret: process.env.INSTAGRAM_CLIENT_SECRET as string,
                    authorizationUrl: "https://api.instagram.com/oauth/authorize",
                    tokenUrl: "https://api.instagram.com/oauth/access_token",
                    scope: "instagram_business_manage_messages",
                }, 
            ] 
        }) 
    ]
});
