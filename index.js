const inquirer = require('inquirer');
const fs = require('fs');
const util = require ('util');

const promptUser = () => {
    inquirer.prompt ([
        {
        type: 'input',
        name: 'question',
        message: 'What would you like to do?',
        choices: 'View all employees, Add employee, Update employee role, View all roles, Add role, View all departments, Add department'
        // switch case
},
])
.then((response) => {
   if (choices)
      console.log('Success!') 
});
}

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) {
            return console.log(err);
        }
        console.log('The file was saved!')
    })

}

    db.query('SELECT * FROM course_names', function (err, results) {
        console.log(results);
      });
