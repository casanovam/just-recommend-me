//Declare libraries needed
var fs = require("fs");

// General function for iterating inside a folder
// Returns list of file paths
var dive = function (dir, action) {

  //List of paths
  var activities = [];

  // Assert that it's a function
  if (typeof action !== "function")
    action = function (error, file) {};

  // Read the directory
  fs.readdir(dir, function (err, list) {
    // Return the error if something went wrong
    if (err)
      return action(err);

    // For every file in the list
    list.forEach(function (file) {
      // Full path of that file
      var path = dir + "/" + file;
      // Push the path to the list of activities
      activities.push(path);
    });
  });

  return activities;
  
};


console.log(dive('/Users/ruben/JRM/just-recommend-me/uploadScript/activities'))

/*

var fs = require('fs');
var file = __dirname + '/config.json';

fs.readFile(file, 'utf8', function (err, data) {
  if (err) {
    console.log('Error: ' + err);
    return;
  }

  data = JSON.parse(data);

  console.dir(data);
});

*/