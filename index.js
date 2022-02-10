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
  name: "nextAction",
  message: "what would you like to do next?",
  choices: ["Add an Engineer", "Add an Intern", "Done adding employees"],
};

async function askForManagerInfo() {
  const answers = await inquirer.prompt(managerQuestions);
  console.log(answers);

  employees.push(
    new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
  );
  console.log(employees);

  console.log(`Manager ${answers.name} successfully added.`);

  askForNextAction();
}

async function askForEngineerInfo() {
  const answers = await inquirer.prompt(engineerQuestions);

  employees.push(
    new Engineer(answers.name, answers.id, answers.email, answers.github)
  );
  console.log(employees);

  console.log(`Engineer ${answers.name} successfully added.`);

  askForNextAction();
}

async function askForInternInfo() {
  const answers = await inquirer.prompt(internQuestions);

  employees.push(
    new Intern(answers.name, answers.id, answers.email, answers.school)
  );
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
  let employeeHtml = "";
  employees.forEach((employee) => {
    let thirdTitle;
    let thirdValue;
    if (employee.getRole() === "Manager") {
      thirdTitle = "Office number:";
      thirdValue = employee.officeNumber;
    } else if (employee.getRole() === "Engineer") {
      thirdTitle = "GitHub:";
      thirdValue = employee.github;
    } else if (employee.getRole() === "Intern") {
      thirdTitle = "School:";
      thirdValue = employee.school;
    }
    employeeHtml += `<div class="d-flex p-3 align-content-start flex-column">
  <h2>${employee.name}</h2>
  <h3>${employee.getRole()}</h3>
  <ul>
    <li>ID: ${employee.id}</li>
    <li>Email: ${employee.email}</li>
    <li>${thirdTitle} ${thirdValue}</li>
  </ul>
</div>`;
  });

  return `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team-Profile</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous"/>
  </head>
  <body class="bg-dark text-light">
    <h1 class="container-fluid text-center">My Team</h1>
    <div class="d-flex p-3 bd-highlight flex-wrap">
      ${employeeHtml}
    </div>
  </body>
</html>`;
}

askForManagerInfo();
