const fs = require(`fs`)

fs.writeFile(`test3`,`ma kore`,(err)=>{
    if(err){
        throw `an error`
    }
    fs.readFile(`test3`,(err,data)=>{
        if(err){
            throw `an error`
        }
        console.log(data);
    })
})