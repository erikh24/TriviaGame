

// TIMER FOR HOW LONG IS LEFT TO COMPLETE THE TRIVIA GAME, MAY BE ABLE TO SIMPLIFY THIS?? 
function countDown(secs, elem) {
    var element = document.getElementById(elem);
    element.innerHTML = "You have " + secs + " seconds left to finish";
    if (secs < 1) {
        clearTimeout(timer);
        element.innerHTML = "<h2>Times Up!!</h2>";

        ///// *** need to make it go to the results screen when timer hits zero /////
        ///// code to go here? /////
    }
    secs--;
    var timer = setTimeout('countDown(' + secs + ',"' + elem + '")', 1000);
}
// KEEPING TRACK OF USERS RIGHT OR WRONG GUESSES TO BE DISPLAYED ON THE RESULTS SCREEN

var correctGuess = 0;
var wrongGuess = 0;
var noGuess = 0;


$(document).ready(function () {
    $("#jumbotron").show();
    $("#jumbotron2").hide();
    $("#jumbotron3").hide();
});


// BEGIN GAME WHEN 'START' IS CLICKED 
$("#start-button").click(function () {
    $("#jumbotron").hide();
    $("#jumbotron2").show();
    countDown(60, "counter");
});

// SUBMIT ANSWERS TO QUESTIONS WHEN 'SUBMIT' IS CLICKED AND DISPLAY RESULTS
$("#submit-button").click(function () {

    var test1 = $("#question1 input[type=radio]:checked").val();
    var test2 = $("#question2 input[type=radio]:checked").val();
    var test3 = $("#question3 input[type=radio]:checked").val();
    var test4 = $("#question4 input[type=radio]:checked").val();
    var test5 = $("#question5 input[type=radio]:checked").val();
    var test6 = $("#question6 input[type=radio]:checked").val();


      if (test1 === "option2") {
        correctGuess++;
    } else if (test1 === "option1" || test1 === "option3") {
        wrongGuess++
        console.log(wrongGuess)
    } else {
        noGuess++
    }
/////////////////////
    if (test2 === "option1") {
        correctGuess++
    } else if (test2 === "option2" || test2 === "option3") {
        wrongGuess++
        console.log(wrongGuess)
    } else {
        noGuess++
    }
/////////////////////
    if (test3 === "option2") {
        correctGuess++;
    } else if (test3 === "option1" || test3 === "option3") {
        wrongGuess++
        console.log(wrongGuess)
    } else {
        noGuess++
    }
/////////////////////
    if (test4 === "option3") {
        correctGuess++;
    } else if (test4 === "option1" || test4 === "option2") {
        wrongGuess++
        console.log(wrongGuess)
    } else {
        noGuess++
    }
/////////////////////
    if (test5 === "option2") {
        correctGuess++;
    } else if (test5 === "option1" || test5 === "option3") {
        wrongGuess++
        console.log(wrongGuess)
    } else {
        noGuess++
    }
///////////////////
    if (test6 === "option2") {
        correctGuess++;
    } else if (test6 === "option1" || test6 === "option3") {
        wrongGuess++
    } else {
        noGuess++
    }
    $('#rightAnswers').append('Right Answers: ' + correctGuess);
    $('#wrongAnswers').append('Wrong Answers: ' + wrongGuess);
    $('#noAnswer').append('Unanswered: ' + noGuess);

    $("#jumbotron").hide();
    $("#jumbotron2").hide();
    $("#jumbotron3").show();
});

// THE TRIVIA QUESTIONS
var questionArr = [
    "1. The Last of Us released for Playstation 3 in this year and went on to win multiple Game of the Year Awards",
    "2. What is Mega Man known as in Japan?",
    "3. What upcoming game features Keanu Reeves as the character Johnny Silverhand?",
    "4. Which of these games was not made from Insomniac Games?",
    "5. Which game console came first?",
    "6. What button combination gives you 30 lives in Contra on the Nintendo Entertainment System?"
];


// THE ANSWERS TO THE TRIVIA QUESTIONS
var q1Answers = [
    "2012",
    "2013", // This is the answer
    "2014"
]

var q2Answers = [
    "Rock Man", // This is the answer
    "Megaman",
    "Mighty Man"
]

var q3Answers = [
    "Borderlands 3",
    "Cyberpunk 2077", // This is the answer
    "Call of Duty Modern Warfare"
]

var q4Answers = [
    "Ratchet & Clank: Going Commando",
    "Resistance 3",
    "Jak & Daxter" // This is the answer
]

var q5Answers = [
    "Original Xbox",
    "Dreamcast", // This is the answer
    "Playstation 2"
]

var q6Answers = [
    "&darr;	&darr; &uarr; &uarr; &larr;	&larr; &rarr; &rarr; B, A, Start ",
    "&uarr; &uarr; &darr; &darr; &larr; &rarr; &larr; &rarr; B, A, Start", // This is the answer
    "&uarr; &darr; &larr; &rarr; &rarr; &larr; &darr; &uarr; B, A, Start"
]

// MAKING QUESTION 1 SHOW ON PAGE
$('#q1').append('<p>' + questionArr[0] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 1
$('#q1a1').append('<p>' + q1Answers[0] + '</p>');
$('#q1a2').append('<p>' + q1Answers[1] + '</p>');
$('#q1a3').append('<p>' + q1Answers[2] + '</p>');


// MAKING QUESTION 2 SHOW ON PAGE
$('#q2').append('<p>' + questionArr[1] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 2
$('#q2a1').append('<p>' + q2Answers[0] + '</p>');
$('#q2a2').append('<p>' + q2Answers[1] + '</p>');
$('#q2a3').append('<p>' + q2Answers[2] + '</p>');


// MAKING QUESTION 3 SHOW ON PAGE
$('#q3').append('<p>' + questionArr[2] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 3
$('#q3a1').append('<p>' + q3Answers[0] + '</p>');
$('#q3a2').append('<p>' + q3Answers[1] + '</p>');
$('#q3a3').append('<p>' + q3Answers[2] + '</p>');


// MAKING QUESTION 4 SHOW ON PAGE
$('#q4').append('<p>' + questionArr[3] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 4 
$('#q4a1').append('<p>' + q4Answers[0] + '</p>');
$('#q4a2').append('<p>' + q4Answers[1] + '</p>');
$('#q4a3').append('<p>' + q4Answers[2] + '</p>');


// MAKING QUESTION 5 SHOW ON PAGE
$('#q5').append('<p>' + questionArr[4] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 5
$('#q5a1').append('<p>' + q5Answers[0] + '</p>');
$('#q5a2').append('<p>' + q5Answers[1] + '</p>');
$('#q5a3').append('<p>' + q5Answers[2] + '</p>');


// MAKING QUESTION 6 SHOW ON PAGE
$('#q6').append('<p>' + questionArr[5] + '</p>');

// LISTING THE ANSWER OPTIONS FOR QUESTION 6
$('#q6a1').append('<p>' + q6Answers[0] + '</p>');
$('#q6a2').append('<p>' + q6Answers[1] + '</p>');
$('#q6a3').append('<p>' + q6Answers[2] + '</p>');

