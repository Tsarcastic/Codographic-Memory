'use strict';
var userStats = {};
var table = document.getElementById('scoreTable');
var users = []

function pullThing() {
  var retrievedThing = localStorage.things;
  console.log(retrievedThing);
  var parsedThing = JSON.parse(retrievedThing);
  console.log(parsedThing);
  users.push(parsedThing);
  }

function User(name, score) {
  this.name = name;
  this.score = score;
  users.push(this);
}

pullThing();

function renderTable(){ //Appending the users array to the page
  // var thEl = document.createElement('th');
  // tdEl.textContent = "HIGH SCORES";
  // trEl.appendChild(thEl);
  for (var i = 0; i < 5; i++) {
    var trEl = document.createElement('tr');
    tdEl = document.createElement('td');
    tdEl.textContent = users[i].name;
    trEl.appendChild(tdEl);
    var tdEl = document.createElement('td');
    tdEl.textContent = users[i].score;
    trEl.appendChild(tdEl);
    table.appendChild(trEl);
  };
};

new User('Esther', 50);
new User('Cam', 65);
new User('Chai', 53);
new User('Brendan', 80 );
new User('USA', 46);
new User('xxxdontDoDrugs', 110);

users.sort(compare);
renderTable();

function compare(a,b) {
  if (a.score < b.score)
    return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}
