module.exports = self => {
    self.router.all('/public/ping', (req, res) => {
        self.ok(res, 'pong')
    })
    self.router.all('/public/500', () => {
        throw new Error('this is error message!')
    })
    self.router.all('/public/socket-io', (req, res) => {
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
    self.router.all('/public/model', (req, res) => {
        self.async.parallel([
            (cb) => {
                self.Demo
                    .create({
                        page_id: '1',
                        client_id: '2'
                    }, (e, r) => {
                        console.log(e, r)
                        cb()
                    })
            },
            (cb) => {
                self.Test
                    .create({
                        page_id: '1',
                        client_id: '2'
                    }, (e, r) => {
                        console.log(e, r)
                        cb()
                    })
            }
        ], (e, r) => {
            self.ok(res, r)
        })
    })
    self.router.all('/public/jwt', (req, res) => {
        let jwt = self.cryptService.JWT.GENERATE({ test: 1 })
        console.log(jwt)
        self.cryptService.JWT.GET_PAYLOAD(jwt, (e, r) => console.log(e, r))
        self.cryptService.JWT.VERIFY(jwt, (e, r) => console.log(e, r))
        self.ok(res)
    })
    self.router.all('/public/uuid', (req, res) => {
        console.log(self.cryptService.UUID.GENERATE())
        self.ok(res)
    })
    self.router.all('/public/password', (req, res) => {
        let hash = self.cryptService.PASSWORD.HASH('123456')
        console.log(self.cryptService.PASSWORD.VERIFY('78910', hash))
        console.log(self.cryptService.PASSWORD.VERIFY('123456', hash))
        self.ok(res)
    })
    self.router.all('/public/aes256', (req, res) => {
        let hash = self.cryptService.AES256.ENCRYPT('abcdef')
        console.log(self.cryptService.AES256.ENCRYPT({ test: 1 }))
        console.log(hash)
        self.cryptService.AES256.DECRYPT('123456', (e, r) => console.log(e, r))
        self.cryptService.AES256.DECRYPT(hash, (e, r) => console.log(e, r))
        self.ok(res)
    })
}