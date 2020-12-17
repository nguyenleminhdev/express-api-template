/*******************************************************************************
 * 
 * * Config model
 * 
 ******************************************************************************/


module.exports = proceed => {
    //////////
    // MONGODB
    //////////
    glob
        .sync(['api/models/mongo/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => require(path.resolve(n)))
    // MONGODB
    //////////


    ////////////////
    // ELASTICSEARCH
    ////////////////
    const ES_PATH = 'api/models/elasticsearch/'
    glob
        .sync([`${ES_PATH}**`])
        .filter(n => n.includes('.js'))
        .forEach(n => {
            const CONFIG = require(path.resolve(n))

            const DB_NAME = CONFIG.db
            const PROPERTIES = CONFIG.attributes
            const INDEX = n.replace(ES_PATH, '').replace('.js', '').toLowerCase()

            if (!DB_NAME || !PROPERTIES || !INDEX) return

            ELASTICSEARCH[DB_NAME]
                .indices
                .create({
                    index: INDEX,
                    body: {
                        mappings: {
                            default: {
                                properties: PROPERTIES
                            }
                        }
                    }
                }, (e, r, s) => {
                    if (
                        e &&
                        e.message.includes('resource_already_exists_exception')
                    ) return
                    if (e) log.error(e.message)
                })
        })
    // ELASTICSEARCH
    ////////////////


    console.log('=> Init database model successfully')
    proceed()
}