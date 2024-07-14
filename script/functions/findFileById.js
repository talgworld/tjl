const fs = require('fs');
let downDir = require('./getDownDir.js').downloadDir

function findFileNameByID(dir, id, call){
    let fNs=[]
    fs.readdir(dir, (err, files) => {
        console.log("getting files in: "+dir)
        if (err) {
            console.error(err);
            return;
        }
        files.forEach(fn => {
            fNs=[...fNs, fn]
            let n = fn.match(`${id}`)
            if(n){return call(n.input)}
        });
    });
}
// let ids = ['3505494','3505560','3505596','3505592']

// findFileNameByID(downDir, '3602646', (e)=>{
//     if(e){console.log(e)}
// })
module.exports={findFileNameByID}