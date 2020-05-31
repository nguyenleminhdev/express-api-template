module.exports = self => {
    self.demoPolicy = (req, res, proceed) => {
        console.log('Demo policy working')
        proceed()
    }
}