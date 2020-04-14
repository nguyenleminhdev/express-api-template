module.exports = self => {
    self.server = require("http").Server(self.app)
    self.io = require("socket.io")(self.server)

    self.io.on('connection', (socket) => {
        console.log(`[${socket.id}] Socket connect [+]`.green)
        socket.on("disconnect", () => console.log(`[${socket.id}] Socket disconnect [-]`.green))
    })
}