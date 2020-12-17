/*******************************************************************************
 * 
 * * Redis config
 * 
 ******************************************************************************/


const redis = require('redis')


module.exports = (database_name, connection_string, proceed) => {
    let redis_instance = redis.createClient(connection_string)
    
    REDIS[database_name] = redis_instance

    require('../../configs/database/redis')(redis_instance, proceed)
}