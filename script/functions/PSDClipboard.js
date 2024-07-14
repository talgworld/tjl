//getting copied -id.psd file from psds folder 
const path = require('path');
const ncp = require('copy-paste');
const { exec } = require('child_process');
const { findFileNameByID } = require('./findFileById');

let psdsDir = path.resolve(__dirname, '..', '..', 'psds');

// Get the contents of the clipboard
ncp.paste((err, data) => {
    if (err) {
        console.log(err);
        return;
    }

    let id = data.trim();

    // Check if id is a valid number
    if (!isNaN(id)) {
        findFileNameByID(psdsDir, id, (file) => {
            try {
                if (file) {
                    let fileDir = path.resolve(psdsDir, file);
                    exec(`start "" "${fileDir}"`);
                } else {
                    exec('msg * "File not found for the given ID. Please copy a valid ID and try again."');
                }
            } catch (err) {
                exec('msg * "An error occurred. Please copy a valid ID and try again."');
            }
        });
    } else {
        exec('msg * "Copy a valid ID first and then try again. Example: 3505596"');
    }
});
