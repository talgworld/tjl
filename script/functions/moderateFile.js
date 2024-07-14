let {downloadDir} = require('./getDownDir.js')
let batch = require('./batch')
let psd = require('./openFile.js')
	
function moderateFile(type, fName, dir){  //types: unzip - zip - get
    let regexFilterFN = fName.match(/(.*).7z/)
    if(regexFilterFN){                      //if with name.7z convert to filter name
        if(fName===regexFilterFN[0]){
            fName=regexFilterFN[1]
        }
    }
    if(type==="unzip"){
        batch.run(`"C:\\Program Files\\7-Zip\\7z.exe" x "${dir}\\${fName}.7z" -o"${dir}" -y`)
        setTimeout(()=>{
            batch.run(`del "${dir}\\${fName}.7z"`)
            psd.open(`${fName}.psd`)
        },10000)

    //7z a <destination_directory>\<compressed_file_name>.7z <file/folder_to_compress> && move <compressed_file_name>.7z <destination_directory>
    }else if(type==="zip"){ 
        batch.run(`"C:\\Program Files\\7-Zip\\7z.exe" a "${dir}\\${fName}.7z" "${dir}\\${fName}.psd" && move "${dir}\\${fName}.7z" "${dir}\\done"`)
        setTimeout(()=>{
            batch.run(`del "${dir}\\${fName}.psd"`)
        },10000)

    }else if(type==="get"){
        batch.run(`"C:\\Program Files\\7-Zip\\7z.exe" x "${dir}\\done\\${fName}.7z" -o"${dir}" -y`)
        setTimeout(()=>{
            batch.run(`del "${dir}\\${fName}.7z"`)
            psd.open(`${fName}.psd`)
    },10000)
    }
}
//moderateFile('unzip', 'wuazzz423n006146-steering_wheel-3487210', downDir)
module.exports={moderateFile}