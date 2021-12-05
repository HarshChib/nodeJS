let fs=require('fs')
fs.writeFileSync('./folder/subfile2.txt',"my name is harsh")
let first=fs.readFileSync('./folder/subfile1.txt',"utf8")
let second=fs.readFileSync('./folder/subfile2.txt',"utf8")

fs.writeFileSync('./folder/result.txt',`the result is : ${first} , ${second}`)
console.log(fs.readFileSync('./folder/result.txt','utf8'))