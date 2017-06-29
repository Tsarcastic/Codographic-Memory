'use strict';

var data = [];
var rData = ' ';
var theForm = document.getElementById('theForm');

function User(name, age) {
  this.name = name;
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
  var newUser = new User(name);
  pushThing(newUser);
  console.log(newUser);
  window.location.href = "page2.html"
}



document.getElementById('theForm').addEventListener('submit', readData);
document.getElementById('play').addEventListener('click', readData);
