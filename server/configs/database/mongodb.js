
/*******************************************************************************
 * * Mongodb config
 ******************************************************************************/


// const mongoose = require('mongoose')

// module.exports = (database_name, connection_string, proceed) => {
//     let mongodb_instance = new mongoose.Mongoose()
//     mongodb_instance.connect(
//         connection_string,
//         {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//             useCreateIndex: true,
//         }
//     )
//     MONGODB[database_name] = mongodb_instance

//     mongodb_instance.connection.on('error', e => proceed(e.message))
//     mongodb_instance.connection.on('connected', () => proceed())
// }