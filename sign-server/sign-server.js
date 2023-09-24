const host = 'localhost';
const port = 7777;

const http = require("http")

const requestListener = function (req, res) {
    res.setHeader("Access-Control-Allow-Headers", "*")
    res.setHeader("Access-Control-Allow-Origin", "*")
    if(req.method === "OPTIONS") {
    } else if (req.method === "POST") {
        let body = []

        req.on('error', err => {
            console.log(err)
        })
        .on('data', (data) => {
            body.push(data)
        })
        .on('end', () => {
            body = Buffer.concat(body).toString()
            if (body) {
                console.log(JSON.parse(body).state)
            }
        })

        console.log(`fire linux script here`)

    }
    res.writeHead(200);
    res.end("My second server!");
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
