const connection = require('./connection')

class DB {
    constructor(connection){
        this.connection = connection;
    }
    viewAllDepartments(){
        return this.connection.query(
            'SELECT * FROM department'
        )
    }
    viewAllRoles(){
        return this.connection.query(
            'SELECT * FROM role'
            )
    }
    viewAllEmployees(){
        return this.connection.query(
            'SELECT * FROM employee'
            )
    }
}

module.exports = new DB(connection)