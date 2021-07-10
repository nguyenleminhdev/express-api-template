/*******************************************************************************
 * * app.js
 * 
 * To start the server development, run: `npm start` or `npm run dev`.
 * 
 * To start the server production, try:
 *  => npm run prod
 *  => pm2 start pm2.json
 *  => docker-compose up --build -d
 * 
 ******************************************************************************/

try {
    // Start server
    console.clear()
    console.log('[+]Start init server...\n')

    // Init global package
    require('./configs/global')

    // Start core module
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
        cb => require('./core/module')(cb),
        cb => require('./core/router')(cb),
        cb => require('./core/server')(cb),
    ], (e, r) => {
        if (e) return log.error(`Start Server error: ${e}`)

        console.log(`\n${process.env.npm_package_name} v${process.env.npm_package_version}`)
        console.table(init_log)
        log.info('**Server listening successfully!**')
    })
} catch (e) {
    console.log('\x1b[31m', `\nStart Server error: ${e.message || e}`)
}
