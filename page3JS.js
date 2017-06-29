'use strict';
var userStats = {};
var name = [];

function pullThing() {
  var retrievedThing = localStorage.things;
  console.log(retrievedThing);
  var parsedThing = JSON.parse(retrievedThing);
  console.log(parsedThing);
  for (var i = 0; i < parsedThing.length; i ++) {
    Items.all[i] = parsedThing[i];
  }
}

pullThing();

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  var thEl = document.createElement('th');
  thEl.textContent = 'Locations';
  trEl.appendChild(thEl);
//ASSIG
  for (var i = 0; i < name.length; i++) {
    thEl = document.createElement('th');
    thEl.textContent = name[i];
    trEl.appendChild(thEl);
  }
}

makeHeaderRow();
