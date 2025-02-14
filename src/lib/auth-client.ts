import { createAuthClient } from "better-auth/react";
import { genericOAuthClient } from "better-auth/client/plugins";

export const authClient = createAuthClient({
    baseURL: "https://localhost:3000",
    plugins: [
        genericOAuthClient()
    ]
})