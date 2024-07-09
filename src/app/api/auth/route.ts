import { NextRequest, NextResponse } from "next/server";
import { getUser } from "@/lib/db";
import { generateToken } from "@/lib/jwt";

export const POST = async (request: NextRequest) => {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { message: "Email and Password are required" },
      { status: 400 }
    );
  }

  try {
    const user = await getUser(email);

    if (!user)
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );

    if (user.password != password)
      return NextResponse.json(
        { message: "Invalid credentials" },
        { status: 401 }
      );

    const accessToken = generateToken(email);
    return NextResponse.json({ accessToken });
  } catch (err) {
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
};
