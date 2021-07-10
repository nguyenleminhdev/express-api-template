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

module.exports = proceed => {
    /////////////////////
    // DEFAULT LOG FORMAT
    /////////////////////
    const ES_TRANFORMER = log => {
        const NODE = _.get(Constant, 'LOG.ES_TRANSPORT.NODE')

        if (!NODE) return {}

        return {
            '@timestamp': log.timestamp || new Date().toISOString(),
            message: log.message,
            severity: log.level,
            fields: log.meta,
            node: NODE,
            path: log.meta.path || '',
            method: log.meta.method || '',
            data: log.meta.data || '',
        }
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
        es_transport.on(
            'warning',
            e => console.error('ES tranport warning: ', e)
        )
    // HANDLE ERROR
    ///////////////

    console.log('=> Init winston logger successfully')
    proceed()
}