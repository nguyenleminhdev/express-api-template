/*******************************************************************************
 * 
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
global.MONGODB = {}
global.REDIS = {}
global.ELASTICSEARCH = {}
global.mongoose = require('mongoose')
global.ObjectId = mongoose.Schema.Types.ObjectId
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
// * global.your_module = require('your_module')
// YOUR GLOBAL MODULE
/////////////////////

/////////////////////
// SHARE ENV CONSTANT
/////////////////////
// * global.something = 'some string or number'
// SHARE ENV CONSTANT
/////////////////////