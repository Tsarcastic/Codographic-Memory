'use strict';
var userStats = {};

var table = document.getElementById('scoreTable');
var users = [];

function pullThing() {
  var retrievedThing = localStorage.things;
  var parsedThing = JSON.parse(retrievedThing);
  users.push(parsedThing);
};

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
new User('Audience', 117);
new User('Cam', 139);
new User('Chai', 134);
new User('Brendan', 155 );
new User('USA', 130);
new User('xxxDontDoDrugsxxx', 140);
users.sort(compare);
renderTable();
function compare(a,b) {
  if (a.score < b.score)
    return -1;
  if (a.score > b.score)
    return 1;
  return 0;
}
