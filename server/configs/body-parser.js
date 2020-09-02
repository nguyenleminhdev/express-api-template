/*******************************************************************************
 * 
 * * Body parser config
 * 
 ******************************************************************************/

const body_parser = require('body-parser')

App.use(body_parser.urlencoded({ extended: false }))
App.use(body_parser.json())