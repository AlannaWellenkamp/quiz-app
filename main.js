
const store = {
    questions: [
      {
        question: 'What color is broccoli?',
        answers: [
          'red',
          'orange',
          'pink',
          'green'
        ],
        correctAnswer: 'green'
      },
      {
        question: 'What is the current year?',
        answers: [
          '1970',
          '2015',
          '2019',
          '2005'
        ],
        correctAnswer: '2019'
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
    return generateQuestionElement();
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

function generateQuestionElement(question){
  //produce relevant html for question
  return `<div>
    <div class="question group">
    <form class="item">
        <h2>Question Here</h2>
         <input type="radio" name="question-1-response" id="question-1-a" value="a"/>
         <label for="a">a) response a</label><br>
         <input type="radio" name="question-1-response" id="question-1-b" value="b"/>
         <label for="b">a) response b</label><br>
         <input type="radio" name="question-1-response" id="question-1-a" value="c"/>
         <label for="c">a) response c</label><br>
         <input type="radio" name="question-1-response" id="question-1-a" value="d"/>
         <label for="d">a) response d</label><br>
          <button type="submit">Submit</button>
      </form>   
      <img src="images/cat.jpg" alt="striped cat sitting with ears down" class="item">
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