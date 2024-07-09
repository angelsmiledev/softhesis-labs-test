import { NextRequest, NextResponse } from "next/server";
import { getUser, updateUser } from "@/lib/db";

export const GET = async (request: NextRequest) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }
  try {
    const user = await getUser(email);
    if (user) return NextResponse.json({ user });
    else return NextResponse.json({ error: "User not found" }, { status: 404 });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};

export const PUT = async (request: NextRequest) => {
  const { email, name, password } = await request.json();

  if (!email || !name || !password) {
    return NextResponse.json(
      { error: "Email, name, and password are required" },
      { status: 400 }
    );
  }

  try {
    await updateUser(email, name, password);
    return NextResponse.json({ message: "User updated successfully" });
  } catch (err) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
