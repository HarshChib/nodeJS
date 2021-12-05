const { writeFile, readFile } = require("fs");

readFile("./folder/subfile1.txt","utf8",(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
    let first=data;
    readFile("./folder/subfile2.txt","utf8",(err,data)=>{
        if(err){
            console.log(err);
            return;
        }
        let second=data;
        writeFile("./folder/result.txt",`This is result: ${first} ${second}`,(err,data)=>{
            if(err){
                console.log(err);
                return;
            }
            console.log(data);
            
        })
    })
})