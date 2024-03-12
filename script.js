let toggleSwitch = document.getElementById("toggle-mode");
let mode = document.getElementById("styles");
let burgerIcon = document.getElementById("navigation-bar");

const gameSound = new Audio("./gameSound.mp3");

toggleSwitch.addEventListener("click", (e) => {
  e.preventDefault();

  mode.setAttribute(
    "href",
    mode.getAttribute("href") === "lightstyle.css"
      ? mode.getAttribute("data-dark-mode")
      : "lightstyle.css"
  );
  if (
    toggleSwitch.innerText.includes("Light Mode") &&
    burgerIcon.classList.contains("navbar-light")
  ) {
    toggleSwitch.innerHTML = `Dark Mode <i class="fa-solid fa-circle-half-stroke fa-lg"></i>`;
    burgerIcon.classList.replace("navbar-light", "navbar-dark");
  } else {
    toggleSwitch.innerHTML = `Light Mode <i class="fa-solid fa-circle-half-stroke fa-lg"></i>`;
    burgerIcon.classList.replace("navbar-dark", "navbar-light");
  }
});

let content = JSON.parse(localStorage.getItem("content")) || [
  {
    id: 1,
    question: "What is the basic object of data Dictionary?",
    answer: "Domains",
    choices: ["Domains", "Documentation", "Data Models", "Dynpro"],
  },
  {
    id: 2,
    question: "Search help cannot be attached to?",
    answer: "Type",
    choices: ["Domain", "Table", "Check Table", "Type"],
  },
  {
    id: 3,
    question: "What is invalid attribute of a domain?",
    answer: "Header",
    choices: ["Type", "Fixed Values", "Length", "Header"],
  },
  {
    id: 4,
    question: `Command flushes the database buffers`,
    answer: "$TAB",
    choices: ["$TAB", "$RESET", "$INIT", "$FREE"],
  },
  {
    id: 5,
    question: "Is Session Method, Asynchronous or Sychronous?",
    answer: "Synchronous",
    choices: ["Asynchronous", "Synchronous", "Both", "None"],
  },
  {
    id: 6,
    question: "Which data type cannot be used to define parameters?",
    answer: "Type F",
    choices: ["Type N", "Type C", "Type F", "Type P"],
  },
  {
    id: 7,
    question:
      "What is the maximum number of watchpoints that can exist at one time?",
    answer: "10",
    choices: ["8", "10", "16", "No Limit"],
  },
  {
    id: 8,
    question:
      "What is the cardinality for the Node created for storing the table?",
    answer: "0:n",
    choices: ["1:1", "0:1", "n:n", "0:n"],
  },
  {
    id: 9,
    question: "What is the equivalent for Transaction in WebDynpro?",
    answer: "Application",
    choices: [
      "Application",
      "Component Controller",
      "Interface Controller",
      "Plugs",
    ],
  },
  {
    id: 10,
    question:
      "The UI Element and the Context Attributes of Webdynpro are linked. The process of doing this is called?",
    answer: "Binding",
    choices: ["Binding", "Linking", "UI Linkage", "UI Link"],
  },
  {
    id: 11,
    question: "Identify a layout that is not part of the Webdynpro Layout?",
    answer: "Tree Layout",
    choices: ["Flow Layout", "Row Layout", "Grid Layout", "Tree Layout"],
  },
  {
    id: 12,
    question: "Where does the Busiess Logic exits in the Webdynpro?",
    answer: "Assistance Class",
    choices: [
      "Methods of the view",
      "Methods of the Controller",
      "Assistance Class",
      "None of the Above",
    ],
  },
  {
    id: 13,
    question:
      "Which method do you use to read the contents of a attribute attached to the context node?",
    answer: "GET_ATTRIBUTE",
    choices: [
      "GET_ATT",
      "GET_ATTRIBUTE_REF",
      "GET_ATTRIBUTE",
      "GET_STATIC_ATTRIBUTES",
    ],
  },
  {
    id: 14,
    question: "Identify a Cardinality type that is not part of webdynpro?",
    answer: "N:N",
    choices: ["N:N", "0:1", "1:1", "0:N"],
  },
  {
    id: 15,
    question:
      "Which data type do you use to declare a visibility attribute in webdynpro?",
    answer: "WDUI_VISIBILITY",
    choices: ["WD_VISIBILITY", "WDUI_VISIBILITY", "ABAP_TRUE", "BOOLEAN"],
  },
  {
    id: 16,
    question: "HIDE statement support deep structures?",
    answer: "False",
    choices: ["True", "False", "Both", "Not Applicable"],
  },
  {
    id: 17,
    question:
      "You can add LESS and CSS rules in text editor that is available in?",
    answer: "CSS tab",
    choices: ["Quick mode", "Expert mode", "CSS tab", "Preview"],
  },
  {
    id: 18,
    question: "What helps SAP data to be converted to OData?",
    answer: "SAP NetWeaver Gatewaying",
    choices: [
      "SAP NetWeaver Gateway",
      "SAP NetWeaver Portal",
      "SAPUI5",
      "Fiori",
    ],
  },
  {
    id: 19,
    question:
      "You want to test a UI5 project in the SAP Fiori launchpad sandbox environment. Which files do you have to modify to set a proxy?",
    answer: "Configuration.js",
    choices: ["index.html", "Configuration.js", "web.xml", "Component.js"],
  },
  {
    id: 20,
    question: "Full form of OData is:",
    answer: "Open Data Protocol",
    choices: [
      "Other Data Protocol",
      "Open Data Protocol",
      "Optional Data Protocol",
      "None of the above",
    ],
  },
];
let currId = content.length;

