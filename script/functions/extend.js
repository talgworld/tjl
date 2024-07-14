const { exec } = require('child_process');

let jsx = (jsxFilePath) => {
    exec(`"photoshop" ${jsxFilePath}`, (err, data) => {
        if (err) console.log(err);
        if (data) console.log(data);
    });
}

if (process.argv.length < 3) {
    console.error('Usage: node yourScript.js <jsxFilePath>');
    process.exit(1);
}

let jsxFilePath = process.argv[2];
jsx(jsxFilePath);

module.exports.run = jsx;
