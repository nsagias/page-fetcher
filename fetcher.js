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
const address = 'http://www.example.edu/';
// const address = 'http://www.example.com/';

// const newFileName = args[1];
const newFileName = 'test.txt';
console.log(newFileName)
// const content = `Some content!${new Date}()`;



request(address, (error, response, body) => {
  
 if(error) {
  console.log(`Received error ${error} exiting`)
  process.exit(1);
 }
 if (response.statusCode === 201) {
   console.log(
     `Status code is not 200 Received status code ${response.statusCode} exiting`);
   process.exit(1);
 }

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
  // console.log(response.statusCode) 
  // console.log('body:', body); // Print the HTML for the Google homepage.
  // if () {
    fs.writeFile(newFileName, body, err => {
      if (err) {
        console.error(err);
        return;
      }
      const stats = fs.statSync(newFileName)
      // file written successfully
     
      console.log(`Downloaded and saved ${stats.size} bytes to ${newFileName}.`)
   
    });



})
