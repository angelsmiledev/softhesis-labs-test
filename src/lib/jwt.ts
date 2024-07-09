import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "softhesis-labs";

export function generateToken(email: string): string {
  return jwt.sign({ email }, SECRET_KEY, { expiresIn: "1h" });
}

export function verifyToken(token: string): { email: string } | null {
  try {
    return jwt.verify(token, SECRET_KEY) as { email: string };
  } catch (error) {
    return null;
  }
}
