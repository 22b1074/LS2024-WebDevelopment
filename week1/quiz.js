const questions = [
    {
      question: "Who won ICC T20 World Cup in 2024?",
      options: ["India", "Australia", "England", "South Africa"],
      answer: "India"
    },
    {
      question: "Who is Man of the Match in 2024 ICC T20 WorldCup Finals?",
      options: ["Virat Kohli", "Klassen", "Jasprit Bhumrah", "Hardik Pandya"],
      answer: "Virat Kohli"
    },
    {
      question: "Who is Player of the Series of 2024 ICC T20 WorldCup Tournament?",
      options: ["Virat Kohli", "Klassen", "Jasprit Bhumrah", "Hardik Pandya"],
      answer: "Jasprit Bhumrah"
    },
    {
      question: "How many ICC Word Cups did India win in all formats?",
      options: ["1", "2", "3", "4"],
      answer: "4"
    },
    {
      question: "Which country won highest no.of ICC ODI World Cups till date?",
      options:  ["India", "Australia", "England", "South Africa"],
      answer: "Australia"
    }
    // Add more questions as needed
  ];
  
  let currentQuestion = 0;
  let score = 0;
  let incorrectlyAnswered = [];
  
  function loadQuestion() {
    const quizContainer = document.getElementById('quiz');
    const question = questions[currentQuestion];
  
    const questionElement = document.createElement('div');
    questionElement.classList.add('question');
    questionElement.textContent = question.question;
  
    const optionsElement = document.createElement('div');
    optionsElement.classList.add('options');
  
    question.options.forEach(option => {
      const button = document.createElement('button');
      button.textContent = option;
      button.addEventListener('click', () => handleAnswerOptionClick(option));
      optionsElement.appendChild(button);
    });
  
    quizContainer.innerHTML = '';
    quizContainer.appendChild(questionElement);
    quizContainer.appendChild(optionsElement);
  }
  
  function handleAnswerOptionClick(selectedOption) {
    const quizContainer =document.getElementById('quiz');
    const question = questions[currentQuestion];
    if (selectedOption === question.answer) {
      score++;
    } else {
        incorrectlyAnswered.push(currentQuestion);
    }
    currentQuestion++;  
    if (currentQuestion < questions.length) {
       loadQuestion();
    } else {
      showIncorrectlyAnswered();
    }
  }
  function showIncorrectlyAnswered() {
     const quizContainer = document.getElementById('quiz');
      quizContainer.innerHTML = '<h2>Incorrectly Answered Questions</h2>';

      incorrectlyAnswered.forEach(index => {
          const question = questions[index];
          const questionContainer = document.createElement('div');
          questionContainer.classList.add('incorrect-question');
          const questionElement =document.createElement('div');
          questionElement.classList.add('question');
          questionElement.innerHTML = `
              <p>${question.question}</p>
              <p><strong>Correct Answer:</strong> ${question.answer}</p>
          `;
          questionContainer.append(questionElement);
          quizContainer.appendChild(questionElement);
      });

      const scoreElement = document.createElement('div');
      scoreElement.classList.add('score');
      scoreElement.textContent = `You scored ${score} out of ${questions.length}`;
      quizContainer.appendChild(scoreElement);
}
  
  
  // Initial load

  