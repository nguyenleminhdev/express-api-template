module.exports = self => {
    self.router.use('/public', self.demoPolicy)
}