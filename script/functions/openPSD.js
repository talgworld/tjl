//gets file from done and unzip open using photoshop
let fileID = process.argv[2]
let {downloadDir} = require('./getDownDir.js')
let doneDir = downloadDir+'\\done'
let batch = require('./batch')
let {findFileNameByID} = require("./findFileById.js")

let fn = new Promise((res, rej)=>{
	findFileNameByID(downloadDir, fileID, (e)=>{
		//console.log(`"File Name: ${e}"`)
		res(e)
})
})
fn.then((e)=>{
	let batchCommand = `start "" "${downloadDir}\\${e}"`
	batch.run(batchCommand)
})

