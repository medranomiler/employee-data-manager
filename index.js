const {prompt} = require("inquirer")
require('console.table')
const db = require('./db')
const mysql = require('mysql2')



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

async function viewDepartments(){
    const departments = await db.viewAllDepartments();
    console.table(departments);
    questions();
}
async function viewRoles(){
    const roles = await db.viewAllRoles();
    console.table(roles);
    questions();
}
async function viewEmployees(){
    const employees = await db.viewAllEmployees();
    console.table(employees);
    questions();
}
async function addDepartment(){
    const departments = await db.addNewDepartment();
    console.table(departments)
    questions();
}
function quit(){
    console.log("//////////////////////////")
    console.log("//                      //")
    console.log("//                      //")
    console.log("//        GOODBYE       //")
    console.log("//                      //")
    console.log("//                      //")
    console.log("//////////////////////////")
}

init();
