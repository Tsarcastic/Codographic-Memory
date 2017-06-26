'use strict'

var allArrays = []; //This is ALL our arrays
var array1 = [];  //First set of images
var newRay = []; //The current array
allArrays.push(array1)

function imgArray(name, path) {//This is our constructor function
  this.name = name;
  this.path = path;
  array1.push(this);
  // console.log(this.name + "was sucessfully created.");
}

new imgArray('pic02', 'Img pictures\pic2.jpg');
new imgArray('pic03', 'Img pictures\pic3.jpg');
new imgArray('pic04', 'Img pictures\pic4.jpg');
new imgArray('pic05', 'Img pictures\pic5.jpg');
new imgArray('pic06', 'Img pictures\pic6.jpg');
new imgArray('pic07', 'Img pictures\pic7.jpg');
new imgArray('pic08', 'Img pictures\pic8.jpg');
new imgArray('pic09', 'Img pictures\pic9.jpg');
new imgArray('pic10', 'Img pictures\bag.jpg');
new imgArray('pic11', 'Img pictures\banana.jpg');
new imgArray('pic12' 'Img pictures\bathroom.jpg');
new imgArray('pic13' 'Img pictures\boots.jpg');
new imgArray('pic14' 'Img pictures\breakfast.jpg');
new imgArray('pic15' 'Img pictures\bubblegum.jpg');
new imgArray('pic16' 'Img pictures\bus.jpg');
new imgArray('pic17' 'Img pictures\chair.jpg');


function randomImg(array) {
  var spot = Math.floor(Math.random() * (array.length));
  return array[spot];
}

function generateRay(array) { //Function to render 9 images
  while (newRay.length < 9) {
    var thisPic = randomImg();
    console.log(thisPic);
    for (var i = 0; i < newRay.length) {
      if (newRay.indexOf(thisPic) === -1) {
        newRay.push(thisPic);
      } else {
        console.log('That\'s a duplicate. Rolling again.')
      }
    }

  }
};

function randomImg(array) {
  var spot = Math.floor(Math.random() * (array.length));
  return array[spot];
}
