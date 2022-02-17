// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    {
    type: 'input',
    name: 'title',
    message: 'What is the name of your project?'
},  {
    type: 'input',
    name: 'description',
    message: 'Write a description of your project.'
}, {
    type: 'input',
    name: 'installation',
    message: 'How do you install your app?'
}, {
    type: 'input',
    name: 'usage',
    message: 'How do you use your app?'
}, {
    type: 'input',
    name: 'contribution',
    message: 'How can other users contribute?'
}, {
    type: 'checkbox',
    name: 'license',
    message: 'Chose a license for your project.'
}, {
    type: 'input',
    name: 'test',
    message: 'What are the testing instructions?'
}, {
    type: 'input',
    name: 'github',
    message: 'Enter your github username.'
}, {
    type: 'input',
    name: 'email',
    message: 'Enter your email.'
}

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            return console.log(err);
        }
    })
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers);
        writeToFile("README.md", generateMarkdown(answers));

    });
};

// Function call to initialize app
init();
