module.exports = self => {
    self.app.use(self.body_parser.urlencoded({ extended: false }))
    self.app.use(self.body_parser.json())
}