
const store = {
    questions: [
      {
        question: 'A single lion will kill, on average, how many large prey animals each year?',
        answers: [
          '15',
          '25',
          '38',
          '50'
        ],
        correctAnswer: '15'
      },
      {
        question: 'A woodpecker can peck how many times each second?',
        answers: [
          '15',
          '20',
          '25',
          '30'
        ],
        correctAnswer: '20'
      },
      {
        question: 'A domestic cat has how many muscles in each ear?',
        answers: [
          '16',
          '24',
          '32',
          '40'
        ],
        correctAnswer: '32'
      },
      {
        question: 'An elephant can smell water up to how many miles away?',
        answers: [
          '3',
          '6',
          '9',
          '12'
        ],
        correctAnswer: '12'
      },
      {
        question: 'Which of the following is true? Flamingos...',
        answers: [
          'will sometimes have their legs freeze in a body of water overnight, only to thaw the next morning with no repercussions',
          'can drink boiling water',
          'can survive exposure to arsenic, other caustic elements, and poisonous gasses',
          'all of the above'
        ],
        correctAnswer: 'all of the above'
      }
    ],
    questionNumber: -1,
    score: 0
};

/********** RENDER FUNCTION(S) **********/
function render(){
  const currentRender = generateHtml(store);
  $('main').html(currentRender);
  console.log('rendered');
}

function generateHtml(store){
  if (store.questionNumber === -1) {
    return generateBeginElement();
  }
  else if ((store.questionNumber) === store.questions.length) {
    return generateEndElement();
  }
  else {
    return generateQuestionElement(store);
  }
}

/********** TEMPLATE GENERATION FUNCTIONS **********/

function generateBeginElement(){
  return `<div id="startscreen">
    <h2>Hi there, ready for a quiz on some animal trivia?</h2>
    <form class="js-start"><button id="js-start">I'm ready!</button></form>
  </div>`

}

function generateEndElement(){
  return `<div id="endscreen">
    <p>You scored ${store.score} right out of ${store.questions.length}.</p>
    <form><button id="js-quiz-restart">Play again</button></form>
  </div>`

}

function generateQuestionElement(store){
  return `<div class="question">
  <form class="js-question-form">
      <h2>${store.questionNumber + 1}: ${store.questions[store.questionNumber].question}</h2>
       <input type="radio" name="question-response" id="question-a" value="${store.questions[store.questionNumber].answers[0]}" required/>
       <label for="${store.questions[store.questionNumber].answers[0]}"><span class="response">${store.questions[store.questionNumber].answers[0]}</span></label><br>
       <input type="radio" name="question-response" id="question-b" value="${store.questions[store.questionNumber].answers[1]}" required/>
       <label for="${store.questions[store.questionNumber].answers[1]}"><span class="response">${store.questions[store.questionNumber].answers[1]}</span></label><br>
       <input type="radio" name="question-response" id="question-c" value="${store.questions[store.questionNumber].answers[2]}" required/>
       <label for="${store.questions[store.questionNumber].answers[2]}"><span class="response">${store.questions[store.questionNumber].answers[2]}</span></label><br>
       <input type="radio" name="question-response" id="question-d" value="${store.questions[store.questionNumber].answers[3]}" required/>
       <label for="${store.questions[store.questionNumber].answers[3]}"><span class="response">${store.questions[store.questionNumber].answers[3]}</span></label><br>
       <button type ="submit" id="js-answer-submit">Submit</button>
    </form>  
    <p class="score">Current Score: ${store.score}/${store.questionNumber}</p>
  </div>`;
}

function generateFeedbackCorrect(){
  $('main').html(
    `<h2>${store.questionNumber + 1}: ${store.questions[store.questionNumber].question}</h2>
    <p>Correct! ${store.questions[store.questionNumber].correctAnswer} was the right answer.</p>
    <p class="score">Current Score: ${store.score}/${store.questionNumber + 1}</p>
    <button id="js-next-question">Next</button>`
    );
}

function generateFeedbackWrong(userAnswer) {   
  $('main').html(
    `<h2>${store.questionNumber + 1}: ${store.questions[store.questionNumber].question}</h2>
    <p>Sorry, that was inccorect. The right answer is ${store.questions[store.questionNumber].correctAnswer}</p>
    <p>Current Score: ${store.score}/${store.questionNumber + 1}</p>
    <button id='js-next-question'>Next</button>`)
}

/********** EVENT HANDLER FUNCTIONS **********/
function handleBeginQuiz(){
  $('main').on('click', '#js-start', (event) => {
      nextQuestion();
    })
}

function handleQuestionResponse(){
  $("main").on("submit", ".js-question-form", function(event){
    event.preventDefault();
    checkFeedback();  
  })
}

function handleNextQuestion(){
  $("main").on("click", "#js-next-question", function(event){
  nextQuestion();
  })
}

function handleQuizRestart() {
  $("main").on("click", "#js-quiz-restart", function(event){
    store.score = 0;
    store.questionNumber = -1;
    render();
  })
}

/********** OTHER FUNCTIONS **********/
function checkFeedback() {
  const userAnswer = $("input[type='radio'][name='question-response']:checked").val();
    const correct = checkAnswer(userAnswer);
    console.log(userAnswer);
    if (correct) {
      generateFeedbackCorrect();
    }
    else {
      generateFeedbackWrong();
    }       
}

function checkAnswer(userAnswer){
  if (userAnswer === store.questions[store.questionNumber].correctAnswer) {
    store.score += 1;
    console.log(store.score);
    return true;
  }
  else {
    return false;
  }
}

function nextQuestion(){
  store.questionNumber += 1;
  render();
}

function quizApp() {
  render();
  handleBeginQuiz();
  handleQuestionResponse();
  handleNextQuestion();
  handleQuizRestart();
}

$(quizApp);

/**
   * 
   * Technical requirements:
   * 
   * Your app should include a render() function, that regenerates the view each time the store is updated. 
   * See your course material and access support for more details.
   *
   * NO additional HTML elements should be added to the index.html file.
   *
   * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
   *
   * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
   * 
   */
  
  /********** TEMPLATE GENERATION FUNCTIONS **********/
  
  // These functions return HTML templates
  
  /********** RENDER FUNCTION(S) **********/
  
  // This function conditionally replaces the contents of the <main> tag based on the state of the store
  
  /********** EVENT HANDLER FUNCTIONS **********/
  
// These functions handle events (submit, click, etc)
