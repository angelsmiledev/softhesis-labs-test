import sqlite3 from "sqlite3";
import { open } from "sqlite";

async function openDb() {
  return open({
    filename: "./mydb.sqlite",
    driver: sqlite3.Database,
  });
}

export async function getUser(email: string) {
  const db = await openDb();
  return db.get("SELECT * FROM users WHERE email = ?", [email]);
}

export async function updateUser(
  email: string,
  name: string,
  password: string
) {
  const db = await openDb();
  await db.run("UPDATE users SET name = ?, password = ? WHERE email = ?", [
    name,
    password,
    email,
  ]);
}
