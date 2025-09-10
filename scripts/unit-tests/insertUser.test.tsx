import insertUser from "@/components/dbComponents/insertUser";
import { getDb } from "@/db/db";

test('Test SQL input of username/password', () => {
    const username = "testusername";
    const password = "testpassword";

    insertUser(username, password);
    const testoutputs = getTestUser();

    expect(testoutputs).toBe("");

  });

async function getTestUser() {
    try {
        const db = await getDb();
        const rows = await db.getAllAsync(`SELECT Users.username, Users.password FROM Users WHERE Users.username = "testusername" AND Users.password = "testpassword";`);
        console.log(rows);
        return rows;
    }   catch (err) {
      console.error("Insert Test Fail at getTestUser() Call", err);
    }
  }