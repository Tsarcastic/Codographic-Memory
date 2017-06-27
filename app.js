'use strict';
var table = document.getElementById('pinhere');
var divvy = document.getElementById('clicky');
var allArrays = []; //This is ALL our arrays
var array1 = [];  //First set of images
var newRay = []; //The current array
var rightChoice = 0; //The correct choice for the game
var cardBack = 'game-cards/bg.png'
allArrays.push(array1);

function imgArray(name, path) {//This is our constructor function
  this.name = name;
  this.path = path;
  array1.push(this);
  // console.log(this.name + "was sucessfully created.");
}

new imgArray('t1', 'game-cards/travel/t1.png');
new imgArray('t2', 'game-cards/travel/t2.png');
new imgArray('t3', 'game-cards/travel/t3.png');
new imgArray('t4', 'game-cards/travel/t4.png');
new imgArray('t5', 'game-cards/travel/t5.png');
new imgArray('t6', 'game-cards/travel/t6.png');
new imgArray('t7', 'game-cards/travel/t7.png');
new imgArray('t8', 'game-cards/travel/t8.png');
new imgArray('t9', 'game-cards/travel/t9.png');
new imgArray('t10', 'game-cards/travel/t10.png');
new imgArray('t11', 'game-cards/travel/t11.png');
new imgArray('t12', 'game-cards/travel/t12.png');
new imgArray('t13', 'game-cards/travel/t13.png');
new imgArray('t14', 'game-cards/travel/t14.png');
new imgArray('t15', 'game-cards/travel/t15.png');
// new imgArray('t16', 'game-cards/travel/t1.png');
// new imgArray('t17', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');
// new imgArray('t1', 'game-cards/travel/t1.png');

// Random pic from (array)
function randomImg(array) {
  var spot = Math.floor(Math.random() * (array.length));
  return array[spot];
}

function randomImgB(array) {
  var remove = Math.floor(Math.random() * (9));
  console.log(remove);
  return remove;
}
// Generating 9 images from (array)
function generateRay(array) { //Function to render 9 images
  var thisPic = randomImg(array);
  newRay.push(thisPic);
  while (newRay.length < 10) {
    var thatPic = randomImg(array);
    console.log(thatPic);
    for (var i = 0; i < newRay.length; i++) {
      if (newRay.indexOf(thatPic) === -1) {
        newRay.push(thatPic);
        console.log('Pushing' + thatPic + "to newRay.");
      }
      continue;
    };
  };
};
// Appending 9 images from (theArray)
function appendAll(theArray){
  var point = 0;
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

function renderBacks(theArray){
  var point = 0;
  var trEl = document.createElement('tr');
  for (var j = 0; j < 9; j++){
    var imgEl = document.createElement('img');
    imgEl.src = cardBack;
    trEl.appendChild(imgEl);
  }
  table.appendChild(trEl);
};



// Removes 1 image from the first 9 generated

function replaceImage(array) {
  console.log(array);
  newRay.splice(randomImgB(array), 1);
  console.log(array);
  var rightChoice = array[9];
  shuffle(array);
  appendAll(newRay);
}

function shuffle(array) { //Knuth shuffle - thanks Fisher-Yates!
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
  while (table.firstChild) {
    table.removeChild(table.firstChild);
  }
}

// function firstClick() {
//   event.preventdefault();
//   clearImages();
//   appendAll(newRay);
// }

document.getElementById('pinhere').addEventListener('click', handleClick);

function handleClick(event) {
  event.preventDefault();
  clearImages();
  renderBacks();
  setTimeout(clearImages, 5000);
  // replaceImage(newRay);
  // appendAll(newRay);

}
generateRay(array1); //Make that array
appendAll(newRay); //Append the hell out of it
