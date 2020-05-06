module.exports = self => {
    self.router.use('/public', self.test1Policy)
}