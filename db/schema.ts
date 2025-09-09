import { sqliteTable, text, integer } from 'drizzle-orm/sqlite-core';

export const users = sqliteTable('users', {
    id:integer('id').primaryKey({autoIncrement:true}),
    name: text('name').notNull(),
    password: text('password').notNull(),
    // list_id:integer('list_id')
    //     .notNull()
        // .references(() => lists.id),
        // example of how to reference other tables here
});

// export const lists = sqliteTable('lists', {
//     id:integer('id').primaryKey({ autoIncrement:true }),
//     name: text('name').notNull(),
// });

export type User = typeof users.$inferSelect;
// User table type for easy implementation