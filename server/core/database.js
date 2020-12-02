/*******************************************************************************
 * 
 * * Database config
 * 
 ******************************************************************************/


global.MONGODB = {}
global.REDIS = {}
global.ELASTICSEARCH = {}


module.exports = proceed => {
    const PROCESS = {}


    ///////////////////////////////
    // GET HANDLE DATABASE FUNCTION
    ///////////////////////////////
    glob
        .sync(['core/database/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => {
            const TYPE = n
                .replace('core/database/', '')
                .replace('.js', '')
                .toLowerCase()

            PROCESS[TYPE] = require(path.resolve(n))
        })
    // GET HANDLE DATABASE FUNCTION
    ///////////////////////////////


    ////////////////
    // INIT DATABASE
    ////////////////
    async.eachOfLimit(
        Constant.DATABASE,
        1,
        (list_connection_string, database_type, cb) => {
            async.eachOfLimit(
                list_connection_string,
                1,
                (connection_string, database_name, _cb) => {
                    const EXEC = PROCESS[database_type.toLowerCase()]
                    EXEC(database_name, connection_string, (e, r) => {
                        if (e) return _cb(e)

                        init_log.push({
                            type: database_type,
                            address: connection_string
                        })
                        _cb()
                    })
                },
                e => (e) ? cb(e) : cb()
            )
        },
        e => (e) ? proceed(e) : proceed()
    )
    // INIT DATABASE
    ////////////////
}