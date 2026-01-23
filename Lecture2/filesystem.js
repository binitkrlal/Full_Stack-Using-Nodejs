const fs = require("fs").promises;
const{promisify} = require("util");
const binit = promisify(require("fs").readFile);

fs.writeFile("welcome.txt","just started learning promises","utf-8",(error)=>{
    if (error){
        console.log("error in creating the file");

    }else{
        console.log("File is created");
    }
})

async function readFileData() {
    try{
        let data = await fs.readFile("welcome.txt","utf-8")
        console.log("File Data:" , data);

    }catch(error) {
        console.error("Error is loading..........",error)

    }
    
}
readFileData();

async function readWithPromisify() {
    try{
        let fileData = await binit("Welcome.txt","utf-8")
        console.log("File Data:" , fileData)
    } catch(err){
        console.log(err)
    }
    
}
readWithPromisify();