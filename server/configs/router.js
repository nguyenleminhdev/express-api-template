module.exports = self => {
    self.app.use(self.constant.APP.PREFIX, self.router)
    self.app.all('/', (req, res) => self.ok(res, 'This server is running'))
    self.app.use((req, res, next) => self.err(res, 'Api not found', 404))
    self.app.use((err, req, res, next) => {
        console.log(`Error : ${err.message}`.red)
        self.err(res, err.message, 500)
    })
}