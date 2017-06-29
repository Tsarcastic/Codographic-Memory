'use strict';
var userStats = {};
var table = document.getElementById('scoreTable')

function pullThing() {
  var retrievedThing = localStorage.things;
  console.log(retrievedThing);
  var parsedThing = JSON.parse(retrievedThing);
  console.log(parsedThing);
  for (var i = 0; i < parsedThing.length; i ++) {
    Items.all[i] = parsedThing[i];
  }
}

function User(name, score) {
  this.name = name;
  this.score = score;
  users.push(this);
}

pullThing();

function renderTable(){
  var thEl = document.createElement('th');
  tdEl.textContent = "HIGH SCORES";
  trEl.appendChild(thEl);
  for (var i = 0; i < 5; i++) {
    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = user[i].name;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    
  }
  table.appendChild(trEl);
};
