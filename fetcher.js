// fetcher.js.

/**
 * It should take two command line arguments:
 *   a URL
 *   a local file path
 * input:
 *   node fetcher.js http://www.example.edu/ ./index.html
 *
 * expected output:
 *   Downloaded and saved 1235 bytes to ./index.html.
 */

// edge cases
// What should happen if:
// 1. the local file already exists?
// 2. the local file path given is invalid?
// 3. the URL results in an error or non-200 result?

const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
// node fetcher.js http://www.example.edu/ ./index.html

let newFileName = "";
let splitIt = args[3].split("./");

if (splitIt[0] === "") {
  newFileName = splitIt[1];
} else {
  newFileName = args[3];

}

const address = args[2];



request(address, (error, response, body) => {

  if (error) {
    console.log(`Received error ${error} exiting`);
    process.exit(1);
  }
  if (response.statusCode === 201) {
    console.log(
      `Status code is not 200 Received status code ${response.statusCode} exiting`);
    process.exit(1);
  }

  fs.writeFile(newFileName, body, err => {
    if (err) {
      console.error(err);
      return;
    }
    const stats = fs.statSync(newFileName);

    console.log(`Downloaded and saved ${stats.size} bytes to ${newFileName}.`);

  });

});
