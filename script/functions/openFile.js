// Define the directory path
var {downloadDir} = require('./getDownDir')
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

let open = (dir, fName)=>{
  fullPath = dir+"\\"+fName
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      if (file === `${fName}`) {
        
        console.log(`Opening ${file}`);
        exec(`start "" "${fullPath}"`);
      }
    });
  });
}

let openAll = (dir, extension)=>{
	
  fs.readdir(dir, (err, files) => {
    if (err) {
      console.error(err);
      return;
    }
    files.forEach((file) => {
      if (path.extname(file) === extension) {
		let fullPath = dir+"\\"+fName
        console.log(`Opening ${filePath}`);
        exec(`start "" "${fullPath}"`);
      }
    });
  });
}
module.exports = {"open":open, "openAll":openAll}