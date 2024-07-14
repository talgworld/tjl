const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');
let {directories} = require('./getDownDir')
let inputDir = path.resolve(directories.appData,'Local\\Temp\\WebWorkTracker\\screenshots\\186640')
const outputDir = inputDir;
const croppedFilesListPath = path.join(outputDir, 'cropped_files.json');

async function cropImages() {
  try {
    let existingCroppedFiles = [];

    if (fs.existsSync(croppedFilesListPath)) {
      existingCroppedFiles = JSON.parse(fs.readFileSync(croppedFilesListPath));
    }

    const filesToCrop = [];

    for (const filename of fs.readdirSync(inputDir)) {
      const filePath = path.join(inputDir, filename);
      const fileExt = path.extname(filename).toLowerCase();

      if (supportedImageExtensions.includes(fileExt) && !existingCroppedFiles.includes(filename)) {
        filesToCrop.push({ filename, filePath });
      }
    }

    const croppedFiles = [];

    for (const { filename, filePath } of filesToCrop) {
      const imageMagick = spawn('magick', [filePath, '-crop', '67x100%%+0+0', filePath]);

      try {
        await new Promise((resolve, reject) => {
          imageMagick.on('exit', (code) => {
            if (code === 0) {
              croppedFiles.push(filename);
              resolve();
            } else {
              reject(new Error(`ImageMagick failed with code ${code}`));
            }
          });
        });
      } catch (error) {
        console.error(`Error cropping ${filename}:`, error);
        // Handle errors as needed, e.g., retry, log to separate file
      }
    }

    fs.writeFileSync(croppedFilesListPath, JSON.stringify(existingCroppedFiles.concat(croppedFiles), null, 2));
    console.log('Cropped files saved to JSON:', croppedFilesListPath);
  } catch (error) {
    console.error('Error:', error);
  }
}

const supportedImageExtensions = ['.jpeg', '.jpg', '.png', '.gif', '.bmp'];

setInterval(cropImages, 10000);
