module.exports = self => {
    self.test1Policy = (req, res, proceed) => {
        console.log('this is test 1 policy')

        proceed()
    }
}