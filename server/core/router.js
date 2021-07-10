/*******************************************************************************
 * 
 * * Router config
 * 
 ******************************************************************************/

module.exports = proceed => {
    const DATA = {}
    async.waterfall([
        cb => { // * prefix config
            App.use(Constant.ROUTER.PREFIX, Router)

            cb()
        },
        cb => { // * handle error global
            App.all('/', (req, res) => res.ok('This server is running'))

            App.use((req, res, next) => {
                res.err({
                    path: req.url,
                    method: req.method,
                    message: 'Api not found'
                }, 404)
            })

            App.use((err, req, res, next) => {
                if (err === 'CORS') return res.err(err, 500)

                log.log({
                    level: 'error',
                    message: err.message,
                    path: req.url,
                    method: req.method,
                    data: JSON.stringify({ ...req.query, ...req.body }, null, 4)
                })
                res.err(err.message, 500)
            })

            cb()
        },
        cb => { // * auto load controllers
            DATA.controllers = glob
                .sync(['api/controllers/**'])
                .filter(n => n.includes('Controller.js'))

            async.eachOfLimit(DATA.controllers, 1, (n, i, next) => {
                const FIRST_PATH = n
                    .replace('api/controllers/', '/')
                    .replace('Controller.js', '/')

                const LIST_API = require(path.resolve(n))

                async.eachOfLimit(LIST_API, 1, (v, k, _next) => {
                    const API_CONTROLLER = LIST_API[k]

                    Router.all(`${FIRST_PATH}${k}`, API_CONTROLLER)

                    _next()
                }, next)
            }, cb)
        },
        cb => { // * alert
            console.log('=> Loading router api successfully')

            cb()
        }
    ], e => proceed(e))
}