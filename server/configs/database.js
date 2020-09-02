/*******************************************************************************
 * 
 * * Database config
 * 
 ******************************************************************************/

global.MONGODB = {}
global.REDIS = {}
global.ELASTICSEARCH = {}

const PROCESS = {}
glob
    .sync(['configs/database/**'])
    .filter(n => n.includes('.js'))
    .forEach(n => {
        const TYPE = n.replace('configs/database/', '').replace('.js', '')
        PROCESS[TYPE.toLowerCase()] = require(path.resolve(n))
    })

for (let database_type in Constant.DATABASE) {
    let list_connection_string = Constant.DATABASE[database_type]

    for (let database_name in list_connection_string) {
        let connection_string = list_connection_string[database_name]

        const EXEC = PROCESS[database_type.toLowerCase()]
        EXEC(database_name, connection_string)
    }
}