var readlineSync = require("readline-sync");

var chalk = require('chalk');

var score = 0;

//Data of Highscore

var highscore = [
  {
  name :"Chaitanya",
  score:"200"
  },
  {
  name :"Sonu",
  score:"160"
  }]
  


console.log(chalk.bgYellow("Welcome To Quiz!\n"));
console.log((chalk.bgCyan)("Do You Know Chaitanya? \n"));

var userName = readlineSync.question("What Is Your Name?\n");


console.log("Welcome "+chalk.redBright.underline(userName.toUpperCase())+"!");

console.log("So, Let's Get Started\n");

//play function

function play(question ,answer){

  var userAnswer = readlineSync.question(question);

  if(userAnswer.toLocaleUpperCase() === answer.toLocaleUpperCase()){
    console.log(chalk.bgGreenBright("Right!"));
    score+=20;
    }
  else{
    console.log(chalk.bgRedBright("Wrong!"));
  }

  console.log("Current Score: ",score)
  console.log("----------------------")
  
}


var questions =[{
  question: "Where Do Chaitanya Live ?\n",
  answer :"bhenda"
}, {
  question:"What is Chaitanya's Favourite Superhero ?\n",
  answer : "batman"
},
{
   question:"From Where did Chaitanya Completed his class 12th ?\n",
  answer : "jps"
},
{
   question:"What is Chaitanya's Favourite Color ?\n",
  answer : "black"
},
{
   question:"Do Chaitanya have any Siblings ?\n",
  answer : "yes"
},
{
  question:"Chaitanya spends his most of the time on which social media platform ?\n",
 answer : "youtube"
},
{
  question:"Chaitanya is Tea or a Coffee person ?\n",
 answer : "coffee"
},
{
  question:"Chaitanya's Favourite Sports ?\n",
 answer : "cricket"
},
{
  question:"Chaitanya's Favourite IPL Team ?\n",
 answer : "RCB"
},
{
  question:"Chaitanya was Born in Which Year?\n",
 answer : "2001"
}

];

for(var i=0;i<questions.length;i++)
{
  var currentques = questions[i];
  play(currentques.question ,currentques.answer);
}

console.log(chalk.underline("Yay! your Final  Score is :") + chalk.bgMagenta(score))

console.log("-----------------------------");

console.log(chalk.underline("TOP SCORERS"));

for(var i=0;i<highscore.length;i++)
{
  console.log(highscore[i]);
}

console.log("-----------------------------");

console.log("If your Score is Higher then the Top scorers then just dm me on linkedIn @chaitanyatekane")

console.log("-----------------------------");


console.log(chalk.bold.bgWhiteBright.black("Thank You for Playing this Quiz! \nHave a nice day!"));
