// external packages
const fs = require('fs');
const inquirer = require('inquirer');
const chalk = require('chalk');

// interal modules
const generateMarkdown = require('./assets/js/generateMarkdown');

// declarations
const { time } = require('console');
let output = "./output/markdown.md";
let ans = [];

const questions = [{
		type: 'input',
		message: 'Enter project title: ',
		name: 'title',
		default: 'title',
		validate: function(answer) {
			answer > 0?  true :  console.log("Enter a valid project name");
		}
	},
	{
		type: 'input',
		message: 'Enter contact email for questions/suggestions: ',
		name: 'questions'
	},
	{
		type: 'input',
		message: 'Enter your github username: ',
		name: 'getUN',
		validate: function(answer) {
			answer > 0?  true :  console.log("Enter a valid user name");
		}
	},
	{
		type: 'input',
		message: 'Enter project description: ',
		name: 'description',
		validate: function(answer) {
			answer > 0?  true :  console.log("Enter a valid description");
		}
	},
	{
		type: 'input',
		message: 'instructions for download and usage: ', 
		name: 'usage'
	},
	{
		type: 'input',
		message: 'Frameworks used to create app: ',
		name: 'tech'
	},	
	{
		type: 'input ',
		message: 'Enter URL for relatvent images: ', 
		name: 'images',
		validate: function(answer) {
			answer > 0 || typeof answer == String? true :  console.log("Enter a valid user name");
		}
	},
	{
		type: 'list',
		message: 'Choose a license',
		name: 'license',
		choices: [ 'Apache 2.0', 'MIT', 'Creative Commons', 'Zlib', 'GNU' ],
	},
];

function writeToFile(fileName, userInput) {
	return fs.writeFile(path.join(process.cwd(), fileName), userInput);
};

function init() { 
	try {
	inquirer.prompt(questions).then((userResponses) => {
	 	writeToFile("Readme.md", generateMarkdown({...userResponses}));
	})} catch (error) {
		console.log(error) && process.exit;
	};
};

init();