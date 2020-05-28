module.exports = self => {
    const SOCKET_ADAPTER = (process.env.NODE_ENV === 'production') ? self.constant.APP.PRODUCTION.SOCKET_ADAPTER : self.constant.APP.DEVELOPMENT.SOCKET_ADAPTER

    const CASE = {
        'SOCKET.IO': () => {
            self.server = require("http").Server(self.app)
            self.io = require("socket.io")(self.server)

            self.io.on('connection', (socket) => {
                console.log(`[${socket.id}] Socket connect [+]`.green)
                socket.on("disconnect", () => console.log(`[${socket.id}] Socket disconnect [-]`.green))
            })
        },
        'WS': () => {
            self.server = require("http").Server(self.app)
            self.wss = new self.web_socket.Server({ server: self.server })

            self.wss.on('connection', (ws) => { 
                ws.on('close', () => {
                    
                })

                ws.on('message', r => {
                    
                })
            })
        },
        'DEFAULT': () => {}
    }
    const EXEC = CASE[SOCKET_ADAPTER] || CASE['DEFAULT']
    EXEC()
}