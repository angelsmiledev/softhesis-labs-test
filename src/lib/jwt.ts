import jwt from "jsonwebtoken";

const SECRET_KEY = process.env.JWT_SECRET_KEY || "softhesis-labs";

export const generateToken = (email: string, name: string): string => {
  return jwt.sign({ email, name }, SECRET_KEY, { expiresIn: "1h" });
};

export const decodeToken = (token: string) => {
  try {
    return jwt.decode(token);
  } catch (error) {
    return null;
  }
};
