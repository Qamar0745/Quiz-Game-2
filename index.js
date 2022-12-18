var readline = require("readline-sync");
var userAns = readline.question("What is your name: ");
console.log("Welcome, " + userAns + " Let;s see how well do you know about Qamar......");

var score = 0;

function play(question, answer, options){
  console.log();
  console.log(question);
  var index = readline.keyInSelect(options, "Select an option?");
  var ans = options[index]; 
  if(ans === answer){
    score++;
    console.log("Right!!");
  }
  else{
    console.log("Wrong");
  }

  console.log("--------");
}

var questions = [
  {ques: "Where does he live?",
   anss: "Lucknow",
   option: ["Moradabad", "Kanpur", "Lucknow"]},
  
  {ques: "What are his hobbies?",
   anss: "Badminton and Carrom",
   option: ["Badminton and Carrom", "Cricket", "hockey", "Tennis"]},

  {ques: "Who is favourite superhero?",
   anss: "Iron-Man",
   option: ["Batman", "Superman", "Iron-Man", "Hulk"]},

  {ques: "Favourite movie?",
   anss: "Iron-Man",
   option: ["Batman", "Superman", "Iron-Man", "Hulk"]},

  {ques: "Fovurite city?",
   anss: "Delhi",
   option: ["Delhi", "Mumbai", "Lucknow", "Bangalore"]}
]

for(var i = 0; i < questions.length; i++){
  var currentQues = questions[i];
  play(currentQues.ques, currentQues.anss, currentQues.option);
}

console.log("Your score is: "+ score);





