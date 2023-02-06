const {prompt} = require("inquirer")
// const table = require("console.table")
const db = require('./db')

function init(){
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
            name: 'View all roles',
            value: 'VIEW_ROLES'
        },
        {
            type: 'input',
            name: 'View all employees',
            value: 'VIEW_EMPLOYEES'
        },
        {
            type: 'input',
            name: 'View all departments',
            value: 'username'
        }
            ]
    }])
    switch (choice){
        case 'VIEW_DEPARTMENTS':
            return viewDepartments();
        case 'VIEW_ROLES':
            return viewRoles();
        }
}

async function viewDepartments(){
    const departments = await db.viewAllDepartments();
    console.table(departments)
    questions()
}

async function viewDepartments(){
    const departments = await db.viewAllDepartments();
    console.table(departments)
    questions()
}

async function viewDepartments(){
    const departments = await db.viewAllDepartments();
    console.table(departments)
    questions()
}

init()