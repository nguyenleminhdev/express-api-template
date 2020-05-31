module.exports = self => {
    if (self.constant.LOG.LEVEL === 'none') return
    self.app.use(self.morgan(self.constant.LOG.LEVEL))
}