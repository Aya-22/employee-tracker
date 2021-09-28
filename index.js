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

const promptUser = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "question",
        message: "What would you like to do?",
        choices:
          ["View all employees", "Add employee", "Update employee role", "View all roles", "Add role", "View all departments", "Add department"],
      },
    ])
    .then((response) => {
        const filename = `${response.name.toLowerCase().split(' ').join('')}.json`;
    
        fs.writeFile(filename, JSON.stringify(response, null, '\t'), (err) =>
          err ? console.log(err) : console.log('Success!')
        );
    });

// Create
app.post('Add employee', ({ body }, res) => {
    const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
      VALUES (?)`;
    const params = [body.movie_name];
    
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        return;
      }
      res.json({
        message: 'success',
        data: body
      });
    });
  });

//   Update
  app.put('/Update employee role', (req, res) => {
    const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
    const params = [req.body.review, req.params.id];
  
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
      } else if (!result.affectedRows) {
        res.json({
          message: 'Movie not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
  });
