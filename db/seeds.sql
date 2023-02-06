use employees_db;

SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;

INSERT INTO department
    (name)
    VALUES
    ("Sales"),
    ("Hiring");

INSERT INTO role
    (title, salary, department_id)
    VALUES
    ("Sales Manager", 100000, 1);
        
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
    VALUES
    ("Darren", "Medrano", 1, 1);
    