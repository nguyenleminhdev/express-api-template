/*******************************************************************************
 * 
 * * Body parser config
 * 
 ******************************************************************************/


const body_parser = require('body-parser')
const LIMIT = Constant.APP.LIMIT_BODY

module.exports = proceed => {
    App.use(body_parser.json({ limit: LIMIT }))
    App.use(body_parser.urlencoded({ limit: LIMIT, extended: true }))

    console.log('=> Parser json body successfully')
    proceed()
}