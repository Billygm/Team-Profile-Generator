const inquirer = require("inquirer");
const fs = require("fs");
const Employee = require("./lib/Employee")
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
    }
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
    }
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
    }
];

const nextActionQuestion = {
        type: "input",
        message: "what would you like to do next?",
        choices: [
            "Add an Engineer",
            "Add an Intern",
            "Done adding employees",
        ]
};


async function askForManagerInfo() {
    const answers = await inquirer.prompt(managerQuestions)
    console.log(answers)

    employees.push(new Manager(answers));

    console.log(`Manager ${answers.name} successfully added.`)
    
    askForNextAction();
};

async function askForEngineerInfo() {
    const answers = await inquirer.prompt(engineerQuestions)
    
    employees.push(new Engineer(answers));

    console.log(`Engineer ${engineerName} successfully added.`)
    
    askForNextAction();
};

async function askForInternInfo() {
    const answers = await inquirer.prompt(internQuestions)
    
    employees.push(new Intern(answers));

    console.log(`Intern ${internName} successfully added.`)
    
    askForNextAction();
};

async function askForNextAction() {
    const answer = await inquirer.prompt(nextActionQuestion);
    console.log(answer);


    if(answer.nextquestion === "Add an Engineer"){
        askForEngineerInfo()
    } else if(answer.nextquestion === "Add an Intern"){
        askForInternInfo()
    } else if(answer.nextquestion === "Done adding employees"){
        fs.writeFile("./dist/team.html", generateHtml(employees), (err) =>
        err ? console.error(err) : console.log("Success! Team Created!")
    )};
};

function generateHtml(employees) {
    return employees
}


askForManagerInfo();
