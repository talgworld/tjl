let {exec} = require('child_process')

let run = (batch)=>{
    exec(batch,(err,data)=>{
        if(err)throw err
        console.log(data)
    })
}

module.exports.run = run
