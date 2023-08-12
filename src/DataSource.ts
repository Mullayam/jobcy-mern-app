import { DataSource } from 'typeorm'
export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: process.env.DB_USER as string,
    password: process.env.DB_PASS as string,
    database: process.env.DB_NAME as string,
    timezone:"local",
    synchronize: true,
    logging: true,
    entities: ["./factory/entities/**/*.ts"],
    // subscribers: [],
    // migrations: [],
})