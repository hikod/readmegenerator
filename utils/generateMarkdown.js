// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license !== "None") {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  }  
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `https://opensource.org/licenses/${license}`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is licensed under the ${license} license.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}   ${renderLicenseBadge(data.license)}

  ## Description

  ${data.description}
  
  ## Table of Contents
 
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [License](#license)
  
  ## Installation

  ${data.installation}
  
  ## Usage

  ${data.usage}
  
  ## Credits
 

  ## License
 
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  
  ## Badges
 
  ${renderLicenseBadge(data.license)}
  
  ## Contributing
 
  ${data.contribution}
  
  ## Tests

  ${data.tests}

  ## Questions
    
  https://github.com/${data.github}

  Please email me for further questions at ${data.email}
`;
}

module.exports = generateMarkdown;