let contentJSON = localStorage.setItem("content", JSON.stringify(content));

let newQuestion = {};

function newValues() {
  let inputQuestion = document.getElementById("input-question");
  let choice1 = document.getElementById("choice-1");
  let choice2 = document.getElementById("choice-2");
  let choice3 = document.getElementById("choice-3");
  let choice4 = document.getElementById("choice-4");
  let answer = document.getElementById("answer");

  let inputQuestionValue = inputQuestion.value;
  let choice1Value = choice1.value;
  let choice2Value = choice2.value;
  let choice3Value = choice3.value;
  let choice4Value = choice4.value;
  let answerValue = answer.value;

  if (
    inputQuestionValue === "" ||
    choice1Value === "" ||
    choice2Value === "" ||
    choice3Value === "" ||
    choice4Value === "" ||
    answerValue === ""
  ) {
    alert("No values");
    return;
  }

  newQuestion = {
    id: ++currId,
    question: inputQuestionValue,
    answer: answerValue,
    choices: [choice1Value, choice2Value, choice3Value, choice4Value],
  };
  content.push(newQuestion);
  console.log(content);
  localStorage.setItem("content", JSON.stringify(content));

  // Reset the form
  document.getElementById("quizForm").reset();
}

document
  .getElementById("quizForm")
  ?.addEventListener("submit", function (event) {
    event.preventDefault();
    newValues();
  });

const quizStart = document.getElementById("start-quiz");
const customize = document.getElementById("customize");
const quizContainer = document.getElementById("quiz-container");
const marquee = document.getElementById("marquee");

quizStart?.addEventListener("click", () => {
  quizContainer.style.display = "inline-block";
  startAll();
  marquee.style.display = "none";
  customize.disabled = true;
  customize.style.display = "none";

  quizStart.disabled = true;
  quizStart.style.display = "none";
});

let currIndex = 0;

// to shuffle question and not show prev question
let currQuestionIndex;
let prevQuestionIndex = [-1];
const keepQuestionIndex = prevQuestionIndex[0];

let score = 0;
let timer;
let timerRemaining = 10 * 10;

const questionContainer = document.getElementById("question-content");
const choicesContainer = document.getElementById("choices-content");
const timerContainer = document.getElementById("timer");
const button = document.getElementById("next-btn");
const submitButton = document.getElementById("submit-btn");
const exitButton = document.getElementById("exit-btn");
let points = document.getElementById("points");
let highscore = document.getElementById("highscore");

