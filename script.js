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

    let currentQuestion = 0;
    let answers = [];

    const questionEl = document.getElementById("question");
    const optionsEl = document.getElementById("options");
    const nextBtn = document.getElementById("next-btn");
    const resultEl = document.getElementById("result");

    function showQuestion() {
      const q = questions[currentQuestion];
      questionEl.textContent = q.question;
      optionsEl.innerHTML = "";

      q.options.forEach(option => {
        const button = document.createElement("div");
        button.textContent = option;
        button.classList.add("option");
        button.onclick = (e) => selectOption(option, e);
        optionsEl.appendChild(button);
      });
    }

    function selectOption(option, event) {
      answers[currentQuestion] = option;
      Array.from(optionsEl.children).forEach(btn => btn.classList.remove("selected"));
      event.target.classList.add("selected");
    }

    nextBtn.onclick = () => {
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
    };

    function showResult() {
      document.getElementById("quiz-container").style.display = "none";

      if (answers.includes("Vender productos")) {
        resultEl.textContent = "¡Te conviene un E-commerce!";
      } else if (answers.includes("Escribir artículos")) {
        resultEl.textContent = "¡Un Blog sería perfecto para ti!";
      } else {
        resultEl.textContent = "¡Una Landing Básica es ideal para empezar!";
      }
    }

    showQuestion();
