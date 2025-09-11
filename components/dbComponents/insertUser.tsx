import { getDb } from "@/db/db";
import { SQLiteBindValue } from "expo-sqlite";

export default async function insertUser(username: SQLiteBindValue, password: SQLiteBindValue) {
    try {
        const db = await getDb();
        await db.runAsync(`INSERT INTO users (username, password) VALUES (?, ?);`, username, password);
    }   catch (err) {
      console.error("Error inserting user:", err);
    }
  }