import { getDb } from "@/db/db";

jest.mock("@/db/db", () => ({
  getDb: jest.fn(async () => ({
    execAsync: jest.fn(),
    runAsync: jest.fn(),
    getAllAsync: jest.fn(),
  })),
}));

test("getDb returns a db object", async () => {
  const db = await getDb();
  expect(db).not.toBeNull();
  expect(typeof db.execAsync).toBe("function");
});

