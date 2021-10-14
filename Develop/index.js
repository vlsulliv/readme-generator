// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions =  [
		{
			type: 'input',
			message: 'Enter a title: ',
			name: 'title'
		},
		{
			type: 'input',
			message: 'Enter the repository URL: ',
			name: 'repo'
		},
		{
			type: 'input',
			message: 'Enter a description: ',
			name: 'desc'
		},
		{
			type: 'input',
			message: 'Enter Installation details: ',
			name: 'install'
		},
		{
			type: 'input',
			message: 'Enter Usage details: ',
			name: 'usage'
		},
		{
			type: 'list',
			message: 'Choose a license',
			name: 'license',
			choices: ['MIT','None']
		},
		{
			type: 'input',
			message: 'Who contributed to this repo?',
			name: 'contributing'
		},
		{
			type: 'input',
			message: 'Enter Tests details: ',
			name: 'tests'
		},
		{
			type: 'input',
			message: 'Enter Questions details: ',
			name: 'questions'
		},
	];


  
// TODO: Create a function to write README file
function writeToFile(fileName, userInput) {
	fs.writeFile(fileName, userInput, (err) => {
        err ? console.error(err) : console.log('Readme file generated!');
    })
}

// TODO: Create a function to initialize app
function init() {
	inquirer
		.prompt(questions)
			.then((userInput) => {
				writeToFile("markdown.md", generateMarkdown.generateMarkdown(userInput))
			} )

}

// Function call to initialize app
init();
