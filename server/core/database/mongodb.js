/*******************************************************************************
 * 
 * * Mongodb config
 * 
 ******************************************************************************/

module.exports = (database_name, connection_string, proceed) => {
    let mongodb_instance = new mongoose.Mongoose()

    mongodb_instance.connect(
        connection_string,
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        }
    )
    MONGODB[database_name] = mongodb_instance

    require('../../configs/database/mongodb')(mongodb_instance, proceed)
}