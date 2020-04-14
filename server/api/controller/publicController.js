module.exports = self => {
    self.router.all('/public/ping', (req, res) => {
        self.ok(res, 'pong')
    })
    self.router.all('/public/500', (req, res) => {
        throw new Error('this is error message!')
    })
    self.router.all(`/public/emit`, (req, res) => {
        let p = { ...req.query, ...req.body }
        if (!p.event || !p.message) return self.err(res, 'REQUIRED_PARAMS')

        self.io.emit(p.event, p.message)
        self.ok(res)
    })
}