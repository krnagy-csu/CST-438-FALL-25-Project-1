import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export async function getDb(): Promise<SQLite.SQLiteDatabase> {
  db = await SQLite.openDatabaseAsync("BookMark.db");
  await initDatabase(db);
  return db;
}

export async function initDatabase(db: SQLite.SQLiteDatabase) {
    await db.execAsync(
        `
        CREATE TABLE IF NOT EXISTS users (
        userId INTEGER PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
        );
      `
    )
    console.log("db initialized");
}