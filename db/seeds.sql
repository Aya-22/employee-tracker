
INSERT INTO department (dep_name)
VALUES ("Engineering"),
("Finance"), ("Legal"), ("Sales");

INSERT INTO employee_role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 4), ("Salesperson", 80000, 4), ("Salesperson", 80000, 4), ("Sales Manager", 150000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 1, 1), ("Dave", "Wade", 2, 1), ("Joe", "Roland", 3, 1), ("Stranger", "Danger", 4, 1)