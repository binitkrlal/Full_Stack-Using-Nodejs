const fs = require("fs");

// fs.writeFile("asyncFile.txt","welcome",(err)=>{
//     if (err){
//         console.log("Error creating file");

//     } else{
//         console.log("Async file created");
//     }
// });

//sync method
// fs.writeFileSync("syncfile.txt","Welcome to file system module sync file");
// console.log("sync file created");






// ASYNC FILE READ
fs.readFile("asyncFile.txt", "utf8", (err, data) => {
    if (err) {
        console.log("Error reading async file");
    } else {
        console.log("Async File Data:", data);
    }
});

// SYNC FILE READ
const syncData = fs.readFileSync("syncFile.txt", "utf8");
console.log("Sync File Data:", syncData);
