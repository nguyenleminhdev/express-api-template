module.exports = self => {
    ////////////
    // SOCKET.IO
    ////////////
    self.server = require("http").Server(self.app)
    self.io = require("socket.io")(self.server)

    self.io.on('connection', (socket) => {
        console.log(`[${socket.id}] Socket connect [+]`.green)
        socket.on("disconnect", () => console.log(`[${socket.id}] Socket disconnect [-]`.green))
    })
    // END SOCKET.IO
    ////////////////


    /////////////
    // WEB SOCKET
    /////////////
    // self.server = require("http").Server(self.app)
    // self.wss = new self.web_socket.Server({ server: self.server })

    // self.wss.on('connection', (ws) => { })
    // END WEB SOCKET
    /////////////////
}