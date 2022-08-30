const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

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
  return inquirer.createPromptModule([
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
