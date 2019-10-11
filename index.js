//Declare response array
var responses = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."];

//Target elements for interaction
var userQuestion = document.querySelector("#user-question");
var userQuestionSubmit = document.querySelector("#user-question-submit");
var eightBallImage = document.querySelector("#eight-ball");
var questionDisplay = document.querySelector("#question-display");
var answerDisplay = document.querySelector("#answer-display");

//Create function for user question and response interaction
function showQuestionResponse() {
  //store user input
  var question = userQuestion.value;
  //generate random number
  var rand = Math.floor(Math.random() * 20);
  //pull a random response from the responses array using that random number
  var randomResponse = responses[rand];
  //hide eight ball
  eightBallImage.classList.add("hide");
  //assign question and answer paragraphs
  questionDisplay.innerText = `"${question}"`;
  answerDisplay.innerText = randomResponse;
  //show question and answerDisplay
  questionDisplay.classList.remove("hide");
  answerDisplay.classList.remove("hide");
  //clear the input box
  userQuestion.value = "";
  //disable question input
  userQuestionSubmit.disabled = true;
}

//Involk the function when user clicks the submit button
userQuestionSubmit.addEventListener("click", function() {
    showQuestionResponse();
});
