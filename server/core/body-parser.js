/*******************************************************************************
 * 
 * * Body parser config
 * 
 ******************************************************************************/


const body_parser = require('body-parser')


module.exports = proceed => {
    App.use(body_parser.urlencoded({ extended: false }))
    App.use(body_parser.json())

    console.log('=> Parser json body successfully')
    proceed()
}