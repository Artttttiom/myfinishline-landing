import instance from "@/app/lib/utils/instance";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const { data } = await instance.get("/stripe/products");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({
      status: "error",
      message: "Error getting products",
    });
  }
};
