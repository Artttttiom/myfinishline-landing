import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { generateVerificationCode } from "@/app/lib/auth";
import { sendVerificationEmail, users } from "@/app/lib/auth";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    const existingUser = users.find((user) => user.email === email);
    if (existingUser) {
      return NextResponse.json(
        { message: "Email is already exists" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 12);

    const verificationCode = generateVerificationCode();
    const user = {
      id: Date.now().toString(),
      email,
      password: hashedPassword,
      isVerified: false,
      verificationCode,
      verificationCodeExpires: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 часа
      createdAt: new Date(),
    };

    users.push(user);

    await sendVerificationEmail(email, verificationCode);

    return NextResponse.json(
      { message: "Code was sent to your email" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
