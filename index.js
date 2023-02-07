const {prompt} = require("inquirer")
require('console.table')
const db = require('./db')
const mysql = require('mysql2')


// function that runs on start up of server. Calls the questions function which is the Data Manager main menu
function init(){
{
    console.log("//////////////////////////")
    console.log("//                      //")
    console.log("//       EMPLOYEE       //")
    console.log("//         DATA         //")
    console.log("//       MANAGER_       //")
    console.log("//                      //")
    console.log("//////////////////////////")
    }
    questions()
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// This is the main menu prompt. When an option is chosen, a function is called.
async function questions() {
const {choice} = await prompt([
    {
    type: 'list',
    message: 'What would you like to do?',
    name: 'choice',
    choices: [
        {
            type: 'input',
            name: 'View all departments',
            value: 'VIEW_DEPARTMENTS'
        },
        {
            type: 'input',
            name: 'Add Department',
            value: 'ADD_DEPARTMENT'  
        },
        {
            type: 'input',
            name: 'View all roles',
            value: 'VIEW_ROLES'
        },
        {
            type: 'input',
            name: 'Add Role',
            value: 'ADD_ROLE'  
        },
        {
            type: 'input',
            name: 'View all employees',
            value: 'VIEW_EMPLOYEES'
        },
        {
            type: 'input',
            name: 'Add Employee',
            value: 'ADD_EMPLOYEE'  
        },
        {
            type: 'input',
            name: 'Quit',
            value: 'QUIT'
        }
            ]
    }])
    switch (choice){
        case 'VIEW_DEPARTMENTS':
            return viewDepartments();
        case 'ADD_DEPARTMENT':
            return addDepartment();
        case 'VIEW_ROLES':
            return viewRoles();
        case 'ADD_ROLE':
            return addRole();
        case 'VIEW_EMPLOYEES':
            return viewEmployees();
        case 'ADD_EMPLOYEE':
            return addEmployee();         
        case 'QUIT':
            return quit(); 
}
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// these are the functions that are called from a chosen option from the main menu. They use queries defined in the index.js file within the db folder.

// View Departments
async function viewDepartments(){
    const departments = await db.viewAllDepartments();
    console.table(departments);
    questions();
}

// View Roles
async function viewRoles(){
    const roles = await db.viewAllRoles();
    console.table(roles);
    questions();
}

// View Employees
async function viewEmployees(){
    const employees = await db.viewAllEmployees();
    console.table(employees);
    questions();
}

// Add Deparment
async function addDepartment(){
    const department = await prompt([
        {
            name: "name", 
            message: "Enter the department name:"
        }
    ]);

    await db.addNewDepartment(department);

    questions()
}

// Add Role
async function addRole(){
    const departments = await db.viewAllDepartments();
    console.log(departments)
    const departmentsList = departments.map(({ id, name }) => ({
       name: name,
       value: id 
    }));

    const role = await prompt ([
        {
            name: "title",
            message: "Enter the role:"

        },
        {
            name: "salary",
            message: "Enter the salary:"
        },
        {
            type: "list",
            name: "department_id",
            message: "Choose the department:",
            choices: departmentsList
        }
    ])

    await db.addNewRole(role)

    questions()
}

// Add Employee
async function addEmployee(){
    const roles = await db.viewAllRoles();
    const employees = await db.viewAllEmployees();

    const employee = await prompt ([
        {
            name: "first_name",
            message: "Enter the Employee's first name:"
        },
        {
            name: "last_name",
            message: "Enter the Employee's last name:"
        },
    ]);

    const rolesList = roles.map(({ id, title }) => ({
        name: title, 
        value: id
    }));

    const { roleId } = await prompt ({
        type: "list",
        name: "roleId",
        message: "Choose the employee's role:",
        choices: rolesList
    });

    employee.role_id = roleId;

    const managersList = employees.map(({ id, first_name, last_name }) => ({
        name: `${first_name} ${last_name}`,
        value: id
    }));
    managersList.unshift({ name: "None", value: null});

    const { managerId } = await prompt ({
        type: "list",
        name: "managerId",
        message: "Choose the employee's manager:",
        choices: managersList
    });

    employee.manager_id = managerId;

    await db.addNewEmployee(employee);

    questions();
}
// ------------------------------------------------------------------------------------------------------------------------------------------------------
// this is the quit function that closes node.
function quit(){
    console.log("//////////////////////////")
    console.log("//                      //")
    console.log("//                      //")
    console.log("//        GOODBYE       //")
    console.log("//                      //")
    console.log("//                      //")
    console.log("//////////////////////////")

    process.exit(0)
}

init();
