/*******************************************************************************
 * 
 * * Cross-Origin Resource Sharing config
 * 
 ******************************************************************************/

const cors = require('cors')

module.exports = proceed => {
    let cors_config = {}

    if (Constant.CORS) cors_config = (req, cb) => {
        const ORIGIN = req.header('Origin')
        const METHOD = req.method

        if (
            Constant.CORS.origins &&
            !Constant.CORS.origins.some(n => ORIGIN && ORIGIN.includes(n))
        ) return cb('CORS')
        if (
            Constant.CORS.methods &&
            !Constant.CORS.methods.includes(METHOD)
        ) return cb('CORS')

        cb(null, true)
    }

    App.use(cors(cors_config))

    console.log('=> Openning cors for sencurity successfully')

    proceed()
}