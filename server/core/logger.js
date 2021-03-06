/*******************************************************************************
 * * Built-in Log Configuration
 * 
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, App uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 ******************************************************************************/


const { format, createLogger, transports } = require('winston')
const { printf, combine, errors, json, colorize, simple } = format
const winston_elasticsearch = require('winston-elasticsearch')
const elasticsearch = require('elasticsearch')


/////////////////////
// DEFAULT LOG FORMAT
/////////////////////
const ES_TRANFORMER = log_data => {
    const TRANFORMER = {}
    TRANFORMER['@timestamp'] = log_data.timestamp ? log_data.timestamp : new Date().toISOString()
    TRANFORMER.message = log_data.message
    TRANFORMER.severity = log_data.level
    TRANFORMER.fields = log_data.meta
    TRANFORMER.node = Constant.LOG.ES_TRANSPORT.NODE
    TRANFORMER.path = log_data.meta.path || ''
    TRANFORMER.method = log_data.meta.method || ''
    TRANFORMER.data = log_data.meta.data || ''
    return TRANFORMER
}
// DEFAULT LOG FORMAT
/////////////////////


///////////////////
// HELPER FUNCTIONS
///////////////////
const JSON_FORMAT = printf(info => {
    if (typeof info.message === 'object') 
        info.message = JSON.stringify(info.message, null, 4)
    return info
})
const CONSOLE_TRANSPORT = new transports.Console({
    format: combine(colorize(), simple())
})
// HELPER FUNCTIONS
///////////////////


//////////////
// INIT ES LOG
//////////////
let list_transports = [CONSOLE_TRANSPORT]
let es_transport

if (Constant.LOG.ES_TRANSPORT) {
    es_transport = new winston_elasticsearch({
        level: Constant.LOG.ES_TRANSPORT.LEVEL,
        index: Constant.LOG.ES_TRANSPORT.INDEX,
        client: elasticsearch.Client({ hosts: Constant.LOG.ES_TRANSPORT.CLIENT }),
        transformer: ES_TRANFORMER
    })

    list_transports.push(es_transport)
}
// INIT ES LOG
//////////////


///////////////////
// INIT CONSOLE LOG
///////////////////
global.log = createLogger({
    level: Constant.LOG.LEVEL,
    format: combine(
        errors({ stack: true }),
        json(),
        JSON_FORMAT
    ),
    transports: list_transports
})
// INIT CONSOLE LOG
///////////////////


///////////////
// HANDLE ERROR
///////////////
log.on('error', e => console.error('Winston log error: ', e))

if (Constant.LOG.ES_TRANSPORT)
    es_transport.on('warning', e => console.error('ES tranport warning: ', e))
// HANDLE ERROR
///////////////


module.exports = proceed => {
    console.log('=> Init winston logger successfully')
    proceed()
}