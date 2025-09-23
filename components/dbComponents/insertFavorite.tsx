import { getDb } from "@/db/db";
import { SQLiteBindValue } from "expo-sqlite";

export default async function insertFavorite() {
    try {
        const db = await getDb();
        await db.runAsync();
    }   catch (err) {
      console.error("Error inserting favorite:", err);
    }
  } 

//   idea: upon inserting a favorite, create new book and insert into Book Table. 
//       Then insert a new compound value of Book and User into favorites table
//       This way both tables are only populated as needed.
//       Book contains info from API call