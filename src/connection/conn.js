import { PreSqlClient } from '@enjoys/presql';
export const presql = new PreSqlClient({
    pre_user: "root",
    pre_password: "",
    pre_host: "localhost",
    pre_database: "jobcy",
    pre_port: 3306,
    showConnErrors: true,
    resultLogs: true,
    tableJoiner: "_", // optional field, change only table joiner are different from _\
});
