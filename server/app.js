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

console.clear()

require('./configs/global')
async.waterfall([
    cb => require('./core/env')(cb),
    cb => require('./core/logger.js')(cb),
    cb => require('./core/static')(cb),
    cb => require('./core/cors')(cb),
    cb => require('./core/body-parser')(cb),
    cb => require('./core/http-request-logger')(cb),
    cb => require('./core/database')(cb),
    cb => require('./core/model')(cb),
    cb => require('./core/policy')(cb),
    cb => require('./core/router')(cb),
    cb => require('./core/server')(cb),
], (e, r) => {
    if (e) return log.error(`Start Server error: ${e}`)

    console.table(init_log)
    log.info('Start server successfully!')
})