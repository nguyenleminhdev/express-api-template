module.exports = self => {
    self.ok = (res, r, code = 200) => {
        res
            .status(code)
            .json({
                succes: true,
                code: code,
                data: r
            })
    }
}