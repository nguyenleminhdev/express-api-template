/*******************************************************************************
 * 
 * * Body parser config
 * 
 ******************************************************************************/


const body_parser = require('body-parser')


module.exports = proceed => {
    App.use(body_parser.json())
    App.use(body_parser.urlencoded({ extended: true }))

    console.log('=> Parser json body successfully')
    proceed()
}