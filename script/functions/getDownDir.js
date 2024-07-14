const os = require('os');
const path = require('path');
let fs = require('fs')

const dir = os.userInfo().homedir;
const downloadDir = path.join(`${dir}\\downloads`);
let tempDir = path.join(downloadDir, 'temp');
let doneDir = path.join(downloadDir, 'done');
let appData = path.join(dir, 'AppData');
let psdsDir = path.join(appData, 'local', 'tech jump', 'psds');
let programFilesDir = process.env.ProgramFiles;

const directories = {
    downloadDir,
    tempDir,
    doneDir,
    appData,
    psdsDir,
    programFilesDir
};

let getDirs = ()=>{fs.writeFileSync(path.join(__dirname, '..', 'data', 'directories.json'), JSON.stringify(directories, null, 2));
}
module.exports = {directories, getDirs};
