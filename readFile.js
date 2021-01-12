const fs = require('fs')

var res=fs.readFileSync('test.txt')
console.log(res.toString())

// Read file given as Input parameter(Question 2)
fs.readFile('test.txt', function(err, data){
    console.log(data.toString())
})


// Create Text file with data as parameter (Question 3)
fs.writeFile('sample.txt', "hello from sansa hello", function(err){
    console.log('File saved')
})


// Compare values(Question 5)
fs.readFile('sample.txt', function (err, data) {
    if (err) throw err;
    var count=countOccurences(data.toString(),"hello");
    console.log(count)
  });


function countOccurences(string, word) {
    return string.split(word).length - 1;
 } 
