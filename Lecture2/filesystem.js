// const fs = require("fs").promises;
// const{promisify} = require("util");
// const binit = promisify(require("fs").readFile);

// fs.writeFile("welcome.txt","just started learning promises","utf-8",(error)=>{
//     if (error){
//         console.log("error in creating the file");

//     }else{
//         console.log("File is created");
//     }
// })

// async function readFileData() {
//     try{
//         let data = await fs.readFile("welcome.txt","utf-8")
//         console.log("File Data:" , data);

//     }catch(error) {
//         console.error("Error is loading..........",error)

//     }
    
// }
// readFileData();

// async function readWithPromisify() {
//     try{
//         let fileData = await binit("Welcome.txt","utf-8")
//         console.log("File Data:" , fileData)
//     } catch(err){
//         console.log(err)
//     }
    
// }
// readWithPromisify();


// let fs = require("fs");
// // flag
// // r -> read
// // w -> write

// fs.writeFile("data.txt", "content", { flag: "w", encoding: "utf-8" }, (err) => {
//     if (err) {
//         console.log(err);
//         return;
//     }
//     console.log("File written");
// });

// fs.open("data.txt", "r", (err, fd) => {
//     if (err) {
//         console.log(err);
//         return;
//     }

//     console.log("File opened, fd =", fd);

//     fs.close(fd, (err) => {
//         if (err) {
//             console.log(err);
//             return;
//         }
//         console.log("File closed");
//     });
// });
