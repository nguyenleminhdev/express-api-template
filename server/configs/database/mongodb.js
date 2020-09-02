
/*******************************************************************************
 * * Mongodb config
 ******************************************************************************/

const mongoose = require('mongoose')

module.exports = (database_name, connection_string) => {
    let mongodb_instance = new mongoose.Mongoose()
    mongodb_instance.connect(
        connection_string,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    mongodb_instance.connection.on('error', e => log.error(`[Mongodb] : Error: ${e.message}`))
    mongodb_instance.connection.on('connected', () => log.info(`[Mongodb] : Connected at: ${connection_string}`))

    MONGODB[database_name] = mongodb_instance
}