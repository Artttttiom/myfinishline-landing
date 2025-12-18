import instance from "@/app/lib/utils/instance";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    const { data } = await instance.get("/user/rewards", {
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    return NextResponse.json(data.data);
  } catch (error) {
    return NextResponse.json(error);
  }
};
