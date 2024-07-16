import React from 'react'
import './Quiz.css'
const Quiz = () => {

    const apiUrl = "https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple";

    let quizData = [];
    let currentQuestion = 0;
    let score = 0;

    async function fetchQuizData() {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data.results;
    }

    async function loadQuizData() {
    try {
        quizData = await fetchQuizData();
        currentQuestion = 0;
        score = 0;
        loadQuestion();
    } catch (error) {
        console.error(error);
        //alert("Failed to fetch quiz data. Please try again later.");
    }
    }

    function loadQuestion() {
    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");

    const currentQuizData = quizData[currentQuestion];

            //questionElement.innerText = currentQuizData.question;
    questionElement.innerHTML = ""; // clear the element
    questionElement.innerHTML = currentQuizData.question; // use innerHTML instead of innerText

    const options = [...currentQuizData.incorrect_answers];
    options.push(currentQuizData.correct_answer);
    shuffleArray(options); // shuffle the array of options

    optionsElement.innerHTML = "";
    options.forEach((option) => {
        const button = document.createElement("button");
        button.innerText = option;
        button.addEventListener("click", () => selectAnswer(option === currentQuizData.correct_answer));
        optionsElement.appendChild(button);
    });
}

// helper function to shuffle an array
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

    function selectAnswer(isCorrect) {
    if (isCorrect) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResult();
    }
    }

    function showResult() {
    const quizContainer = document.querySelector(".quiz-container");
    quizContainer.innerHTML = `<h1>Quiz Completed</h1>
                                <p>Your score: ${score} out of ${quizData.length}</p>`;
    }

    loadQuizData();

  return (
    <div>
        <div class="quiz-container">
            <h1>Quiz App</h1>
            <div id="question"></div>
            <div id="options"></div>
            <button onclick="checkAnswer()">Next</button>
        </div>
    </div>
  )
}

export default Quiz
