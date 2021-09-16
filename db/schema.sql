DROP DATABASE IF EXISTS
employee_db;

CREATE DATABASE employee_db;

USE employee_db;

DROP TABLE IF EXISTS department;

CREATE TABLE department (
id INT NOT NULL PRIMARY KEY,
dep_name VARCHAR(30) NOT NULL,
);

DROP TABLE IF EXISTS employee_role;

CREATE TABLE employee_role (
id INT NOT NULL PRIMARY KEY,
title VARCHAR(30) NOT NULL,
salary DECIMAL NOT NULL,
department_id INT NOT NULL
);
DROP TABLE IF EXISTS employee;

CREATE TABLE employee (
id INT NOT NULL PRIMARY KEY,
first_name VARCHAR(30) NOT NULL,
last_name VARCHAR(30) NOT NULL,
role_id INT NOT NULL,
manager_id INT NOT NULL
);





