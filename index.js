const inquirer = require("inquirer");
const fs = require("fs");

const questions = [
    {
        type: "input",
        message: "What is your Project Title",
        name: "title",
    },
    {
        type: "input",
        message: "Please enter a description of your Project",
        name: "description",
    },
    {
        type: "input",
        message: "Please enter an installation guide",
        name: "installation",
    },
    {
        type: "input",
        message: "Please enter usage information",
        name: "usage",
    },
    {
        type: "list",
        message: "Choose a license",
        name: "licenseName",
        choices: ["MIT", "GNU General Public Version 3", "No License"]
    },
    {
        type: "input",
        message: "Please enter any contribution guidelines",
        name: "contributions",
    },
    {
        type: "input",
        message: "Please enter test instructions",
        name: "tests",
    },
    {
        type: "input",
        message: "Please enter your GitHub Username",
        name: "github",
    },
    {
        type: "input",
        message: "Please enter your email address",
        name: "email",
    },
];


function writeToFile(filename, data) {
    fs.writeFile(filename, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created ReadMe!");
    });
}



function init() {
    inquirer.prompt(questions).then((answers) => {
const writeFile = `# ${answers.title}

## Description
${answers.description}
## Table of Contents
[Installation](#Installation)

[Usage](#Usage)

[License](#License)

[Contributing](#Contributing)

[Tests](#Tests)

[Questions](#Questions)

## Installation
${answers.installation}
## Usage
${answers.usage}
## License
This Project is licensed under ${answers.licenseName} 
## Contributing
${answers.contributions}
## Tests
${answers.tests}
## Questions
If you have any questions please feel free to contact me via email or GitHub!

Message me on [Github]("https://github.com/${answers.github}/)

Send me a message at ${answers.email}!
`;
writeToFile("README.md", writeFile);
});
};

init();
