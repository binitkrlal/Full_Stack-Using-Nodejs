const{Readable} = require("stream");

const inStream = new Readable({
    read(){

    }
});
inStream.push("Welcome to fiestream of class section AC");
inStream.push("\nIn nodejs class from next time everyon need to bring their laptop");

inStream.push(null);
inStream.pipe(process.stdout);