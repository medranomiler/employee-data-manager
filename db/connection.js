const mysql = require('mysql2');
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: 'root',
      // MySQL password
      password: 'MYSQL-PASSWORD',
      database: 'employees_db'
    },
    console.log(`Connected to the classlist_db database.`)
  );

  module.exports = db