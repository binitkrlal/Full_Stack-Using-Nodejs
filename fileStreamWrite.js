const{Writable} = require("stream");
const outSteam = new Writable({
    write(chunk,encoding,callback) {
        console.log(chunk.toString())
        callback();
    }
});
process.stdin.pipe(outSteam);