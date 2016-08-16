var userName = prompt('Hey user! What\'s your name?');
alert('Welcome to the site ' + userName);
var questionOne = prompt('Is Brian\'s favorit color blue?');
questionOne = questionOne.toUpperCase();
console.log('this is the first value of question ' + questionOne);
if (questionOne === 'Y') {
  console.log('This is the if');
  alert('Congrats ' + userName + '. You got that right!');
} else {
  console.log('This is the else');
  alert('Sad face :(  ' + userName + ', you got that wrong!');
}
var questionTwo = prompt('Am I under the age of 35?').toUpperCase();

console.log('this is the second value of question', questionTwo);
if (questionTwo === 'Y') {
  alert('You guessed it right ' + userName);
} else {
  alert('Sorry, womp womp.. that\'s wrong');
}
var questionThree = prompt('Can Brian play the piano?').toUpperCase();
if (questionThree === 'Y') {
  alert('You got it wrong. He\'s not a musician.');
} else if (questionThree === 'N') {
  alert('That\'s totaly correct!');
} else {
}

var questionFour = prompt('What is Brian\'s favorit pet?').toUpperCase();
var pets = ['dog', 'cat', 'fish', 'monkey'];
if (pets.indexOf(questionFour) >= 0) {
  alert('Congrats! You got it right.');
} else {
  alert(':( wrong.');
}
var questionFive = prompt('What is my favorite food?').toUpperCase();
if (questionFive === 'pizza' || questionFive === 'carrots' || questionFive === 'burger' || questionFive === 'rice') {
  alert('Congrats! You got it right.');
} else {
  alert('Wrong.');
}

var questionSix = prompt('Is Brian tall??').toUpperCase();
if (questionSix === 'N') {
  alert('Congrats! You got it right.');
} else {
  alert('Wrong.');
}

var questionSeven = parseInt(prompt('Guess my number between 1 and 50')); // => '30'
var answer = 30;


while (questionSeven !== answer) {
  if (isNaN(questionSeven)) {
    questionSeven = parseInt(prompt('Guess again, that was not a number'));
  } else if (questionSeven > answer) {
    questionSeven = parseInt(prompt('Guess again, that was too high'));
  } else if (questionSeven < answer) {
    questionSeven = parseInt(prompt('Guess again, that was too low'));
  }
}

if (questionSeven === answer){
  alert('That is the right answer! Yippie! ');
}
var cars = ['bmw', 'toyota', 'pinto', 'vw'];
var questionEight = prompt('Guess one of my favorite cars').toUpperCase();
var isTrue = false;

for (var i = 0; i < cars.length; i++) {
  if (questionEight === cars[i]) {
    isTrue = true;
    break;
  }
}

if (isTrue) {
  alert('Congrats that is a favorite');
} else {
  alert('That car is not one of my favorites');
}

function toggle_visibility(id) {
  var e = document.getElementById(id);
  if (e.style.display == 'block' || e.style.display=='') e.style.display = 'none';
  else e.style.display = 'block';
}
