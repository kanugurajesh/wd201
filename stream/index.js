const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // reading data using stream

    const stream = fs.createReadStream("sample.txt");
    stream.on("data", (chunk) => {
        res.write(chunk);
    })

    // fs.readFile("sample.txt", (err, data) => {
    //     res.end(data);
    // })
})

server.listen(3000, () => {
    console.log("Server is running on port 3000");
})