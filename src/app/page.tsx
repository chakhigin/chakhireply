"use client";
import { authClient } from "@/lib/auth-client";
import axios from "axios";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=28278206125157935&redirect_uri=https://chakhireplay.netlify.app/&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights">
        instagram
      </Link>
    </div>
  );
}

// token ehsan = IGAGR24O75ri9BZAE1US0J5V28zZAFNPZAS1hOXVnSUIzYnNBcHNzOVJqZA2pIbkpWVTNwV2ZAqUmdxOTlFX2ZAhZAmYtcmNqcVFoVThHMHJJZAU1CWHFXRnd6eHB2TC0xZAHY4X2t6RG5tUk1sanV0WDdlcjlnWVcxb0dSeEpnTGlnZAEdQT2U5cVhTT3ZA3WWln
// token chakhi = IGAGR24O75ri9BZAFB1bDI3RkFIeEZAhdjZAVWEUyTm1CT09JWTBxeGJ2djBzRlBWZAjh5alZAlbFZAUNjcwQzFTMDdPRU1tRlZAuOF83OEN5aW1nZA1BlMkF6dnRmX2Y1X3FpNTFTc0RBWlJ2MWVCTktpODI5V3pRemk2VU44UElDTDI0OF9kUktpZAk85TzV3
// ehsan id = 28540415752239066
// chakhi id = 9270468832973587
