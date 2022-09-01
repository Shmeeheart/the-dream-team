const inquirer = require('inquirer');
const { writeFile } = require('./utils/write-file');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const generatePage = require('./src/page-template');
const teamData = [];

const questions = {
  manager: {
    name: "What is the manager's name?",
    officeNumber: 'What is the office number of the manager?',
  },
  engineer: {
    name: "What is the engineer's name?",
    github: "What is the engineer's GitHub Username?",
  },
  intern: {
    name: "What is the intern's name?",
    school: 'What school does the intern attend?',
  },
  email: 'What is the email address for the employee?',
  id: "What is the employee's ID number?",
  staff:
    'Are there any additional staff to add to the dream team at this time?',
  answerValidate: 'Please  provide an answer',
};

function init() {
  return inquirer.prompt([
    {
      // prompts for manager info
      type: 'input',
      name: 'name',
      message: questions.manager.name,
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(questions.answerValidate);
          return false;
        }
      },
    },
    {
      // prompts for employee ID
      type: 'input',
      name: 'id',
      message: questions.id,
      validate: (idInput) => {
        if (idInput) {
          return true;
        } else {
          console.log(questions.answerValidate);
          return false;
        }
      },
    },
    {
      //prompts for employee email
      type: 'input',
      name: 'email',
      message: questions.email,
      validate: (emailInput) => {
        if (emailInput) {
          return true;
        } else {
          console.log(questions.answerValidate);
          return false;
        }
      },
    },
    {
      // prompts for manager's office number
      type: 'input',
      name: 'officeNumber',
      message: questions.manager.officeNumber,
      validate: (officeNumInput) => {
        if (officeNumInput) {
          return true;
        } else {
          console.log(questions.answerValidate);
          return false;
        }
      },
    },
  ]);
}
// Manager
function generateManager(name, id, email, officeNumber) {
  // Creates a manager object
  let manager = new Manager(name, id, email, officeNumber);
  // Returns an object
  teamData.push(manager);
  return {
    addStaff: null,
    staffArray: [manager],
  };
}

// Engineer
function generateEngineer(name, id, email, github, dataObj) {
  let engineer = new Engineer(name, id, email, github);
  dataObj.staffArray.push(engineer);
  teamData.push(engineer);
  return dataObj;
}

// Intern
function generateIntern(name, id, email, school, dataObj) {
  let intern = new Intern(name, id, email, school);
  dataObj.staffArray.push(intern);
  teamData.push(intern);
  return dataObj;
}

// Add more staff members?
function addStaff(dataObj) {
  return (
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'addStaff',
          message: questions.staff,
          choices: ['Engineer', 'Intern', 'No'],
        },
      ])
      // If yes, to add new staff
      .then((answerObj) => {
        if (answerObj.addStaff === 'Engineer') {
          return addEngineer(dataObj);
        } else if (answerObj.addStaff === 'Intern') {
          return addIntern(dataObj);
        }

        // If no, the team will be displayed
        else {
          return dataObj;
        }
      })
  );
}

// prompts if adding additional staff as an engineer
function addEngineer(dataObj) {
  return (
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: questions.engineer.name,
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'id',
          message: questions.id,
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: questions.email,
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'github',
          message: questions.engineer.github,
          validate: (githubInput) => {
            if (githubInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
      ])
      // After questions are answered, it will generate the new engineer
      .then((data) => {
        return generateEngineer(
          data.name,
          data.id,
          data.email,
          data.github,
          dataObj
        );
      })
      .then((data) => {
        return addStaff(data);
      })
  );
}

// Asks questions to generate the new Intern to staff
function addIntern(dataObj) {
  return (
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: questions.intern.name,
          validate: (nameInput) => {
            if (nameInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'id',
          message: questions.id,
          validate: (idInput) => {
            if (idInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'email',
          message: questions.email,
          validate: (emailInput) => {
            if (emailInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
        {
          type: 'input',
          name: 'school',
          message: questions.intern.school,
          validate: (schoolInput) => {
            if (schoolInput) {
              return true;
            } else {
              console.log(questions.answerValidate);
              return false;
            }
          },
        },
      ])
      // generating new intern information
      .then((data) => {
        return generateIntern(
          data.name,
          data.id,
          data.email,
          data.school,
          dataObj
        );
      })
      .then((data) => {
        return addStaff(data);
      })
  );
}

// Initializes app if no other staff to add
init()
  .then((answersObj) =>
    generateManager(
      answersObj.name,
      answersObj.id,
      answersObj.email,
      answersObj.officeNumber
    )
  )
  .then(addStaff)
  .then((data) => generatePage(teamData))
  .then((md) => writeFile(md))
  .then((response) => {
    console.log(response.message);
  })
  .catch((err) => {
    console.log(err);
  });
