'use strict';
var table = document.getElementById('pinhere'); //Where we will be appending/interacting with.
var allArrays = []; //This is ALL our arrays
var arrayR1 = [];  //Images for first round
var arrayR2 = []; //Images for second round
var arrayR3 = []; //Images for third round
var arrayR4 = []; //Images for fourth round
var newRay = []; //The current array
var rightChoice = 0; //The correct choice for the game
var timesClicked = 0;
var round = 1
var cardBack = 'game-cards/bg.png';
var score = 0;


function ImgR1(name, path) {//This is our constructor function
  this.name = name;
  this.path = path;
  arrayR1.push(this);
  // console.log(this.name + "was sucessfully created.");
}

function ImgR2(name, path) {
  this.name = name;
  this.path = path;
  arrayR2.push(this);
};

function ImgR3(name, path) {
  this.name = name;
  this.path = path;
  arrayR3.push(this);
};

function ImgR4(name, path) {
  this.name = name;
  this.path = path;
  arrayR4.push(this);
};

allArrays.push(arrayR1);
allArrays.push(arrayR2);
allArrays.push(arrayR3);
allArrays.push(arrayR4);

new ImgR1('t1', 'game-cards/travel/t1.png');
new ImgR1('t2', 'game-cards/travel/t2.png');
new ImgR1('t3', 'game-cards/travel/t3.png');
new ImgR1('t4', 'game-cards/travel/t4.png');
new ImgR1('t5', 'game-cards/travel/t5.png');
new ImgR1('t6', 'game-cards/travel/t6.png');
new ImgR1('t7', 'game-cards/travel/t7.png');
new ImgR1('t8', 'game-cards/travel/t8.png');
new ImgR1('t9', 'game-cards/travel/t9.png');
new ImgR1('t10', 'game-cards/travel/t10.png');
new ImgR1('t11', 'game-cards/travel/t11.png');
new ImgR1('t12', 'game-cards/travel/t12.png');
new ImgR1('t13', 'game-cards/travel/t13.png');
new ImgR1('t14', 'game-cards/travel/t14.png');
new ImgR1('t15', 'game-cards/travel/t15.png');

new ImgR2('c1', 'game-cards/cars/c1.png');
new ImgR2('c2', 'game-cards/cars/c2.png');
new ImgR2('c3', 'game-cards/cars/c3.png');
new ImgR2('c4', 'game-cards/cars/c4.png');
new ImgR2('c5', 'game-cards/cars/c5.png');
new ImgR2('c6', 'game-cards/cars/c6.png');
new ImgR2('c7', 'game-cards/cars/c7.png');
new ImgR2('c8', 'game-cards/cars/c8.png');
new ImgR2('c9', 'game-cards/cars/c9.png');
new ImgR2('c10', 'game-cards/cars/c10.png');
new ImgR2('c11', 'game-cards/cars/c11.png');
new ImgR2('c12', 'game-cards/cars/c12.png');
new ImgR2('c13', 'game-cards/cars/c13.png');
new ImgR2('c14', 'game-cards/cars/c14.png');
new ImgR2('c15', 'game-cards/cars/c15.png');

new ImgR3('db1', 'game-cards/david-bowie/db1.png');
new ImgR3('db2', 'game-cards/david-bowie/db2.png');
new ImgR3('db3', 'game-cards/david-bowie/db3.png');
new ImgR3('db4', 'game-cards/david-bowie/db4.png');
new ImgR3('db5', 'game-cards/david-bowie/db5.png');
new ImgR3('db6', 'game-cards/david-bowie/db6.png');
new ImgR3('db7', 'game-cards/david-bowie/db7.png');
new ImgR3('db8', 'game-cards/david-bowie/db8.png');
new ImgR3('db9', 'game-cards/david-bowie/db9.png');
new ImgR3('db10', 'game-cards/david-bowie/db10.png');
new ImgR3('db11', 'game-cards/david-bowie/db11.png');
new ImgR3('db12', 'game-cards/david-bowie/db12.png');
new ImgR3('db13', 'game-cards/david-bowie/db13.png');

