// ===============================
// Datos del Quiz
// ===============================
const questions = [
  {
    question: "¿Para qué necesitas la web?",
    options: ["Para mostrar información", "Para vender productos", "Para escribir artículos"]
  },
  {
    question: "¿Qué tan importante es que puedas actualizarla seguido?",
    options: ["No importa mucho", "Muy importante", "Quiero hacerlo yo misma"]
  },
  {
    question: "¿Cuál es tu objetivo principal?",
    options: ["Mostrar mi trabajo", "Vender en línea", "Compartir ideas"]
  }
];

// ===============================
// Variables de control
// ===============================
let currentQuestion = 0;
const answers = [];

// Elementos del DOM
const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");
const quizContainer = document.getElementById("quiz-container");

// ===============================
// Mostrar pregunta actual
// ===============================
function showQuestion() {
  const { question, options } = questions[currentQuestion];
  questionEl.textContent = question;
  questionEl.classList.add("question-transition");

  optionsEl.innerHTML = "";

  options.forEach(option => {
    const button = document.createElement("div");
    button.textContent = option;
    button.classList.add("option");
    button.tabIndex = 0; // accesibilidad teclado

    button.addEventListener("click", (e) => selectOption(option, e));
    button.addEventListener("keypress", (e) => {
      if (e.key === "Enter") selectOption(option, e);
    });

    optionsEl.appendChild(button);
  });

  // Eliminar clase animación tras reproducirse
  setTimeout(() => {
    questionEl.classList.remove("question-transition");
  }, 500);
}

// ===============================
// Seleccionar opción
// ===============================
function selectOption(option, event) {
  answers[currentQuestion] = option;

  // Desmarcar anteriores
  Array.from(optionsEl.children).forEach(btn => btn.classList.remove("selected"));

  // Marcar actual
  event.target.classList.add("selected");
}

// ===============================
// Botón siguiente
// ===============================
nextBtn.addEventListener("click", () => {
  if (!answers[currentQuestion]) {
    alert("Elige una opción antes de continuar 😉");
    return;
  }

  currentQuestion++;

  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showResult();
  }
});

// ===============================
// Mostrar resultado final
// ===============================
function showResult() {
  quizContainer.style.display = "none";

  let resultMessage = "¡Una Landing Básica es ideal para empezar!";

  if (answers.includes("Vender productos")) {
    resultMessage = "¡Te conviene un E-commerce!";
  } else if (answers.includes("Escribir artículos")) {
    resultMessage = "¡Un Blog sería perfecto para ti!";
  }

  resultEl.textContent = resultMessage;
  resultEl.classList.add("fade-in");
}

// ===============================
// Iniciar quiz
// ===============================
showQuestion();
