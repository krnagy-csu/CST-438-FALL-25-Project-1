// insertFavorite.tsx (Corrected)

import { getDb } from "@/db/db";
import { SQLiteBindValue } from "expo-sqlite";
import insertBook from "./insertBook";
import { Book } from "@/app/(tabs)/search";

export default async function insertFavorite(book:Book) {
    try {
        const db = await getDb();
        
        let title:SQLiteBindValue = book.title ?? "Unknown Title";
        let author:SQLiteBindValue;
        if (book.author_name && book.author_name.length > 0) {
            author = book.author_name.join(', ');
        } else {
            author = "Unknown Author"; 
        }

        let image:SQLiteBindValue = book.cover_i 
            ? `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg`
            : "https://example.com/placeholder.jpg"; 

        await insertBook(title, author, image); 
        

    }   catch (err) {
      console.error("Error inserting favorite:", err);
    }
}