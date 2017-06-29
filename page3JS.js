'use strict';
var users = [];

function pullThing() {
  var retrievedThing = localStorage.things;
  console.log(retrievedThing);
  var parsedThing = JSON.parse(retrievedThing);
  console.log(parsedThing);
  return parsedThing;
  }

function User(name, score) {

  this.name = name;
  this.gameStop = score;
  data.push(this);
  localStorage.setItem('score');
}

users.push(pullThing());


function header(){
  console.log('header');
  var tableRow = document.createElement('tr');
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Name';
  tableRow.appendChild(tableHead);
  // theTable.appendChild(tableRow);
  for( var i = 0; i < hours.length; i++){
    var tableHead = document.createElement('th');
    tableHead.textContent = hours[i];
    tableRow.appendChild(tableHead);
  }
  var tableHead = document.createElement('th');
  tableHead.textContent = 'Score';
  tableRow.appendChild(tableHead);
  theTable.appendChild(tableRow);


