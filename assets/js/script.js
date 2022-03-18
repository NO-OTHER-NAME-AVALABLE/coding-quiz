const startGameButton = document.getElementById("play-game");
const highscoreButton = document.getElementById("view-highscore");
const timerEl = document.getElementById("timer");
startGameButton.addEventListener("click", startGame);

// highscoreButton.addEventListener("click", );
var score = 0;
function mainMenu(){
highscoreButton.style.display = "block";
startGameButton.style.display = "block";
}
mainMenu();

function startGame(){
  highscoreButton.style.display = "none";
  startGameButton.style.display = "none";
  timerEl.style.display = "block";
  time = 60;
  timer();
  displayQuestions();

}

const questionEl = document.getElementById("question");
const aEl = document.getElementById("a");
const bEl = document.getElementById("b");
const cEl = document.getElementById("c");
const dEl = document.getElementById("d");
const quizQuestions = [
    {
      question: "Who invented JavaScript?",
      answers: {
        a: "Douglas Crockford",
        b: "Sheryl Sandberg",
        c: "Brendan Eich",
        d: "John Script"
      },
      correctAnswer: "c"
    },
    {
      question: "Which one of these is a JavaScript package manager?",
      answers: {
        a: "Node.js",
        b: "TypeScript",
        c: "npm",
        d: "c#"
      },
      correctAnswer: "c"
    },
    {
      question: "Which tool can you use to ensure code quality?",
      answers: {
        a: "Angular",
        b: "jQuery",
        c: "RequireJS",
        d: "ESLint"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the format called that is used for storing and transporting data?",
      answers: {
        a: "Syntax",
        b: "Font",
        c: "HTML",
        d: "JSON"
      },
      correctAnswer: "d"
    },
    {
      question: "What is the language or list of instructions that are executed by the computer (how JavaScript is built)?",
      answers: {
        a: "Output",
        b: "Syntax",
        c: "Scope",
        d: "Json"
      },
      correctAnswer: "b"
    },
    {
      question: "What can loops offer JavaScript code as a whole?",
      answers: {
        a: "Added plug-ins",
        b: "Cleaner syntax",
        c: "Improved performance",
        d: "Cross-platform support"
      },
      correctAnswer: "c"
    },
    {
      question: "What is the element called that forms a search pattern out of a sequence of characters?",
      answers: {
        a: "RegExp or Regular Expression",
        b: "Event",
        c: "Boolean Variable",
        d: "Conditional Argument"
      },
      correctAnswer: "a"
    },
    {
      question: "What is the element used – and hidden – in code that explains things and makes the content more readable?",
      answers: {
        a: "Comments",
        b: "Notes",
        c: "Comparisons",
        d: "Quotations"
      },
      correctAnswer: "a"
    },
    {
      question: "In JavaScript, what element is used to store and manipulate text, usually in multiples?",
      answers: {
        a: "Variables",
        b: "Arrays",
        c: "Recorders",
        d: "Strings"
      },
      correctAnswer: "d"
    },
    {
      question: "This is what you call the guide that defines coding conventions for all projects?",
      answers: {
        a: "Style guide",
        b: "Coding dictionary",
        c: "Developer's reference",
        d: "Main textbook"
      },
      correctAnswer: "a"
    },
    {
      question: "What is a JavaScript element that represents either TRUE or FALSE values?",
      answers: {
        a: "Condition",
        b: "Boolean",
        c: "RegExp",
        d: "Event"
      },
      correctAnswer: "b"
    },
    {
      question: "What elements are used to test for TRUE or False values stored in variables?",
      answers: {
        a: "RegExp or Regular Expressions.",
        b: "Conditional statements.",
        c: "Comparison and logical operators.",
        d: "Trigger readers."
      },
      correctAnswer: "c"
    },
    {
      question: "What is the element called that can continue to execute a block of code as long as the specified condition remains TRUE?",
      answers: {
        a: "Loop",
        b: "Repeater",
        c: "Clone",
        d: "Debugger"
      },
      correctAnswer: "a"
    }
];
var questions = quizQuestions.map((quizQuestion) => quizQuestion.question);
var correctAnswers = quizQuestions.map((quizCorrect) => quizCorrect.correctAnswer);
var answer = quizQuestions.map((quizAnswers) => (quizAnswers.answers));
console.log(answer);
console.log(questions);
console.log(correctAnswers);
var x = 0
function displayQuestions(){
    questionEl.style.display = "block";
    if(x >= quizQuestions.length){
      x = 0;
      displayQuestions();
    }else{
            questionEl.innerHTML = questions[x];
    for (const [key, value] of Object.entries(answer[x])){
        document.getElementById(key).innerHTML = value;
        document.getElementById(key).style.display = "block";
    }
    }

    

}
//checking if the answer is a
const scoreEl = document.getElementById("score");
const rightOrWrongEl = document.getElementById("rightOrWrong");
function checkAnswerA(){
    if (correctAnswers[x] == "a"){
        score++;
      rightOrWrongEl.innerHTML = "Nice One!!";
      scoreEl.innerHTML = "score: " + score;
    }else{
      rightOrWrongEl.innerHTML = "Hahaha not even close!!";
        time = time - 5;
    }
    x++;
    displayQuestions();
}
//checking if the answer is b
function checkAnswerB(){
    if (correctAnswers[x] == "b"){
      score++;
      rightOrWrongEl.innerHTML = "Nice One!!";
      scoreEl.innerHTML = "score: " + score;
    }else{
      rightOrWrongEl.innerHTML = "Hahaha not even close!!";
        time = time - 5;
    }
    x++;
    displayQuestions();
}
//checking if the answer is c
function checkAnswerC(){
    if (correctAnswers[x] == "c"){
      score++;
      rightOrWrongEl.innerHTML = "Nice One!!";
      scoreEl.innerHTML = "score: " + score;
    }else{
      rightOrWrongEl.innerHTML = "Hahaha not even close!!";
        time = time - 5;
    }
    x++;
    displayQuestions();
}
//checking if the answer is d
function checkAnswerD(){
    if (correctAnswers[x] == "d"){
      score++;
      scoreEl.innerHTML = "score: " + score;
      rightOrWrongEl.innerHTML = "Nice One!!";
    }else{
      rightOrWrongEl.innerHTML = "Hahaha not even close!!";
        time = time - 5;
    }
    x++;
    displayQuestions();
}

console.log(x);
//listening for clicks
aEl.addEventListener("click", checkAnswerA);
bEl.addEventListener("click", checkAnswerB);
cEl.addEventListener("click", checkAnswerC);
dEl.addEventListener("click", checkAnswerD);

//time for the timer
var time = 60;      

//a timer loop

function timer() {         
  setTimeout(function() {  
    timerEl.innerHTML = time; 
    time--;                  
    if (time > 0) {         
      timer();            
    }else{GameOver();}                
  }, 1000)
}

function GameOver(){
  aEl.style.display = "none";
  bEl.style.display = "none";
  cEl.style.display = "none";
  dEl.style.display = "none";
  questionEl.style.display = "none";
  timerEl.style.display = "none";
  mainMenu();
}

function highscore