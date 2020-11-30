/*******************************************************************************
 * * Global Variable Configuration
 * 
 * Configure which global variables which will be exposed automatically.
 * Making it accessible throughout your app.
 * 
 ******************************************************************************/


/////////////////
// DEFAULT MODULE
/////////////////
global.init_log = []
global.glob = require('glob-all')
global.express = require('express')
global.App = express()
global.Router = express.Router()
global.path = require('path')
global.Server = require('http').Server(App)
global.async = require('async')
global._ = require('lodash')
// DEFAULT MODULE
/////////////////


/////////////////////
// YOUR GLOBAL MODULE
/////////////////////
// global.xxx = require('xxx)
// YOUR GLOBAL MODULE
/////////////////////