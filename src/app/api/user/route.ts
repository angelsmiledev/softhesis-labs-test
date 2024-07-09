import { NextResponse } from "next/server";
import { getUser, updateUser } from "@/lib/db";

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get("email");

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const user = await getUser(email);
  if (user) {
    return NextResponse.json(user);
  } else {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }
};

export const PUT = async (request: Request) => {
  const { email, name, password } = await request.json();

  if (!email || !name || !password) {
    return NextResponse.json(
      { error: "Email, name, and password are required" },
      { status: 400 }
    );
  }

  await updateUser(email, name, password);
  return NextResponse.json({ message: "User updated successfully" });
};
