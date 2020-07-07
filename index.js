const inquirer = require("inquirer");
const fs = require("fs");

// array of questions for user
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


// function to write README file
function writeToFile(filename, data) {
    fs.writeFile(filename, data, function (err) {
        if (err) {
            return console.log(err);
        }
        console.log("Successfully created ReadMe!");
    });
}
// function to initialize program
function init() {
    inquirer.prompt(questions).then((answers) => {
const writeFile = `# ${answers.title}

## Description
${answers.description}
## Installation
${answers.installation}
## Usage
${answers.usage}
## License

## Contributing
${answers.contributions}
## Tests
${answers.tests}
## Questions
If you have any questions please feel free to contact me via email or GitHub!

Message me on [GitHub]("https://github.com/${answers.github}")!

Send me a message at ${answers.email}!
`;
writeToFile("README.md", writeFile);
});
}
// function call to initialize program
init();
