import path from "path";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const dbPath = path.join(process.cwd(), "softhesis-labs.sqlite");

const openDb = async () => {
  return open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
};

export const migrate = async () => {
  const db = await openDb();
  await db.run(
    "CREATE TABLE IF NOT EXISTS users (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR(255) UNIQUE NOT NULL, name VARCHAR(255) NOT NULL, password VARCHAR(255) NOT NULL)"
  );
};

export const seed = async () => {
  const db = await openDb();
  await db.run(
    "INSERT INTO users(email, name, password) VALUES ('demo@softhesislabs.com', 'Fdemo Ldemo', '123123')"
  );
};

export const getUser = async (email: string) => {
  const db = await openDb();
  return db.get("SELECT * FROM users WHERE email = ?", [email]);
};

export const updateUser = async (
  email: string,
  name: string,
  password: string
) => {
  const db = await openDb();
  await db.run("UPDATE users SET name = ?, password = ? WHERE email = ?", [
    name,
    password,
    email,
  ]);
};
