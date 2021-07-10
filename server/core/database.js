/*******************************************************************************
 * 
 * * Database config
 * 
 ******************************************************************************/

module.exports = proceed => {
    const DATA = {}
    async.waterfall([
        cb => { // * get handle database function
            DATA.db_helper = glob
                .sync(['core/database/**'])
                .filter(n => n.includes('.js'))

            async.eachOfLimit(DATA.db_helper, 1, (n, i, next) => {
                const DB_TYPE = n
                    .replace('core/database/', '')
                    .replace('.js', '')
                    .toLowerCase()

                DATA[DB_TYPE] = require(path.resolve(n))

                next()
            }, cb)
        },
        cb => { // * init database
            async.eachOfLimit(Constant.DATABASE, 1, (v, k, next) => {
                async.eachOfLimit(v, 1, (_v, _k, _cb) => {
                    const EXEC = DATA[k.toLowerCase()]

                    EXEC(_k, _v, (e, r) => {
                        if (e) return _cb(e)

                        init_log.push({ type: k, address: _v })
                        _cb()
                    })
                }, next)
            }, cb)
        }
    ], proceed)
}