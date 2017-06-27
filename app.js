'use strict';
var table = document.getElementById('pinhere');
var allArrays = []; //This is ALL our arrays
var array1 = [];  //First set of images
var newRay = []; //The current array
allArrays.push(array1);

function imgArray(name, path) {//This is our constructor function
  this.name = name;
  this.path = path;
  array1.push(this);
  // console.log(this.name + "was sucessfully created.");
}

new imgArray('pic31', 'Img pictures/pic31.jpg');
new imgArray('pic32', 'Img pictures/pic32.jpg');
new imgArray('pic33', 'Img pictures/pic33.jpg');
new imgArray('pic34', 'Img pictures/pic34.jpg');
new imgArray('pic35', 'Img pictures/pic35.jpg');
new imgArray('pic36', 'Img pictures/pic36.jpg');
new imgArray('pic37', 'Img pictures/pic37.jpg');
new imgArray('pic38', 'Img pictures/pic38.jpg');
new imgArray('pic39', 'Img pictures/pic39.jpg');
new imgArray('pic40', 'Img pictures/pic40.jpg');
new imgArray('pic41', 'Img pictures/pic41.jpg');
new imgArray('pic42', 'Img pictures/pic42.jpg');
new imgArray('pic43', 'Img pictures/pic43.jpg');
new imgArray('pic44','Img pictures/pic44.jpg');
new imgArray('pic45', 'Img pictures/pic45.jpg');

// Random pic from (array)
function randomImg(array) {
  var spot = Math.floor(Math.random() * (array.length));
  return array[spot];
}

function randomImgB(array) {
  var remove = Math.floor(Math.random() * (9));
  return array[remove];
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
  // for (var i = 0 ; i < 3 ; i++){
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
// Removes 1 image from the first 9
// function replaceImage(array) {
//   console.log(newRay);
//   newRay.splice(randomImgB(array, 1));
//   console.log(newRay);
//   var rightChoice = array[9];
// }
generateRay(array1);
appendAll(newRay);
