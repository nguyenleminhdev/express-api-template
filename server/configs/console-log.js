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
const JSON_FORMAT = printf(info => {
    if (typeof info.message === 'object') info.message = JSON.stringify(info.message, null, 4)
    return info
})

const ES_TRANSPORT = new winston_elasticsearch({
    level: Constant.LOG.ES_TRANSPORT.LEVEL,
    index: Constant.LOG.ES_TRANSPORT.INDEX,
    client: elasticsearch.Client({ hosts: Constant.LOG.ES_TRANSPORT.CLIENT }),
    transformer: ES_TRANFORMER
})
const CONSOLE_TRANSPORT = new transports.Console({
    format: combine(colorize(), simple())
})

let list_transports = [CONSOLE_TRANSPORT]

if (Constant.LOG.ES_TRANSPORT) list_transports.push(ES_TRANSPORT)

global.log = createLogger({
    level: Constant.LOG.LEVEL,
    format: combine(
        errors({ stack: true }),
        json(),
        JSON_FORMAT
    ),
    transports: list_transports
})

log.on('error', e => console.error('Winston log error: ', e))

if (Constant.LOG.ES_TRANSPORT)
    ES_TRANSPORT.on('warning', e => console.error('ES tranport warning: ', e))