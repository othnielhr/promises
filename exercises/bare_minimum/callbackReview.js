/**
 * Implement these functions following the node style callback pattern
 */

var fs = require('fs');
var request = require('needle');

// This function should retrieve the first line of the file at `filePath`
var pluckFirstLineFromFile = (filePath, callback) => {
  fs.readFile(filePath, 'utf8', (err, content) => {
    if (err) {
      callback(err, null);
    } else {
      var splitted = content.split('\n');
      callback(null, splitted[0]);
    }
  });


  // if (err) {
  //   console.log(err);
  // } else {
  //   fs.readFile(filePath, (err, content) => {
  //     if (err) {
  //       console.log(err);
  //     } else {
  //       callback(null, content);
  //     }
  //   });
  // }


  // TODO
};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url) {
  // TODO
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};
