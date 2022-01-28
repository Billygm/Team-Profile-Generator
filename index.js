const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

const managerQuestions = [
  {
    type: "input",
    message: "Input the Managers name",
    name: "name",
  },
  {
    type: "input",
    message: "Input the Managers ID number",
    name: "id",
  },
  {
    type: "input",
    message: "Input the Managers email",
    name: "email",
  },
  {
    type: "input",
    message: "Input the Managers officeNumber",
    name: "officeNumber",
  },
];

const engineerQuestions = [
  {
    type: "input",
    message: "Input the Engineers name",
    name: "name",
  },
  {
    type: "input",
    message: "Input the Engineers ID number",
    name: "id",
  },
  {
    type: "input",
    message: "Input the Engineers email",
    name: "email",
  },
  {
    type: "input",
    message: "Input the Engineers GitHub username",
    name: "github",
  },
];

const internQuestions = [
  {
    type: "input",
    message: "Input the Interns name",
    name: "name",
  },
  {
    type: "input",
    message: "Input the Interns ID number",
    name: "id",
  },
  {
    type: "input",
    message: "Input the Interns email",
    name: "email",
  },
  {
    type: "input",
    message: "Input the Interns school",
    name: "school",
  },
];

const nextActionQuestion = {
  type: "list",
  message: "what would you like to do next?",
  name: "nextAction",
  choices: ["Add an Engineer", "Add an Intern", "Done adding employees"],
};

async function askForManagerInfo() {
  const answers = await inquirer.prompt(managerQuestions);
  console.log(answers);

  employees.push(new Manager(answers.name, answers.id, answers.email, answers.officeNumber));
  console.log(employees);

  console.log(`Manager ${answers.name} successfully added.`);

  askForNextAction();
}

async function askForEngineerInfo() {
  const answers = await inquirer.prompt(engineerQuestions);

  employees.push(new Engineer(answers.name, answers.id, answers.email, answers.github));
  console.log(employees);

  console.log(`Engineer ${answers.name} successfully added.`);

  askForNextAction();
}

async function askForInternInfo() {
  const answers = await inquirer.prompt(internQuestions);

  employees.push(new Intern(answers.name, answers.id, answers.email, answers.school));
  console.log(employees);

  console.log(`Intern ${answers.name} successfully added.`);

  askForNextAction();
}

async function askForNextAction() {
  const answer = await inquirer.prompt(nextActionQuestion);
  console.log(answer);

  if (answer.nextAction === "Add an Engineer") {
    askForEngineerInfo();
  } else if (answer.nextAction === "Add an Intern") {
    askForInternInfo();
  } else if (answer.nextAction === "Done adding employees") {
    fs.writeFile("./dist/team.html", generateHtml(employees), (err) =>
      err ? console.error(err) : console.log("Success! Team Created!")
    );
  }
}

function generateHtml(employees) {
    let employeeHtml = ""
    employees.forEach(employee => {
        let thirdValue
        if (employee.getRole() === 'Manager') {
            thirdValue = employee.officeNumber
        } else if (employee.getRole() === 'Engineer') {
            thirdValue = employee.github
        } else if (employee.getRole() === 'Intern') {
            thirdValue = employee.school
        }
        employeeHtml += `<div><h2>${employee.name}</h2><h2>${employee.getRole()}</h2><ul><li>${employee.id}</li><li>${employee.email}</li><li>${thirdValue}</li></ul></div>`
    });
return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
${employeeHtml}
</body>
</html>
`
}

askForManagerInfo();
