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

};

// This function should retrieve the status code of a GET request to `url`
var getStatusCode = function (url, callback) {
  request.get(url, (err, response) => {
    if (err) {
      callback(err, null);
    } else {
      var statusC = response.statusCode;
      callback(null, statusC);
    }
  });
};

// Export these functions so we can test them and reuse them in later exercises
module.exports = {
  getStatusCode: getStatusCode,
  pluckFirstLineFromFile: pluckFirstLineFromFile
};