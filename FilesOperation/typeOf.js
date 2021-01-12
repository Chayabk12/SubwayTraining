//Fetching the type of contents in the file (Question 4)

const fs = require('fs')
const directory = '../FilesOperation/';
const path = require('path');

 fs.readdir(directory, (err, files) => {
    files.forEach(file => {
        if(fs.lstatSync(path.resolve(directory, file)).isDirectory()) {
            console.log('Directory:' + file);
        }
        else {
          console.log('File:' + file);
        }
    });
}); 