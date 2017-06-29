'use strict';

var data = [];
var rData = ' ';
var theForm = document.getElementById('theForm');

function User(name, age) {
  this.name = name;
  this.age = age;
  this.score = 0;
  data.push(this);
}

function pushThing(otherThing) {
  localStorage.clear();
  var otherThingJSON = JSON.stringify(otherThing);
  localStorage.things = otherThingJSON;
}

function readData(event) {
  event.preventDefault();
  var name = theForm.name.value;
  var age = theForm.age.value;
  var newUser = new User(name, age);
  pushThing(newUser);
  console.log(newUser);
  return newUser;
}



document.getElementById('theForm').addEventListener('submit', readData);
document.getElementById('test').addEventListener('click', readData);
