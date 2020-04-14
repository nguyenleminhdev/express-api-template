module.exports = self => {
    self.app.use('/v1', self.router)
}