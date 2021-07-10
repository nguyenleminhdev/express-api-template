/*******************************************************************************
 * 
 * * Http request logging config
 * 
 ******************************************************************************/

const morgan = require('morgan')

module.exports = proceed => {
    const HTTP_LOG = morgan(
        'dev',
        {
            stream: {
                write: (message, encoding) => log.http(message)
            }
        }
    )
    
    App.use(HTTP_LOG)

    console.log('=> Logging all http request successfully')

    proceed()
}
