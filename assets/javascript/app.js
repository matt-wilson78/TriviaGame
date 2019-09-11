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
        answer: 0,
    },
    {
        question: "Of the founding members of Pink Floyd, which one released an album titled 'The Madcap Laughs'?",
        choices: ["Roger Waters", "Nick Mason", "Syd Barrett", "Richard Wright"],
        answer: 2,
    },
    {
        question: "How many weeks has 'Darkside of the Moon' spent on the Billboard Top 200 chart?",
        choices: ["278", "16", "114", "937"],
        answer: 3,
    },
    {
        question: "What ancient city was the setting for an iconic 1974 live recording?",
        choices: ["Kathmandu", "Pompeii", "Athens", "Cairo"],
        answer: 1,
    },
    {
        question: "This is one of the most well known guitar solo's of all time. What song is it from?",
        choices: ["Another Brink in the Wall Part 2", "Echoes", "Wish You Were Here", "Comfortably Numb"],
        answer: 3,
    },
    {
        question: "What is the name of Pink Floyd's first studio album after Roger Waters was out of the band?",
        choices: ["The Final Cut", "Pipers at the Gates of Dawn", "A Momentary Lapse of Reason", "Atom Heart Mother"],
        answer: 2,
    },
    {
        question: "Who is the song 'Shine On You Crazy Diamond' about?",
        choices: ["Syd Barrett", "Charles Manson", "Roger Waters", "John Lennon"],
        answer: 0,
    },
    {
        question: "What album did David Gilmour first play on?",
        choices: ["Pipers at the Gates of Dawn", "Ummagumma", "Dark Side of the Moon", "A Saucerful of Secrets"],
        answer: 3,
    },
    {
        question: "What was the name of Pink Floyd's first single?",
        choices: ["Wish You Were Here", "Bike", "Arnold Layne", "See Emily Play"],
        answer: 2,
    },
    {
        question: "Which of the following is NOT a Pink Floyd album?",
        choices: ["The Final Cut", "Wish You Were Here", "On An Island", "The Division Bell"],
        answer: 2,
    },
]

for (let i = 0; i < quizContent.length; i++) {
    console.log(quizContent[i].question);
}
