//gets file from done and unzip open using photoshop
let fileID = process.argv[2]
let {downloadDir} = require('./getDownDir.js')
let doneDir = downloadDir+'\\done'
let batch = require('./batch')
let {findFileNameByID} = require("./findFileById.js")

let fn = new Promise((res, rej)=>{
	findFileNameByID(doneDir, fileID, (e)=>{
		//console.log(`File Name: ${e}`)
		res(e)
})
})
fn.then((e)=>{
	let batchCommand = `copy "${doneDir}\\${e}" "${downloadDir}"`

batch.run("echo copying the file to downloads dir")
batch.run(batchCommand)
batch.run('"D:\\tech jump\\script\\functions\\open.bat"')
})