// You'll create a trivia game that shows only one question until the player answers it or their time runs out.

// * If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

// * The scenario is similar for wrong answers and time-outs.

//   * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
//   * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

// * On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).

//What variables will I need?
//array for questions
//corresponding array for answers?
//correct answers
//wrong answers
//array for different congrats for correct answers

//What functions will I need?
//function to run through array & post questions & answers
//function to check for right answer
//timer for each question
//restart game

//What will I use jquery for?
//pop questions onto screen
//show congrats screen
//show final score screen
//click functions for answers

var quizContent = [
    {
        question: "Which of the following is NOT the subject of a song on the 'Animals' album?",
        choices: ["Cow", "Sheep", "Pig", "Dog"],
        answer: "Cow"
    },
    {
        question: "Throughout the years, members & former members of Pink Floyd have released quite a few solo albums. Who has NOT released a solo album??",
        choices: ["Roger Waters", "Nick Mason", "Syd Barrett", "David Gilmour"],
        answer: "Nick Mason"
    },
    {
        question: "How many weeks has 'Darkside of the Moon' spent on the Billboard Top 200 chart?",
        choices: ["278", "16", "114", "937"],
        answer: "937"
    },
    {
        question: "What ancient city was the setting for an iconic 1974 live recording?",
        choices: ["Kathmandu", "Pompeii", "Athens", "Cairo"],
        answer: "Pompeii"
    },
    {
        question: "What song have you been listening to?",
        choices: ["Another Brink in the Wall Part 2", "Echoes", "Wish You Were Here", "Time"],
        answer: "Time"
    },
    {
        question: "What is the name of Pink Floyd's first studio album after Roger Waters was out of the band?",
        choices: ["The Final Cut", "Pipers at the Gates of Dawn", "A Momentary Lapse of Reason", "Atom Heart Mother"],
        answer: "A Momentary Lapse of Reason"
    },
    {
        question: "Who is the song 'Shine On You Crazy Diamond' about?",
        choices: ["Syd Barrett", "Charles Manson", "Roger Waters", "John Lennon"],
        answer: "Syd Barrett"
    },
    {
        question: "What album did David Gilmour first play on?",
        choices: ["Pipers at the Gates of Dawn", "Ummagumma", "Dark Side of the Moon", "A Saucerful of Secrets"],
        answer: "A Saucerful of Secrets"
    },
    {
        question: "What was the name of Pink Floyd's first single?",
        choices: ["Wish You Were Here", "Bike", "Arnold Layne", "See Emily Play"],
        answer: "Arnold Layne"
    },
    {
        question: "Which of the following is NOT a Pink Floyd album?",
        choices: ["The Final Cut", "Wish You Were Here", "On An Island", "The Division Bell"],
        answer: "On An Island"
    },
]

var userGuess = "";
var countDown = 3;
var correct = 0;
var wrong = 0;
var currentQuestion = 0;
var timer;

//Function to start/ restart game

function start() {

}

//function for timer
function timerCountdown() {
    countDown--;
    $("#timerHere").html("Timer: " + countDown);
    if (countDown === 0) {
        clearInterval(timer);
        wrong++;
        nextQuestion();
    }
}

//Function to move to next question or end game
function nextQuestion() {

    var quizOver = (quizContent.length - 1) === currentQuestion;
    if (quizOver) {
        console.log("Game Over")
    } else {
        currentQuestion++;
        quizPopulate();

    }
}

//Function to push individual questions to the DOM, also begin timer for that question
function quizPopulate() {

    countDown = 3;
    timer = setInterval(timerCountdown, 1000);

    var question = quizContent[currentQuestion].question;
    var choices = quizContent[currentQuestion].choices;

    $("#timerHere").html("Timer: " + countDown);
    $("#questionCard").html(question);
    choicesToDOM(choices);


}

//Function to push choices for corresponding question to DOM
function choicesToDOM(choices) {

    $("#answerCard").empty();

    for (var i = 0; i < choices.length; i++) {
        var populateAnswers = $("<button class='btn btn-primary mt-2 mb-2 w-25 text-center'</button>");
        populateAnswers.text(choices[i]);
        populateAnswers.attr("data-answer", choices[i]);
        $("#answerCard").append(populateAnswers);

    }
}

//Function to check if answer is correct, add to correct or wrong, move to next question

//Function to push final "score" screen to DOM

//Function to dispay wrong, right, or time up

quizPopulate();
