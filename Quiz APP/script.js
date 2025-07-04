// startScreen

const startScreen = document.getElementById("start-screen");
const startButton = document.getElementById("start-button");
// quizscreen
const quizScreen = document.getElementById("quiz-screen");
const questiontext = document.getElementById("question-text");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
// answer container
const answersContainer = document.getElementById("answers-container");
// progress bar
const progressBar = document.getElementById("progress-bar");
const progress = document.getElementById("progress");
// results screen
const resultsScreen = document.getElementById("results-screen");
const finalScorespan = document.getElementById("final-score");
const maxScorespan = document.getElementById("max-score");
const resultmessage = document.getElementById("result-message");
// restart
const restartButton = document.getElementById("restart-button");

const quizquestions = [
  {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: 2,
  },
  {
    question: "What is the largest planet in our solar system?",
    answers: ["Earth", "Mars", "Jupiter", "Saturn"],
    correctAnswer: 2,
  },
  {
    question: "Who wrote 'To Kill a Mockingbird'?",
    answers: [
      "Harper Lee",
      "Mark Twain",
      "Ernest Hemingway",
      "F. Scott Fitzgerald",
    ],
    correctAnswer: 0,
  },
  {
    question: "What is the chemical symbol for water?",
    answers: ["H2O", "CO2", "O2", "NaCl"],
    correctAnswer: 0,
  },
  {
    question: "What is the capital of Japan?",
    answers: ["Seoul", "Beijing", "Tokyo", "Bangkok"],
    correctAnswer: 2,
  },
  {
    question: "who won the  Cricket Champions Trphy 2025?",
    answers: ["India", "Pakistan", "Australia", "England"],
    correctAnswer: 0,
  },
  {
    question: "who won the Indian Premier League 2025?",
    answers: [
      "Mumbai Indians",
      "Chennai Super Kings",
      "Kolkata Knight Riders",
      "Royal Challengers Bangalore",
    ],
    correctAnswer: 3,
  },
  {
    question: "What is the largest mammal in the world?",
    answers: ["Elephant", "Blue Whale", "Giraffe", "Great White Shark"],
    correctAnswer: 1,
  },
  {
    question: "What is the main ingredient in guacamole?",
    answers: ["Tomato", "Avocado", "Onion", "Pepper"],
    correctAnswer: 1,
  },
  {
    question: "What is the currency of Germany?",
    answers: ["Euro", "Dollar", "Pound", "Yen"],
    correctAnswer: 0,
  },
];

let currentQuestionIndex = 0;
let score = 0;
let answerDisabled = false; //user cannot select two answers at once

totalQuestions.textContent = quizquestions.length; // Display total questions
maxScorespan.textContent = quizquestions.length; // Display max score

//  to start the quiz
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  //    reset
  currentQuestion = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.classList.remove("active");  //works as ON/OFF switch
    quizScreen.classList.add("active");

}
function showQuestion(){
    //  reset state
    answerDisabled = false;
    const currentQuestion = quizquestions[currentQuestionIndex]
    currentQuestionSpan.textContent= currentQuestionIndex+1;
    const progressBar = (currentQuestionIndex + 1) / quizquestions.length * 100;
    progressBar.style.width = `${progressBar}%`;
    answersContainer.innerHTML = ""; // Clear previous answers

    currentQuestion.answers.forEach(()=>{
    const button =document.createElement("button");
    button.textContent = answerDisabled.text;
    button.classList.add("answer-button");

    button.dataset.correct = answerDisabled.correct;

    button.addEventListener("click", selectAnswer);
    answersContainer.appendChild(button);
   });

}



