// Define the directory path
let {downloadDir} = require('./getDownDir.js')
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

fs.readdir(downloadDir, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach((file) => {
    if (path.extname(file) === ".psd") {
      const filePath = path.join(downloadDir, file);
      console.log(`Opening ${filePath}`);
      // Replace the console.log() statement with your code to open the file
      exec(`start "" "${filePath}"`);
    }
  });
});
