/*******************************************************************************
 * * Server config
 ******************************************************************************/


const SOCKET = Constant.APP.SOCKET || 'none'


module.exports = proceed => {
    async.waterfall([
        (cb) => {
            if (SOCKET === 'none') return cb()

            require(`../configs/socket/${SOCKET}`)(cb)
        },
        (cb) => {
            Server
                .listen(Constant.APP.PORT, Constant.APP.HOST, () => {
                    const PATH = `http://${Constant.APP.HOST}:${Constant.APP.PORT}`

                    init_log.push({
                        type: 'SERVER',
                        address: PATH
                    })
                    cb()
                })
                .on('error', e => cb(e.message))
        }
    ], (e, r) => (e) ? proceed(e) : proceed())
}