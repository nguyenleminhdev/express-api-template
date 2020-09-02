/*******************************************************************************
 * * Global Variable Configuration
 * 
 * Configure which global variables which will be exposed automatically.
 * Making  it accessible throughout your app.
 * 
 ******************************************************************************/

global.glob = require('glob-all')
global.express = require('express')
global.App = express()
global.Router = express.Router()
global.path = require('path')
global.Server = require('http').Server(App)

// Default effective module
global.async = require('async')
global._ = require('lodash')