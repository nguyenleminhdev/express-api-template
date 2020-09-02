/*******************************************************************************
 * * Elasticsearch config
 ******************************************************************************/
const elasticsearch = require('elasticsearch')

module.exports = (database_name, connection_string) => {
    ELASTICSEARCH[database_name] = elasticsearch.Client({ hosts: connection_string })
    log.info(`[Elasticsearch] : Connected at: ${connection_string}`)
}