new ImgR4('f1', 'game-cards/faces/f1.png');
new ImgR4('f2', 'game-cards/faces/f2.png');
new ImgR4('f3', 'game-cards/faces/f3.png');
new ImgR4('f4', 'game-cards/faces/f4.png');
new ImgR4('f5', 'game-cards/faces/f5.png');
new ImgR4('f6', 'game-cards/faces/f6.png');
new ImgR4('f7', 'game-cards/faces/f7.png');
new ImgR4('f8', 'game-cards/faces/f8.png');
new ImgR4('f9', 'game-cards/faces/f9.png');
new ImgR4('f10', 'game-cards/faces/f10.png');
new ImgR4('f11', 'game-cards/faces/f11.png');
new ImgR4('f12', 'game-cards/faces/f12.png');
new ImgR4('f13', 'game-cards/faces/f13.png');
new ImgR4('f14', 'game-cards/faces/f14.png');
new ImgR4('f15', 'game-cards/faces/f15.png');

// Random pic from (array)
function randomImg(array) {
  var spot = Math.floor(Math.random() * (array.length));
  return array[spot];
}

function randomImgB(array) {
  var remove = Math.floor(Math.random() * (9));
  return remove;
}
// Generating 9 images from (array)
function generateRay(array) { //Function to render 9 images
  var thisPic = randomImg(array);
  newRay.push(thisPic);
  while (newRay.length < 10) {
    var thatPic = randomImg(array);
    for (var i = 0; i < newRay.length; i++) {
      if (newRay.indexOf(thatPic) === -1) {
        newRay.push(thatPic);
      }
      continue;
    };
  };
  rightChoice = newRay[9];
};
// Appending 9 images from (theArray)
function renderPics(theArray){
  var point = 0;
  clearImages();
  var trEl = document.createElement('tr');
  for (var j = 0; j < 9; j++){
    var imgEl = document.createElement('img');
    imgEl.src = newRay[point].path;
    imgEl.name = newRay[point].name;
    trEl.appendChild(imgEl);
    point++;
  }
  table.appendChild(trEl);
};
//Renders the card backs
function renderBacks(){
  clearImages();
  var trEl = document.createElement('tr');
  for (var j = 0; j < 9; j++){
    var imgEl = document.createElement('img');
    imgEl.src = cardBack;
    trEl.appendChild(imgEl);
  }
  table.appendChild(trEl);
};
// Runs renderPics after it removes 1 image from the first 9 generated
function replaceImage() {
  // console.log(array);
  newRay.splice(randomImgB(newRay), 1);
  var rightChoice = newRay[9];
  shuffle(newRay);
  renderPics(newRay);
}
//Knuth shuffle - thanks Fisher-Yates!
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
//wipes the existing images from the screen
function clearImages() {
  table.innerHTML = ' ';
}
//Determines if a click is correct or not
function winLose(event) {
  event.preventDefault();
  var target = event.target;
  if (target.name === rightChoice.name) {
    alert('Congratulations! You got it!');
    round++;
    newRay = [];
    if (round === 2) {
      alert('Round 2!');
      generateRay(arrayR1);
      renderBacks();
      document.getElementById('pinhere').removeEventListener('click', winLose);
      document.getElementById('start').addEventListener('click', startGame);
    }
  }  else {
    alert('Sorry, that was already there.')
    window.location.href = "page3.html"
  }
};


//For the first part of the game - Switches to card backs, then the shuffled set. Removes
//itself as an event listener & adds the listener for right/wrong choice.
function startGame(event) {

    event.preventDefault();
    renderPics();
    setTimeout(renderBacks, 8000);
    setTimeout(replaceImage,10000);
    table.removeEventListener('click', startGame);
    document.getElementById('pinhere').addEventListener('click', winLose);
  };

  generateRay(arrayR2); //Make that array
  renderBacks(); //Append the hell out of it

  document.getElementById('start').addEventListener('click', startGame);
