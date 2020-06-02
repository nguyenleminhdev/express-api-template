module.exports = self => {
    self.staticService = {
        DOWNLOAD: (uri, file_name, proceed) => {
            self.async.waterfall([
                (next) => {
                    self.request
                        .head(
                            uri,
                            (e, r, b) => (e) ? next(e) : next()
                        )
                },
                (next) => {
                    let file_path = self.path.join(process.cwd(), 'public', file_name)
                    self.request(uri)
                        .pipe(self.fs.createWriteStream(file_path))
                        .on(
                            'close',
                            () => next()
                        )
                }
            ], (e, r) => (e) ? proceed(e) : proceed())
        }
    }
}