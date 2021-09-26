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
const request = require('request');
const fs = require('fs')

const args = process.argv.slice(2);
// node fetcher.js http://www.example.edu/ ./index.html
// console.log(args)
// [ 'http://www.example.edu/', './index.html' ]
console.log(args[0]);


// const address = args[0];
const newFileName = args[1];
console.log(newFileName)
const content = `Some content!${new Date}()`;
const geDir =  './';






request(address, (error, response, body) => {
  console.error('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
  fs.writeFile(outputFilename, content, err => {
    if (err) {
      console.error(err);
      return;
    }
    // file written successfully
    // if completed do this
    // console.log(`Downloaded and saved ${1235} bytes to ${newFileName}.`

  })
});



// edge case stuff
// try {
//   const stats = fs.statSync('./node_modules')
//   console.log(
//     stats.isFile(), //true
//     stats.isDirectory(), //false
//     stats.size
//   )
// } catch (err) {
//   console.error(err)
// }







