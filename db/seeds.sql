use employees_db;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department
    (name)
    VALUES
    ("Sales"),
    ("Marketing"),
    ("Human Resources"),
    ("Accounting"),
    ("Customer Service");

INSERT INTO role
    (title, salary, department_id)
    VALUES
    ("Sales Manager", 150000, 1),
    ("Marketing Director", 120000, 2),
    ("HR Manager", 75000, 3),
    ("HR Administrator", 50000, 3),
    ("Payroll Administrator", 50000, 4),
    ("Payroll Manager", 75000, 4),
    ("Customer Service Associate", 40000, 5),
    ("Customer Service Manager", 50000, 5);
        
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
    VALUES
    ("Darren", "Medrano", 1, 1);
    