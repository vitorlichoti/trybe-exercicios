import mysql from 'mysql2/promise';

export default mysql.createPool({
  host: process.env.DB_HOSTNAME,
  user: process.env.DB_USER,
  password: process.env.MYSQL_ROOT_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});