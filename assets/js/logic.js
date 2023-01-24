

  var questionArea = document.getElementById("#questions"); 
  const choices   = document.getElementById("#choices");
  let current   = 0;
  const questionTitle = document.getElementById("#question-title");
  let   clickAnswer = 0;
  const output = '';
  let   score = 0;
  let   scoreCount = 0;
  const itsRight = 0;
  const itsWrong = 0;
  const audioCorrect = new Audio("../sfx/correct.wav");
  const audioWrong = new Audio("../sfx/incorrect.wav");
  // An object that holds all the questions + possible answers and the solution.
     // In the array --> last digit gives the right answer position
     const  allQuestions = {
      'How many colours in the rainbow?' : ['7', '5', '6', '4', 0],
      'What can you append with .append?' : ['anything', 'elements', 'strings', 'numbers', 1],
      'what can you append with .appendChild?' : ['only elements', 'only strings', 'only cats', 'all of the above', 0],
      'what format for variable names does javascript use?' : ['camelCase', 'snake-format', 'panda-eyes', 'blue eyes', 0],
      'which symbol do you use for assigning content' : ['=-', '===', '=', 2],
      'what do you use to retrieve visible text from a site?' : ['innerText', 'textContent', 'getAtrribute()', 'please', 0],
      'which method creates an element' : ['setAttribute', 'innerHTML', 'createElement', 'getAttribute', 2],
      'how do you remove an attribute?' : ['removeAttribute', 'deleteAttribute', 'classList.toggle()', 'be gone', 0],
      'how do you choose the next element sibling' : ['querySelector()', 'previousElementSibling', '.closest()', 'nextElementSibling()', 3]
    };

function setScore() {
  score.textContent = scoreCount;
  localStorage.setItem("scoreCount", scoreCount);
}

// Setting the timer to begin onClick of button in index.html
function startTimer() {
var timeleft = 100;
var downloadTimer = setInterval(function(){
  if(timeleft <= 0){
    clearInterval(downloadTimer);
    document.getElementById("countdown").innerHTML = "Finished";
  } else {
    document.getElementById("countdown").innerHTML = timeleft + " seconds remaining";
  }
  timeleft -= 1;
  // Tests if time has run out
  if (timeleft === 0) {
    // Clears interval
    clearInterval();
    loseGame();
  }

}, 1000);
hideStart();
createQuestions();
}
// hide the start text and display the questions instead
function hideStart() {
  const startScreen = document.querySelector("#start-screen");
  startScreen.remove();
};

// Create questions function
function createQuestions() {
  var question = Object.keys(allQuestions)[current];  
  var answers = Object.values(allQuestions)[current];

// const body = document.body;
  const wrapper = document.querySelector(".wrapper");
  const list = document.createElement("ol");
  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");
  const li4 = document.createElement("li");
  // itsRight = ("You are correct!");
  // itsWrong = ("You are wrong!");

  // Assign answers to choice variables in sequence
  const choice1 = answers[0];
  const choice2 = answers[1];
  const choice3 = answers[2];
  const choice4 = answers[3];
  const answer = answers[answers.length-1]

  // Append to the page
  wrapper.append(question);
  wrapper.appendChild(list);
  li1.textContent = choice1;
  li2.textContent = choice2;
  li3.textContent = choice3;
  li4.textContent = choice4;
    list.append(li1); 
  list.append(li2); 
  list.append(li3); 
  list.append(li4); 
 
  // add event handlers
if (timeleft = 0) {
  return;
} else {
  li1.addEventListener("click", function() {
    clickAnswer=0;
 
  });
  li2.addEventListener("click", function() {
    clickAnswer=1;
    
  });
  li3.addEventListener("click", function() {
    clickAnswer=2;
    
  });
  li4.addEventListener("click", function() {
    clickAnswer=3;

  });

  if (clickAnswer == answer ) {
    // play sound and say you are correct and add one to the score and go to next question
    audioCorrect.play();
    wrapper.append(itsRight);
    scoreCount++;  
    localStorage.setItem("scoreCount", scoreCount);
    // alert(scoreCount); 
  } else {
// play sound for incorrect, say you are wrong, leave score unchanged, remove 10 seconds from interval
audioWrong.play();
list.append(itsWrong); 
timeleft -= 10;
  }
  current++;  
  
return;
}
}
function init() {
  setScore();
  return;
}
  init();