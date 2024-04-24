const http = require("http");
const url = require("url");
const fs = require("fs");

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const filename = "./html/" + q.pathname;

    //he puesto ./html/ porque tengo los html en una carpeta, cuando hago este cambio si intento acceder a test.html no puedo, ya que no se encuentra en la carpeta.

    fs.readFile(filename, (err, data) => {
        if (err) {
            res.writeHead(404, { "Content-Type": "text/html" });
            console.error(err);
            return res.end("404 Not Found");
        }
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        return res.end();
    });
}).listen(8080);
