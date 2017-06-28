'use strict'

var data = [];
var rData = ' ';
var theForm = document.getElementById('theForm');

function User(name, age) {
  this.name = name;
  this.age = age;
  data.push(this)
  }

function readData(event) {
  event.preventDefault();
  var name = event.target.name.value;
  var age = event.target.age.value;
  console.log();
  var newUser = new User(name, age);
  console.log('readData is working properly');
  console.log(newUser);
  return newUser;
}

document.getElementById('theForm').addEventListener('submit', readData)
document.getElementById('test').addEventListener('click', readData);
