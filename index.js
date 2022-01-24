const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

const employees = [];

askForManagerInfo()

function askForManagerInfo() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "Input the Managers name",
                name: "title",
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
        ])
        .then((answers) => {

            employees.push(new Manager(answers));

            askForNextAction();
        })
}

function askForNextAction() {
    inquirer
        .prompt([
            {
                type: "input",
                message: "what would you like to do next?",
                choices: [
                    "Add an Engineer",
                    "Add an Intern",
                    "Done adding employees",
                ]
            }
        ])
        .then((answer) => {
            if(answer === "Add an Engineer"){
                askForEngineerInfo()
            } else if(answer === "Add an Intern"){
                askForInternInfo()
            } else if(answer === "Done adding employees"){
                generateHtml()
            }
        })
}

function askForEngineerInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Input the Engineers name",
            name: "title",
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
    ])
    .then((answers) => {

        employees.push(new Engineer(answers));

        askForNextAction();
    })
}

function askForInternInfo() {
    inquirer
    .prompt([
        {
            type: "input",
            message: "Input the Interns name",
            name: "title",
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
    ])
    .then((answers) => {

        employees.push(new Intern(answers));

        askForNextAction();
    })
}
