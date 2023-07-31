import { PreSqlClient } from '@enjoys/presql'
export const presql = new PreSqlClient({
  pre_user: process.env.DB_USER as string, //db username
  pre_password: process.env.DB_PASS as string, // dbpassword
  pre_host: process.env.DB_HOST as string || "localhost", //db host
  pre_database: process.env.DB_NAME as string, //database name
  pre_port: 3306,
  showConnErrors: true, //optional field show connection log ,default false
  resultLogs: true, //optional field ,show results in console,default false
  tableJoiner: "_", // optional field, change only table joiner are different from _\
}); 