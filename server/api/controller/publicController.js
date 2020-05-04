module.exports = self => {
    self.router.all('/public/ping', (req, res) => {
        self.ok(res, 'pong')
    })
    self.router.all('/public/500', (req, res) => {
        throw new Error('this is error message!')
    })
    self.router.all(`/public/socketio`, (req, res) => {
        let p = { ...req.query, ...req.body }
        if (!p.event || !p.message) return self.err(res, 'REQUIRED_PARAMS')

        self.io.emit(p.event, p.message)
        self.ok(res)
    })
    self.router.all('/public/ws', (req, res) => {
        const data = {
            test: 'data send to websocket'
        }

        self.wss.clients.forEach(ws => {
            ws.send(JSON.stringify(data))
        })

        self.ok(res)
    })
}