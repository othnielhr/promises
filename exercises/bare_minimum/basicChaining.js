/*
 * Write a function WITH NO CALLBACKS that,
 * (1) reads a GitHub username from a `readFilePath`
 *     (the username will be the first line of the file)
 * (2) then, sends a request to the GitHub API for the user's profile
 * (3) then, writes the JSON response of the API to `writeFilePath`
 *
 * HINT: We exported some similar promise-returning functions in previous exercises
 */

var fs = require('fs');
var Promise = require('bluebird');
var promised = require('./promisification.js');


var fetchProfileAndWriteToFile = function(readFilePath, writeFilePath) {
  return new Promise(function (resolve, reject) {
    fs.readFile(readFilePath, 'utf8', (err, body) => {
      if (err) {
        reject(err);
      } else {
        var userName = body.split('\n');
        resolve(userName[0]);
      }
    });
  })
    .then((profile) => {
      return promised.getGitHubProfileAsync(profile);
    })
    .then((user) => {
      return new Promise(function (resolve, reject) {
        fs.writeFile(writeFilePath, JSON.stringify(user), (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        });
      });
    });

  // TODO
};

// Export these functions so we can test them
module.exports = {
  fetchProfileAndWriteToFile: fetchProfileAndWriteToFile
};
