import { NextResponse } from "next/server";
import { migrate } from "@/lib/db";

export const GET = async () => {
  try {
    await migrate();
    return NextResponse.json({
      message: "Migrated successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 }
    );
  }
};
