/*******************************************************************************
 * * app.js
 * 
 * To start the server development, run: `npm start`.
 * To start the server production, try:
 *  => node app.js --node_env=production
 *  => pm2 start pm2.json
 *  => docker-compose up --build -d
 * 
 ******************************************************************************/

const NODE_ENV = process.env.NODE_ENV || 'development'

// Import server configs
require(`./configs/env/${NODE_ENV}`)
require('./configs/console-log')

try {
    // Start server
    require('./configs/global')
    require('./configs/static')
    require('./configs/cors')
    require('./configs/body-parser')
    require('./configs/logs-request')
    require('./configs/database')
    require('./configs/model')
    require('./configs/policy')
    require('./configs/router')
    require('./configs/server')
    require('./configs/bootstrap')
} catch (e) {
    log.error(`Server error: ${e.message}`)
}