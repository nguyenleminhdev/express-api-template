/*******************************************************************************
 * * Router config
 ******************************************************************************/


module.exports = proceed => {
    /////////////
    // PREFIX API
    /////////////
    App.use(Constant.ROUTER.PREFIX, Router)
    // PREFIX API
    /////////////


    //////////////////////////
    // IMPORT HELPER FUNCTIONS
    //////////////////////////
    glob
        .sync(['api/services/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => {
            if (!n.includes('Service.js')) return
            const SERVICE_NAME = n.replace('api/services/', '').replace('.js', '')
            global[SERVICE_NAME] = require(path.resolve(n))
        })
    glob
        .sync(['api/bootstrap/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => require(path.resolve(n)))
    glob
        .sync(['core/requests/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => {
            const REQUEST_NAME = n.replace('core/requests/', '').replace('.js', '')
            App.request[REQUEST_NAME] = require(path.resolve(n))
        })
    glob
        .sync(['core/responses/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => {
            const RESPONSE_NAME = n.replace('core/responses/', '').replace('.js', '')
            App.response[RESPONSE_NAME] = require(path.resolve(n))
        })
    // IMPORT HELPER FUNCTIONS
    //////////////////////////


    ///////////////////
    // HANDLE API ERROR
    ///////////////////
    App.all('/', (req, res) => res.ok('This server is running'))
    App.use((req, res, next) => res.err('Api not found', 404))
    App.use((err, req, res, next) => {
        log.log({
            level: 'error',
            message: err.message,
            path: req.url,
            method: req.method,
            data: JSON.stringify({ ...req.query, ...req.body }, null, 4)
        })
        res.err(err.message, 500)
    })
    // HANDLE API ERROR
    ///////////////////


    ////////////////////////
    // HANDLE API CONTROLLER
    ////////////////////////
    glob
        .sync(['api/controllers/**'])
        .filter(n => n.includes('Controller.js'))
        .forEach(n => {
            const FIRST_PATH = n.replace('api/controllers/', '/').replace('Controller.js', '/')
            const LIST_API = require(path.resolve(n))

            for (API in LIST_API) {
                const API_CONTROLLER = LIST_API[API]

                Router.all(`${FIRST_PATH}${API}`, API_CONTROLLER)
            }
        })
    // HANDLE API CONTROLLER
    ////////////////////////


    console.log('=> Loading router api successfully')
    proceed()
}