module.exports = self => {
    const CASE = {
        'SOCKET.IO': () => {
            self.io = self.socket_io(self.server)
            self.io.on('connection', socket => {
                console.log(`[${socket.id}] Socket connect [+]`.green)
                socket.on('disconnect', () => console.log(`[${socket.id}] Socket disconnect [-]`.green))
            })
            console.log('Socket.io is ready to connect'.blue)
        },
        'WS': () => {
            self.wss = new self.ws.Server({ server: self.server })
            self.wss.on('connection', ws => {
                ws.on('close', () => console.log('Socket close'))
                ws.on('message', r => console.log(r))
            })
            console.log('Web socket is ready to connect'.blue)
        },
        'NONE': () => { }
    }

    const EXEC = CASE[self.constant.SOCKET.ADAPTER] || CASE['NONE']
    self.listen = next => {
        EXEC()
        self.server.listen(self.constant.APP.PORT, self.constant.APP.HOST, () => {
            console.log(`Server listen on url: ${self.constant.APP.HOST}:${self.constant.APP.PORT}`.blue)
            next()
        })
    }
}