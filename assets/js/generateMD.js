// function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // validate and return license based on selection
  if (License === `Apache 2.0`) {
        return `[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
    } else if(License === `MIT`) {
        return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    } else if (License === `Creative Commons`) {
      return `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
    } else if (License === `Zlib`) {
        return `[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)`;
    } else if (License === 'GNU GPL v3') {
        return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      } else {
      return `None`
  }
}

// Tfunction that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (License !== None) {
    return `* [License](#license)` 
  }
  return '';
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(License !== `None`) {
    return `## License
  
  ${data.title} is licensed under a ${license} license.`;
  }
  return '';
}

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.License)};

##  Description

${data.Description} 

### Table of Contents

* [Title](#Title)    
* [ScreenShow](#ScreenShow)    
* [Description](#Description)    
* [Motivations](#Motivations)    
* [Frameworks](#Frameworks)    
* [Installation](#Installation)    
* [Usage](#Usage)    
* [Contributers](#Contributers)    
* [Testing](#Testing)    
* [License](#License)    
* [Questions](#Questions)

## ScreenShot

${data.ScreenShot}     

## Motivations

${data.Motivations}  

## Frameworks

${data.Frameworks}   

## Installation

${data.Installation}   

## Usage

${data.Usage}    
${renderLicenseLink(license)};

## Contributors

${data.Contributers}    

## Testing

${data.Testing}


## license

Project licenced under the ${license} license.
${data.License}    

For any questions or suggestions about this project, contact me <br>
 ${data.Questions}.`;  

}

module.exports = {generateMarkdown};
