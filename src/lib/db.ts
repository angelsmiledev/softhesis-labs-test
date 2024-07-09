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
    `
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email VARCHAR(255) UNIQUE NOT NULL,
          name BOOL NOT NULL,
          password DOUBLE NOT NULL
        );
      `
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
