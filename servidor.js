const http = require("http")
const port = 8000

const requesteListener = function (req, res) {
    const name = "Camilo Estrada"
    const message = "esto ya lo habia hecho"
    let envio = {
        name,
        message,
    }
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(envio));
}

const servidor = http.createServer(requesteListener)

servidor.listen(port, () => {
    console.log("Servidor listening on port " + port)
})