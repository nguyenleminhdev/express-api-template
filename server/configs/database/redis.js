/*******************************************************************************
 * 
 * * Redis config
 * 
 ******************************************************************************/


module.exports = (redis_instance, proceed) => {
    let error = undefined
    redis_instance.on('error', e => {
        if (error) return

        error = e
        proceed(e.message)
    })


    redis_instance.on('ready', () => proceed())
}