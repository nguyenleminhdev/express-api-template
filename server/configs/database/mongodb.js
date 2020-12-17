/*******************************************************************************
 * 
 * * Mongodb config
 * 
 ******************************************************************************/


module.exports = (mongodb_instance, proceed) => {
    mongodb_instance.connection.on('error', e => proceed(e.message))
    mongodb_instance.connection.on('connected', () => proceed())
}