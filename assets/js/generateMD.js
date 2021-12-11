// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === `Apache 2.0`) {
        return `![License](https://opensource.org/licenses/Apache-2.0)`;
    } else if(license === `MIT`) {
        return `![License: MIT](https://opensource.org/licenses/MIT)`;
    } else if (license === `Creative Commons`) {
      return `![License: CC0-1.0](http://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (license === `Zlib`) {
        return `![License: Zlib](https://opensource.org/licenses/Zlib)`;
    } else if (license === 'GNU GPL v3') {
        return `![License: GPL v3](https://www.gnu.org/licenses/gpl-3.0)`;
    } else if (license === 'GitHub') {
        return `![License: Github](https://img.shields.io/github/languages/top/${userResponses.name}/${userResponses.title}?style=flat&logo=appveyor`;
    } else {
      return ` `;
    }
    return '';
}

// function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== None) {
    return `[License](#license)`;
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

  if(license !== null && license !== '') {
    return `## License <br> ${license}`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(userResponses) {
  return `# ${userResponses.title}
${renderLicenseBadge(userResponses.License)};

##  Description

${userResponses.Description} 

Table of Contents
* [Title](#Title)<br>
* [Description](#description)<br>
* [Usage](#usage)<br>
* [Technologies](#tech)<br>
* [Installation](#Installation)<br>
* [Usage](#Usage)<br>
* [Images](#images)<br>
* [License](#license)<br>   

## Technologies<br>

${userResponses.tech}<br>   

## Installation<br>

${userResponses.Installation}<br>   

## Usage<br>

${userResponses.Usage}<br>    

## Contributors<br>

${userResponses.Contributers}<br>    

## Testing<br>

${userResponses.Testing}<br>

## license<br>

For any questions or suggestions about this project, contact me <br>
 ${userResponses.Questions}`;  

}

module.exports = generateMarkdown;
