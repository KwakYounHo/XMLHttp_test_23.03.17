import mysql from 'mysql2'
export default mysql.createConnection({
  host : '192.168.0.177',
  port : 3306,
  user : 'test',
  password : '1234',
  database : 'testdb'
});