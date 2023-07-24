const { PreSqlClient } = require('@enjoys/presql')
exports.presql = new PreSqlClient({
  pre_user: "root", //db username
  pre_password: "", // dbpassword
  pre_host: "localhost", //db host
  pre_database: "jobcy", //database name
  pre_port: 3306,
  showConnErrors: true, //optional field show connection log ,default false
  resultLogs: true, //optional field ,show results in console,default false
  tableJoiner: "_", // optional field, change only table joiner are different from _\
}); 