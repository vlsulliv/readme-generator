// imported packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');
const generateMarkdown = require('./assets/js/generateMarkdown');

// questions array 
const questions = [
	{
		type: 'input',
		message: 'Enter a title: ',
		name: 'title'
	},
	{
		type: 'input ',
		message: 'Enter URL for relatvent images: ', 
		name: 'repo'
	},
	{
		type: 'input',
		message: 'Enter project description: ',
		name: 'description'
	},
	{
		type: 'input',
		message: 'What was your motivation for creating the project? ',
		name: 'motivation'
	},
	{
		type: 'input',
		message: 'Frameworks used to create app: ',
		name: 'desc'
	},
	{
		type: 'input',
		message: 'How do users download your app? ',
		name: 'install'
	},
	{
		type: 'input',
		message: 'Provide instructions for app usage: ', 
		name: 'usage'
	},
	{
		type: 'input',
		message: 'Was there any contributers',
		name: 'contributors'

	},
	{
		type: 'input',
		message: 'Enter Tests details: ',
		name: 'tests',
		default: "npm test"
	},
	{
		type: 'list',
		message: 'Choose a license',
		name: 'license',
		choices: [ 'Apache 2.0', 'MIT', 'Creative Commons', 'Zlib', 'GNU' ]
	},
	{
		type: 'input',
		message: 'Enter contact email for questions/suggestions: ',
		name: 'questions'
	}
];

// function to write README file
function writeToFile(fileName, userInput) {
	fs.writeFile(fileName, userInput, (err) => {
		err ? console.error(err) : console.log('Readme file generated!');
	});
}

// function to initialize app
function init() {
	inquirer.prompt(questions).then((userInput) => {
		writeToFile('markdown.md', generateMarkdown.generateMarkdown(userInput));
	});
}

// initialize app
init();
