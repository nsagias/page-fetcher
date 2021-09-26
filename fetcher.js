// fetcher.js.

/**
 * It should take two command line arguments:
 *   a URL
 *   a local file path
 *  
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

const arg = process.argvs.slice(2)

const request = require('request');
request('http://www.google.com', function (error, response, body) {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
});


