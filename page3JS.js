'use strict';
var users = [];

function pullThing() {
  var retrievedThing = localStorage.things;
  console.log(retrievedThing);
  var parsedThing = JSON.parse(retrievedThing);
  console.log(parsedThing);
  return parsedThing;
  }

users.push(pullThing());
