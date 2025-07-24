var cozyScore = 0;
var socialScore = 0;
var elegantScore = 0;
var chillScore = 0;

var questionCount = 0;

var result = document.getElementById("result");

var displayResult = document.getElementById("displayResult");

var restart = document.getElementById("restart");

var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");

var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
var q6a4 = document.getElementById("q6a4");

q1a1.addEventListener("click", cozy);
q1a2.addEventListener("click", chill);
q1a3.addEventListener("click", social);
q1a4.addEventListener("click", elegant);

q2a1.addEventListener("click", cozy);
q2a2.addEventListener("click", social);
q2a3.addEventListener("click", elegant);
q2a4.addEventListener("click", chill);

q3a1.addEventListener("click", cozy);
q3a2.addEventListener("click", social);
q3a3.addEventListener("click", elegant);
q3a4.addEventListener("click", chill);

q4a1.addEventListener("click", cozy);
q4a2.addEventListener("click", social);
q4a3.addEventListener("click", elegant);
q4a4.addEventListener("click", chill);

q5a1.addEventListener("click", cozy);
q5a2.addEventListener("click", elegant);
q5a3.addEventListener("click", chill);
q5a4.addEventListener("click", social);

q6a1.addEventListener("click", chill);
q6a2.addEventListener("click", social);
q6a3.addEventListener("click", elegant);
q6a4.addEventListener("click", cozy);

restart.addEventListener("click", restartQuiz);

function cozy() {
    cozyScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " cozyScore = " + cozyScore);

    if(questionCount == 6) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function social() {
    socialScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " socialScore = " + socialScore);

    if(questionCount == 6) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function elegant() {
    elegantScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " elegantScore = " + elegantScore);

    if(questionCount == 6) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function chill() {
    chillScore += 1;
    questionCount += 1;
    console.log("questionCount = " + questionCount + " chillScore = " + chillScore);

    if(questionCount == 6) {
        console.log("The quiz is done!");
        updateResult();
    }
}

function updateResult() {
    displayResult.addEventListener("click", reveal);
}

function reveal() {
    if(cozyScore >= 3) {
        result.innerHTML = "You are the Cozy Classic! You are loyal, comforting, and a homebody. You find joy in the little things.";
        console.log("You are the Cozy Classic! You are loyal, comforting, and a homebody. You find joy in the little things.");
    }
    else if(socialScore >= 3) {
        result.innerHTML = "You are the Social Butterfly! You are fun and outgoing. You are always up for an adventure and love to party.";
        console.log("You are the Social Butterfly! You are fun and outgoing. You are always up for an adventure and love to party.");
    }
    else if(elegantScore >= 3) {
        result.innerHTML = "You are the Elegant Explorer! You are sophisticated and thoughtful. You value quality over quantity and seek beauty in everything.";
        console.log("You are the Elegant Explorer! You are sophisticated and thoughtful. You value quality over quantity and seek beauty in everything.");
    }
    else if(chillScore >= 3) {
        result.innerHTML = "You are the Chill Dreamer! You are relaxed and have a sense of humor. You are low-maintenance and go with the flow.";
        console.log("You are the Chill Dreamer! You are relaxed and have a sense of humor. You are low-maintenance and go with the flow.");
    }
    else {
        result.innerHTML = "You are a blend of sweet traits!";
        console.log("You are a blend of sweet traits!");
    }
}

function restartQuiz() {
    result.innerHTML = "You are...";
    cozyScore = 0;
    socialScore = 0;
    elegantScore = 0;
    chillScore = 0;
    questionCount = 0;
    enableQuestions();
}

q1a1.addEventListener("click", disableQ1);
q1a2.addEventListener("click", disableQ1);
q1a3.addEventListener("click", disableQ1);
q1a4.addEventListener("click", disableQ1);

q2a1.addEventListener("click", disableQ2);
q2a2.addEventListener("click", disableQ2);
q2a3.addEventListener("click", disableQ2);
q2a4.addEventListener("click", disableQ2);

q3a1.addEventListener("click", disableQ3);
q3a2.addEventListener("click", disableQ3);
q3a3.addEventListener("click", disableQ3);
q3a4.addEventListener("click", disableQ3);

q4a1.addEventListener("click", disableQ4);
q4a2.addEventListener("click", disableQ4);
q4a3.addEventListener("click", disableQ4);
q4a4.addEventListener("click", disableQ4);

q5a1.addEventListener("click", disableQ5);
q5a2.addEventListener("click", disableQ5);
q5a3.addEventListener("click", disableQ5);
q5a4.addEventListener("click", disableQ5);

q6a1.addEventListener("click", disableQ6);
q6a2.addEventListener("click", disableQ6);
q6a3.addEventListener("click", disableQ6);
q6a4.addEventListener("click", disableQ6);

function disableQ1() {
    q1a1.disabled = true;
    q1a2.disabled = true;
    q1a3.disabled = true;
    q1a4.disabled = true;
}

function disableQ2() {
    q2a1.disabled = true;
    q2a2.disabled = true;
    q2a3.disabled = true;
    q2a4.disabled = true;
}

function disableQ3() {
    q3a1.disabled = true;
    q3a2.disabled = true;
    q3a3.disabled = true;
    q3a4.disabled = true;
}

function disableQ4() {
    q4a1.disabled = true;
    q4a2.disabled = true;
    q4a3.disabled = true;
    q4a4.disabled = true;
}

function disableQ5() {
    q5a1.disabled = true;
    q5a2.disabled = true;
    q5a3.disabled = true;
    q5a4.disabled = true;
}

function disableQ6() {
    q6a1.disabled = true;
    q6a2.disabled = true;
    q6a3.disabled = true;
    q6a4.disabled = true;
}

function enableQuestions() {
    q1a1.disabled = false;
    q1a2.disabled = false;
    q1a3.disabled = false;
    q1a4.disabled = false;
    q2a1.disabled = false;
    q2a2.disabled = false;
    q2a3.disabled = false;
    q2a4.disabled = false;
    q3a1.disabled = false;
    q3a2.disabled = false;
    q3a3.disabled = false;
    q3a4.disabled = false;
    q4a1.disabled = false;
    q4a2.disabled = false;
    q4a3.disabled = false;
    q4a4.disabled = false;
    q5a1.disabled = false;
    q5a2.disabled = false;
    q5a3.disabled = false;
    q5a4.disabled = false;
    q6a1.disabled = false;
    q6a2.disabled = false;
    q6a3.disabled = false;
    q6a4.disabled = false;
}