import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(request: Request) {
  try {
    const { code } = await request.json();

    console.log(`Received verification code: ${code}`);

    if (code && code.length === 6 && /^\d+$/.test(code)) {
      const cookieStore = await cookies();

      cookieStore.set("user_authenticated", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60,
        path: "/",
      });

      cookieStore.set("user_email", "demo@example.com", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        maxAge: 24 * 60 * 60,
        path: "/",
      });

      return NextResponse.json({
        success: true,
        message: "Email confirmed!",
        user: {
          email: "demo@example.com",
          isVerified: true,
        },
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: "Wrong code",
        },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Verify error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Ошибка сервера",
      },
      { status: 500 }
    );
  }
}
