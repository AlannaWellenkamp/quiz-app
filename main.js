
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
        correctAnswer: 'a'
      },
      {
        question: 'A woodpecker can peck how many times each second?',
        answers: [
          '15',
          '20',
          '25',
          '30'
        ],
        correctAnswer: 'b'
      },
      {
        question: 'A domestic cat has how many muscles in each ear?',
        answers: [
          '16',
          '24',
          '32',
          '40'
        ],
        correctAnswer: 'c'
      },
      {
        question: 'An elephant can smell water up to how many miles away?',
        answers: [
          '3',
          '6',
          '9',
          '12'
        ],
        correctAnswer: 'd'
      },
      {
        question: 'Which of the following is true? Flamingos...',
        answers: [
          'will sometimes have their legs freeze in a body of water overnight, only to thaw the next morning with no repercussions',
          'can drink boiling water',
          'can survive exposure to arsenic, other caustic elements, and poisonous gasses',
          'all of the above'
        ],
        correctAnswer: 'd'
      }
    ],
    quizStarted: false,
    questionNumber: 0,
    score: 0
};

function render(){
  //render relevant html
  const currentRender = generateHtml(store);

  $('main').html(currentRender);
}

function generateHtml(store){
  //determine which element to create
  //if quiz started ! generateBeginElement
  if (store.quizStarted === false) {
    return generateBeginElement();
  }
  if ((store.questionNumber) === store.questions.length) {
    return generateEndElement();
  }
  else {
    return generateQuestionElement(store);
  }
  
  //if quiz end generateEndElement
  //else generateQuestionElement
}

function generateBeginElement(){
  return `<p>Hi there, ready for a quiz on some animal trivia?</p>
  <form>
    <button>I'm ready!</button>
  </form>`

}

function generateEndElement(){
  return `<p>wanna play again?</p>
  <form>
    <button>I'm ready!</button>
  </form>`

}

function generateQuestionElement(store){
  //produce relevant html for question
  const quest = "fuckdkd"
  return `<div>
    <div class="question group">
    <form class="item">
        <h2>${store.questions[store.questionNumber].question}</h2>
         <input type="radio" name="question-response" id="question-a" value="a"/>
         <label for="a">a) ${store.questions[store.questionNumber].answers[0]}</label><br>
         <input type="radio" name="question-response" id="question-b" value="b"/>
         <label for="b">b) ${store.questions[store.questionNumber].answers[1]}</label><br>
         <input type="radio" name="question-response" id="question-c" value="c"/>
         <label for="c">c) ${store.questions[store.questionNumber].answers[2]}</label><br>
         <input type="radio" name="question-response" id="question-d" value="d"/>
         <label for="d">d) ${store.questions[store.questionNumber].answers[3]}</label><br>
          <button type="submit">Submit</button>
      </form>  
    </div>
  </div>`;
}

function handleBeginQuiz(){
  //listen for and enact begin quiz
}

function handleQuestionResponse(){
  //listen for question answer submit
}

function responseFeedback(){
  //offer responsive feedback to answer submitted
}

function handleNextQuestion(){
  //listen for next question click
}

function quizEnd(){
  //render score and present with option to restart
}







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

function quizApp() {
  render();
  
}

$(quizApp);