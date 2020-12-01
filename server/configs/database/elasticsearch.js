/*******************************************************************************
 * * Elasticsearch config
 ******************************************************************************/


// const elasticsearch = require('elasticsearch')

// module.exports = (database_name, connection_string, proceed) => {
//     const ES_CLIENT = elasticsearch.Client({ hosts: connection_string })

//     ES_CLIENT.ping(
//         { requestTimeout: 3000 },
//         e => (e) ? proceed(e) : proceed()
//     )

//     ELASTICSEARCH[database_name] = ES_CLIENT
// }