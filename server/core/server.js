/*******************************************************************************
 * 
 * * Server config
 * 
 ******************************************************************************/

const SOCKET = Constant.APP.SOCKET || 'none'

module.exports = proceed => {
    async.waterfall([
        cb => { // * import socket if exist
            if (SOCKET === 'none') return cb()

            require(`../core/socket/${SOCKET}`)(cb)
        },
        cb => { // * start server
            Server
                .listen(Constant.APP.PORT, Constant.APP.HOST, () => {
                    const PATH = `http://${Constant.APP.HOST}:${Constant.APP.PORT}`

                    init_log.push({ type: 'SERVER', address: PATH })
                    cb()
                })
                .on('error', e => cb(e.message))
        }
    ], e => proceed(e))
}