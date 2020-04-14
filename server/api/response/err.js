module.exports = self => {
    self.err = (res, e, code = 403) => {
        res
            .status(code)
            .json({
                succes: false,
                code: code,
                message: e
            })
    }
}