/*******************************************************************************
 * 
 * * Module config
 * 
 ******************************************************************************/

module.exports = proceed => {
    const DATA = {}
    async.waterfall([
        cb => { // * service auto require
            DATA.services = glob
                .sync(['api/services/**'])
                .filter(n => n.includes('.js'))

            async.eachOfLimit(DATA.services, 1, (n, i, next) => {
                if (!n.includes('Service.js')) return next()

                const SERVICE_NAME = n
                    .replace('api/services/', '')
                    .replace('.js', '')

                global[SERVICE_NAME] = require(path.resolve(n))

                next()
            }, cb)
        },
        cb => { // * bootstrap auto require and action
            DATA.bootstrap = glob
                .sync(['api/bootstrap/**'])
                .filter(n => n.includes('.js'))

            async.eachOfLimit(DATA.bootstrap, 1, (n, i, next) => {
                require(path.resolve(n))

                next()
            }, cb)
        },
        cb => { // * custom express request object
            DATA.requests = glob
                .sync(['api/requests/**'])
                .filter(n => n.includes('.js'))

            async.eachOfLimit(DATA.requests, 1, (n, i, next) => {
                const REQUEST_NAME = n
                    .replace('api/requests/', '')
                    .replace('.js', '')

                App.request[REQUEST_NAME] = require(path.resolve(n))

                next()
            }, cb)
        },
        cb => { // * custom express response object
            DATA.responses = glob
                .sync(['api/responses/**'])
                .filter(n => n.includes('.js'))

            async.eachOfLimit(DATA.responses, 1, (n, i, next) => {
                const RESPONSE_NAME = n
                    .replace('api/responses/', '')
                    .replace('.js', '')

                App.response[RESPONSE_NAME] = require(path.resolve(n))

                next()
            }, cb)
        },
        cb => { // * alert
            console.log('=> Loading modules global successfully')

            cb()
        }
    ], e => proceed(e))
}