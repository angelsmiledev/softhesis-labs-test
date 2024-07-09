import { NextResponse } from "next/server";
import { migrate, seed } from "@/lib/db";

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

export const POST = async () => {
  try {
    await seed();
    return NextResponse.json({
      message: "Seed successfully",
    });
  } catch (err) {
    return NextResponse.json(
      { error: "Server Internal Error" },
      { status: 500 }
    );
  }
};
