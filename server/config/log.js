module.exports = self => {
    self.app.use(self.morgan('tiny'))
}