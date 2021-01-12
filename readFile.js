const fs = require('fs')
const directory = './nodejs/';
var res=fs.readFileSync('test.txt')
console.log(res.toString())


fs.readFile('test.txt', function(err, data){
    console.log(data.toString())
})



fs.writeFile('sample.txt', "hello from sansa hello", function(err){
    console.log('File saved')
})



fs.readFile('sample.txt', function (err, data) {
    if (err) throw err;
    var count=countOccurences(data.toString(),"hello");
    console.log(count)
  });
 fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        console.log(file);
    });
}); 

function countOccurences(string, word) {
    return string.split(word).length - 1;
 } 
