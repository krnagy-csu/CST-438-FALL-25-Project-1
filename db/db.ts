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
        `
        PRAGMA foreign_keys = ON;

        CREATE TABLE IF NOT EXISTS users (
        userId INTEGER PRIMARY KEY NOT NULL,
        username TEXT NOT NULL,
        password TEXT NOT NULL, 
        FOREIGN KEY(bookId) REFERENCES books ON DELETE CASCADE
        );

        CREATE TABLE IF NOT EXISTS books (
        bookId INTEGER PRIMARY KEY NOT NULL,
        title TEXT NOT NULL,
        author TEXT NOT NULL,
        imageURL TEXT NOT NULL
        );

        CREATE TABLE IF NOT EXISTS user_favorites (
        userId INTEGER NOT NULL,
        bookId INTEGER NOT NULL,
        PRIMARY KEY (userId, bookId),
        FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
        FOREIGN KEY (bookId) REFERENCES books(bookId) ON DELETE CASCADE

        CREATE TABLE IF NOT EXISTS user_reviews (
        reviewId INTEGER NOT NULL, 
        userId INTEGER NOT NULL,
        bookId INTEGER NOT NULL,
        PRIMARY KEY (userId, bookId, reviewId),
        FOREIGN KEY (userId) REFERENCES users(userId) ON DELETE CASCADE,
        FOREIGN KEY (bookId) REFERENCES books(bookId) ON DELETE CASCADE,
        reviewText TEXT NOT NULL
        )
);
      `
    )
}