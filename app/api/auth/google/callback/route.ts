// app/api/auth/google/route.ts
import instance from "@/app/lib/utils/instance";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { code } = await req.json();

    if (!code) {
      return NextResponse.json({ error: "No code provided" }, { status: 400 });
    }

    // Exchange code for access_token
    const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        code,
        client_id: process.env.GOOGLE_CLIENT_ID!,
        client_secret: process.env.GOOGLE_CLIENT_SECRET!,
        redirect_uri: "http://localhost:3000/auth/google/callback",
        grant_type: "authorization_code",
      }),
    });

    if (!tokenRes.ok) {
      const text = await tokenRes.text();
      return NextResponse.json(
        { error: "Token request failed", details: text },
        { status: 400 }
      );
    }

    const tokenData = await tokenRes.json();

    // Prepare payload for your backend
    const payload = {
      provider: "google",
      access_token: tokenData.access_token,
      refresh_token: tokenData.refresh_token ?? null,
    };

    // Send to your backend
    const backendRes = await instance.post("/social-login", payload);

    if (!backendRes.ok) {
      const text = await backendRes.text();
      return NextResponse.json(
        { error: "Backend login failed", details: text },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, ...payload });
  } catch (err: any) {
    return NextResponse.json(
      { error: err.message || "Server error" },
      { status: 500 }
    );
  }
}
