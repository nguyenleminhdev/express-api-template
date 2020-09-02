/*******************************************************************************
 * * Redis config
 ******************************************************************************/

const redis = require('redis')

module.exports = (database_name, connection_string) => {
    let redis_instance = redis.createClient(connection_string)
    redis_instance.on('error', e => log.error(`[Redis] Error: ${e.message}`))
    redis_instance.on('ready', () => log.info(`[Redis] : Connected at: ${connection_string}`))

    REDIS[database_name] = redis_instance
}