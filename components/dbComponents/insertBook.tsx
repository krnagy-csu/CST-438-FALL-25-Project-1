import { getDb } from "@/db/db";
import { SQLiteBindValue } from "expo-sqlite";

export default async function insertBook(title:SQLiteBindValue, author:SQLiteBindValue, image:SQLiteBindValue) {
    try {
        const db = await getDb(); 
        await db.runAsync(
            'INSERT INTO books (title, author, imageURL) VALUES (?, ?, ?);',
            title, author, image);

    }   catch (err) {
      console.error("Error inserting book:", err);
    }
  } 