// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    { name: 'title', message: 'What is the project title?' },
    { name: 'description', type: 'editor', message: 'What is the project description?' },
    { name: 'installation', type: 'editor', message: 'How to install the project?' },
    { name: 'usage', type: 'editor', message: "What's the usage information?" },
    { name: 'contribution', type: 'editor', message: "What's the contribution guideline?" },
    { name: 'test', type: 'editor', message: "What's the test instruction?" },
    {
        name: 'license',
        type: 'list',
        message: 'What is the project license type?',
        choices: ['GNU GPLv3', 'MIT', 'Apache License 2.0', 'Mozilla Public License 2.0'],
    },
    { name: 'github', message: "What's the github username?" },
    { name: 'email', message: "What's the email address?" },
    { name: 'output', message: "What's the output file name?" },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        if (err) return console.log(err);
        console.log('\n!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!');
        console.log('Readme file is written to ', fileName, ' successfully!');
        console.log('!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!\n');
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        writeToFile(answers.output, generateMarkdown(answers));
    });
}

// Function call to initialize app
init();