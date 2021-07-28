// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'Enter a project title: '
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a description for the project: '
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Provide installation instructions for the project: '
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information for the project: '
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide contribution guidelines for the project: '
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions for the project: '
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for the project: ',
        choices: ['MIT', 'Apache', 'Apache 2', 'compliant', 'BSD', 'GPL', 'GPL v3', 'LGPL v3', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username: '
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address: '
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    console.log(data);
    return fs.writeFile(fileName, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Done!");

    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((answer) => {
            writeToFile("README.md", generateMarkdown(answer));
        });
}

// Function call to initialize app
init();
