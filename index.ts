#!/usr/bin/env node


import inquirer from 'inquirer';
import chalk from 'chalk';
import chalkAnimation, { rainbow } from 'chalk-animation';
import { type } from 'os';

 
const sleep = ()=>{
    return new Promise((res)=>{
        setTimeout(res,6999);
    })

    }
 async function welcome(){
let rainbowTitle = chalkAnimation.rainbow('Lets Get Start My First Calculatore App by Nadeem'); //run
await sleep();
rainbowTitle.stop();
console.log(` _____________________
|  _________________  |
| | JO  3.141592654 | |
| |_________________| |
|  __ __ __ __ __ __  |
| |__|__|__|__|__|__| |
| |__|__|__|__|__|__| |
| |__|__|__|__|__|__| |
| |__|__|__|__|__|__| |
| |__|__|__|__|__|__| |
| |__|__|__|__|__|__| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|`);
//console.log(`${rainbowTitle} is the Perfect`);

 }
await welcome();

async function askQuestion(){
   const answers =  await inquirer
    .prompt([
        {
        type: "list",
        name: "operatore",
        message: "Which operation you to Perfore /n",
        choices: ["Addition","Subcription","Multiplication","Division"]
        },
        {
        type: "number",
        name: "num1",
        message: "Enter number",
        },
        {
        type: "number",
        name: "num2",
        message: "Enter number",
        },     
    ])
    .then((answers)  =>{

     if(answers.operatore == "Addition"){
     console.log(chalk.blue(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`));
    }
    else if(answers.operatore == "Subtraction"){
    console.log(chalk.red(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`));
    }
    else if(answers.operatore == "Multipliction"){
     console.log(chalk.green(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`));
    }
    else if(answers.operatore == "Divison"){
        console.log((`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`));
    }
    })
};
askQuestion()

async function startAgain(){
    do{
        await askQuestion();
      var again = await inquirer
        .prompt({
            type:"input",
            name:"restart",
            message:"Do You Want to Continue? Press Yes/No:"
        })
    }while(again.restart == 'Yes'|| again.restart == 'Yes'|| again.restart == 'Yes')  
}
startAgain()

