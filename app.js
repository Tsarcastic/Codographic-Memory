'use strict'

var allArrays = []
var array1 = []

function imgArray(name, path) {
  this.name = name;
  this.path = path;
  array1.push(this);
  console.log(this.name + "was sucessfully created.");
}

new imgArray('pic2', 'Img pictures\pic2.jpg');
new imgArray('pic3', 'Img pictures\pic3.jpg');
new imgArray('pic4', 'Img pictures\pic4.jpg');
new imgArray('pic5', 'Img pictures\pic5.jpg');
new imgArray('pic6', 'Img pictures\pic6.jpg');
new imgArray('pic7', 'Img pictures\pic7.jpg');
new imgArray('pic8', 'Img pictures\pic8.jpg');
new imgArray('pic9', 'Img pictures\pic9.jpg');
