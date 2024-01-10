import fs from 'fs';
import inquirer from 'inquirer';
import { Triangle, Circle, Square } from './lib/shapes.js';

function logo({ letters, textColor, shape, color }) {
  let newShape;

  if (shape === 'triangle') {
   newShape = new Triangle();
  };

  if (shape === 'circle') {
   newShape = new Circle();
  };

  if (shape === 'square') {
   newShape = new Square();
  };

  newShape.setColor(color);
  newShape.setTextColor(textColor);
  newShape.setLetters(letters);

  return `<svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">${newShape.render()} text-anchor="middle" font-size="60" fill = "${newShape.textColor}">${newShape.letters}</text></svg>`;
}

const questions = [
  {
    type: 'input',
    message: 'Enter logo text (up to 3 characters)',
    name: 'letters',
  },
  {
    type: 'input',
    message: 'Text color? May be a keyword or hexidecimal number.',
    name: 'textColor',
  },
  {
    type: 'list',
    message: 'Select logo shape',
    choices: ['triangle','circle', 'square'],
    name: 'shape',
  },
  {
    type: 'input',
    message: 'Input color for the logo',
    name: 'color',
  },
];

function writeToFile(filename, data) {
  fs.writeFile(filename, data, (err) =>
    err ? console.log(err) : console.log('Generated logo.svg')
  );
}

function init() {
  inquirer.prompt(questions).then((response) => {
    const data = logo(response);
    writeToFile('logo.svg', data);
  });
}

init();