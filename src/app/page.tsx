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
      <div onClick={() => console.log("chakhi")}>chakhi</div>  
    </div>
  );
}
