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
        const writeFile = `
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script src="index.js"></script>
          <title>ReadMe</title>
        </head>
        <body>
      #${answers.title}
      <br></br>
      ##Description
      <p>${answers.description}</p>
      ##Installation
      <p>${answers.installation}</p>
      ##Usage
      <p>${answers.usage}</p>
      ##Contributions
      <p>${answers.contributions}</p>
      ##Tests
      <p>${answers.tests}</p>
    
      ##Questions
      <p> If you have any questions please feel free to contact me via email or GitHub!</p>
      <p>[GitHub]("https;//www.github.com/${answers.github})</p>
      <p>${answers.email}</p>

        </body>
      </html>
    `;
        writeToFile("./index.html", writeFile);
    });
}
// function call to initialize program
init();
