"use client";
import Link from "next/link";
import UserId from "./action/userId";

export default function Home() {

  const userid = async () =>{
    const id = await UserId();
    console.log(id)
  }

  return (
    <div>
      <Link href="https://www.instagram.com/oauth/authorize?enable_fb_login=0&force_authentication=1&client_id=28278206125157935&redirect_uri=https://chakhireplay.netlify.app/&response_type=code&scope=instagram_business_basic%2Cinstagram_business_manage_messages%2Cinstagram_business_manage_comments%2Cinstagram_business_content_publish%2Cinstagram_business_manage_insights">
        instagram
      </Link>
      <div onClick={userid}>chakhi</div>  
    </div>
  );
}
