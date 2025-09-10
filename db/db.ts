import * as SQLite from "expo-sqlite";

let db: SQLite.SQLiteDatabase;

export async function getDb(): Promise<SQLite.SQLiteDatabase> {
  if (!db) {
    db = await SQLite.openDatabaseAsync("BookMark.db");
    await initDatabase(db);
  }
  return db;
}

async function initDatabase(db: SQLite.SQLiteDatabase) {
    await db.execAsync(
        `CREATE TABLE IF NOT EXISTS Users (
        id INTEGER PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL
        );`
    )
}