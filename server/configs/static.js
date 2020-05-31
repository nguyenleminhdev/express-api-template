module.exports = self => {
    self.app.use(
        self.express.static(self.path.join(process.cwd(), 'public'))
    )
}