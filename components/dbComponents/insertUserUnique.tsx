import { getDb } from "@/db/db";
import { SQLiteBindValue } from "expo-sqlite";

export default async function insertUserUnique(username: SQLiteBindValue, password: SQLiteBindValue) {
    try {
        const db = await getDb();
        await db.runAsync(
            `INSERT INTO users (username, password) 
            VALUES (?, ?);`,
            username, password);
        console.log("Attempting to insert username " + username + " and password " + password);
    }   catch (err) {
      console.error("Error inserting user:", err);
    }
  } 