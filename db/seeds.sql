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
    ("Bart", "Simpson", 1, 1),
    ("Lisa", "Simpson", 2, null),
    ("Homer", "Simpson", 3, null),
    ("Marge", "Simpson", 4, null),
    ("Maggie", "Simpson", 5, null),
    ("Ned", "Flanders", 6, null),
    ("Chief", "Wiggum", 7, null),
    ("Ralph", "Wiggum", 8, null);
    