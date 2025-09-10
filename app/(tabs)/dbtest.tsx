import React, {useState} from "react";
import { Text, Button, TextInput, View, ScrollView, StyleSheet } from "react-native";
// import type { User } from "@/components/types";
import insertUser from "@/components/dbComponents/insertUser";
import { getDb } from "@/db/db";

export default function dbTest() {
  const [username, setUsername] = useState("");
//   const [selectedUser, setSelectedUser] = useState<User | null>(null);

  async function handleInsert() {
    try {
      await insertUser("gabe", "test");
      console.log("User inserted successfully!");

      const db = await getDb();
      const rows = await db.getAllAsync("SELECT * FROM users");
      console.log("Users in DB:", rows);
    } catch (err) {
      console.error("Error inserting user:", err);
    }
  }

  async function getAllUsers() {
    try {
        const db = await getDb();
        const rows = await db.getAllAsync("SELECT * FROM users");
        console.log("Users in DB:", rows);
    }   catch (err) {
      console.error("Error inserting user:", err);
    }
  }

  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button title="Insert User" onPress={ handleInsert }/>
      <Button title="Get User" onPress={getAllUsers} />
      <TextInput
        style={{
          borderWidth: 1,
          borderColor: "gray",
          padding: 8,
          width: 200,
          marginBottom: 10,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({

});