// const express = require("express");
// const app=express();

// const port = 8080;
// app.get("/",(req,res)=>{
//     res.send("this is my hope page under devlopment ### updates");
// });
// app.get("/about",(req,res)=>{
//     res.send("this is about us section");
// });
// app.listen(port,()=>{
//     console.log(`server is up at:${port}`);
// });


// const express = require("express");
// const app = express();
// const hostname = "127.0.0.1";
// const port = 8080;
// app.use(express.urlencoded({extended:true}));

// app.get("/", (req, res) => {
//     res.send("This updated command is my home page under development");
// });

// app.get("/about", (req, res) => {
//     res.send("This is about us section");
// });
// app.get("/register",(req,res)=>{
//     res.send(`
//         <form action="/submit" method="POST">
//             <input type="text" name="username" />
//             <button type="submit">submit</button>
//         </form>
//     `);
// })
// app.post("/submit",(req,res)=>{
//     console.log(req.body)
//     res.send("Form has been submitted");
// });
// app.listen(port, hostname, () => {
//     console.log(`Server is up at : http://${hostname}:${port}/`);
// });