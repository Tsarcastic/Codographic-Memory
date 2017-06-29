'use strict';
var userStats = {};

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
