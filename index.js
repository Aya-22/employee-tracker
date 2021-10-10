const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const mysql = require("mysql2");

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
  inquirer.prompt([
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
  ]);

  //   .then (answer => {

  //     fs.writeFile( (err) => {
  //     err ? console.log(err) : console.log('Success!')
  //     )};

  // }),
};

promptQuestion();

function choiceElected (answers){
  switch (answers) {
    case "View all employees":
    break;
    case "Add employee":
    break;
    case "Update employee role":
    break;
    case "View all roles":
    break;
    case "Add role":
    break;
    case "View all departments":
    break;
    case "Add department":
    break;

  }

};

db.connect(function(err) {  
  if (err) throw err;  
  console.log("Connected!");  
}); 

// Create
// app.post('Add employee', ({ body }, res) => {
//     const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
//       VALUES (?)`;
//     const params = [body.movie_name];
    
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
