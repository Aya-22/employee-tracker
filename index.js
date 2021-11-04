const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const mysql = require("mysql2");
// const cTable = require('console.table');
const { table } = require("console");

const db = mysql.createConnection(
  {
    host: "localhost",
    // MySQL username,
    user: "root",
    // TODO: Add MySQL password here
    password: "Psalm231",
    database: "employee_db",
  },
  console.log(`Connected to the employee_db database.`)
);

const promptQuestion = () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "question",
        message: "What would you like to do?",
        choices: [
          "View all employees",
          "Add employee",
          "Update employee role",
          "View all roles",
          "Add role",
          "View all departments",
          "Add department",
        ],
      },
    ])

    .then(choiceElected);
};

promptQuestion();

function choiceElected({ question }) {
  switch (question) {
    case "View all employees":
      return viewAllEmployees();
    case "Add employee":
      break;
    case "Update employee role":
      break;
    case "View all roles":
      return viewAllRoles();
    case "Add role":
      break;
    case "View all departments":
      return viewAllDepartments();
    case "Add department":
      break;
  }
}

db.connect(function (err) {
  if (err) throw err;
  console.log("Connected!");
});

function viewAllEmployees() {
  const employee = "SELECT * FROM employee";

  db.query(employee, function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
    return promptQuestion();
  });
}

function viewAllRoles() {
  const roles = "SELECT * FROM employee_role";

  db.query(roles, function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
    return promptQuestion();
  });
}

function viewAllDepartments() {
  const departments = "SELECT * FROM department";

  db.query(departments, function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
    return promptQuestion();
  });
}

// const newEmployeeRole = () => {
//   inquirer.prompt([
//     {
//       type: "list",
//       name: "question",
//       message: "Which employee's role do you want to update?",
//       choices: ["John Doe", "Dave Wade", "Joe Roland", "Stranger Danger"],
//     },
//     {
//       type: "list",
//       name: "question",
//       message: "What is the employees role?",
//       choices: ["Sales Lead", "Salesperson", "Sales Manager"],
//     }


//   ])}


function updateEmployeeRole() {


 const updateRole = "UPDATE employee_role SET title = ? WHERE first_name = ? AND last_name = ?";

  db.query(updatedRole, function (err, results) {
    if (err) {
      console.log(err);
    }
    console.table(results);
    
    return promptQuestion();
  });
  
  inquirer.prompt([
    {
      type: "list",
      name: "employeeName",
      message: "Which employee's role do you want to update?",
      choices: ["John Doe", "Dave Wade", "Joe Roland", "Stranger Danger"],
    }
  ])
  .then((result) => {
    console.log(result);
  });
inquirer.prompt([
  {
      type: "list",
      name: "employeeRole",
      message: "What is the employees role?",
      choices: ["Sales Lead", "Salesperson", "Sales Manager"],
    }
 ])

};

//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//         return;
//       }
//       res.json({
//         message: 'success',
//         data: body
//       });
//     });
//   });

// //   Update
//   app.put('/Update employee role', (req, res) => {
//     const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
//     const params = [req.body.review, req.params.id];

//     db.query(sql, params, (err, result) => {
//       if (err) {
//         res.status(400).json({ error: err.message });
//       } else if (!result.affectedRows) {
//         res.json({
//           message: 'Movie not found'
//         });
//       } else {
//         res.json({
//           message: 'success',
//           data: req.body,
//           changes: result.affectedRows
//         });
//       }
//     });
//   })};
