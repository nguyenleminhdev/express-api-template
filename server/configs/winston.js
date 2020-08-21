module.exports = self => {
    const ES_TRANSPORT = new self.winston_elasticsearch({
        level: 'info',
        index: self.constant.LOG.INDEX,
        client: self.elasticsearch.Client({ hosts: self.constant.LOG.SERVER }),
        transformer: logData => {
            const transformed = {}
            transformed['@timestamp'] = logData.timestamp ? logData.timestamp : new Date().toISOString()
            transformed.message = logData.message;
            transformed.severity = logData.level;
            transformed.fields = logData.meta;
            transformed.node = self.constant.LOG.NODE;
            return transformed;
        }
    })

    const JSON_FORMAT = self.winston.format.printf(info => {
        if (typeof info.message === 'object')
            info.message = JSON.stringify(info.message, null, 4)

        return info
    })

    self.log = self.winston.createLogger({
        level: 'info',
        format: self.winston.format.combine(
            self.winston.format.errors({ stack: true }),
            self.winston.format.json(),
            JSON_FORMAT
        ),
        transports: [ES_TRANSPORT]
    })

    if (self.constant.LOG.LEVEL !== 'none') {
        self.log.add(new self.winston.transports.Console({
            format: self.winston.format.combine(
                self.winston.format.colorize(),
                self.winston.format.simple()
            )
        }))
    }

    self.log.on('error', (error) => {
        console.error('Error caught', error)
    })
    ES_TRANSPORT.on('warning', (error) => {
        console.error('Error caught', error)
    })
}