let highestScore =
  localStorage.getItem("highscore") ||
  localStorage.setItem("highscore", Number(score));

function startAll() {
  gameSound.play();
  startQuiz();
  startTimer();
}

function startQuiz() {
  shuffleQuestion();
  showQuestion();
  showChoices();
}

function startTimer() {
  // show timer before decrement
  timerContainer.innerHTML = `Timer: ${timerRemaining}`;
  timer = setInterval(() => {
    timerRemaining--;
    // show timer during 0s
    timerContainer.innerHTML = `Timer: ${timerRemaining}`;
    if (timerRemaining <= 0) {
      endQuiz();
      clearInterval(timer);
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(timer);
}

function shuffleQuestion() {
  let index;
  do {
    index = Math.floor(Math.random() * content.length);
  } while (prevQuestionIndex.includes(index));
  return index;
}

function showQuestion() {
  points.innerHTML = `Points: ${score}`;
  highscore.innerHTML = `High Score: ${localStorage.getItem("highscore")}`;
  exitButton.disabled = true;
  exitButton.style.display = "none";
  submitButton.disabled = false;
  submitButton.style.display = "inline-block";
  currQuestionIndex = shuffleQuestion();
  prevQuestionIndex.push(currQuestionIndex);
  const question = content[currQuestionIndex].question;
  questionContainer.innerText = content[currQuestionIndex].question;
}

function showChoices() {
  const choices = content[currQuestionIndex].choices;
  button.disabled = true;

  // to refresh the prev choices
  choicesContainer.innerHTML = "";

  // map new button choices
  choices.map((choice, index) => {
    const buttons = document.createElement("button");
    buttons.innerHTML = choice;
    buttons.classList.add("options");
    buttons.id = `options-${index}`;
    buttons.addEventListener("click", () => checkAnswer(index));
    choicesContainer.appendChild(buttons);
  });
}

function checkAnswer(index) {
  button.disabled = false;
  const currAnswer = content[currQuestionIndex];
  if (
    currAnswer.choices[index].toUpperCase() === currAnswer.answer.toUpperCase()
  ) {
    score += 10;
    document.getElementById(`options-${index}`).style.backgroundColor =
      "#66fcf1";
    points.innerHTML = `Points: ${score}`;
  } else {
    document.getElementById(`options-${index}`).style.backgroundColor =
      "#EC5656"; //
  }
  const buttons = document.querySelectorAll(".options");
  buttons.forEach((buttons) => (buttons.disabled = true));
}

function nextQuestion() {
  currIndex++;
  if (currIndex < 10) {
    startQuiz();
  } else {
    endQuiz();
  }
}

function handleSubmit() {
  let confirmation = confirm("Are you sure you want to submit?");
  confirmation ? endQuiz() : null;
}

function endQuiz() {
  highestScore =
    score > localStorage.getItem("highscore")
      ? localStorage.setItem("highscore", score)
      : localStorage.getItem("highscore");
  highscore.innerHTML = `Highscore: ${localStorage.getItem("highscore")}`;
  timerRemaining <= 0
    ? (questionContainer.innerHTML = `Times up!\nYour score is ${score}`)
    : (questionContainer.innerHTML = `Your score is ${score}`);
  stopTimer();
  choicesContainer.innerHTML = "";

  button.disabled = true;
  button.style.display = "none";

  submitButton.disabled = true;
  submitButton.style.display = "none";

  const tryAgain = document.getElementById("try-again");
  tryAgain.disabled = false;
  tryAgain.style.display = "inline-block";

  exitButton.disabled = false;
  exitButton.style.display = "inline-block";

  tryAgain.addEventListener("click", () => {
    timerRemaining = 100;
    currIndex = 0;
    score = 0;
    prevQuestionIndex = [keepQuestionIndex];
    stopTimer();

    tryAgain.disabled = true;
    tryAgain.style.display = "none";

    button.disabled = false;
    button.style.display = "inline-block";
    startAll();
  });
}

function handleExit() {
  window.location.href = "./index.html";
}
