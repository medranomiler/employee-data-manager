const connection = require('./connection')

// this is my function to handle queries to the db
class db {
    constructor(connection){
        this.connection = connection;
    }
    viewAllDepartments = () => {
        return this.connection.query('SELECT * FROM department');
    }
    viewAllRoles(){
        return this.connection.query('SELECT * FROM role');
    }
    viewAllEmployees(){
        return this.connection.query('SELECT * FROM employee');
    }
    addNewDepartment(department) {
        return this.connection.query("INSERT INTO department SET ?", department);
    }
    addNewRole(role) {
        return this.connection.query("INSERT INTO role SET ?", role);
    }
    addNewEmployee(employee) {
        return this.connection.query("INSERT INTO employee SET ?", employee);
    }
}


module.exports = new db(connection)