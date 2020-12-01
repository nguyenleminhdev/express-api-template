/*******************************************************************************
 * * Redis config
 ******************************************************************************/


// const redis = require('redis')

// module.exports = (database_name, connection_string, proceed) => {
//     let redis_instance = redis.createClient(connection_string)
//     REDIS[database_name] = redis_instance

//     let error = undefined
//     redis_instance.on('error', e => {
//         if (error) return

//         error = e
//         proceed(e.message)
//     })
//     redis_instance.on('ready', () => proceed())
// }