/*******************************************************************************
 * 
 * * Http request logging config
 * 
 ******************************************************************************/

const morgan = require('morgan')

const HTTP_LOG = morgan(
    'dev',
    {
        stream: {
            write: (message, encoding) => log.http(message)
        }
    }
)

App.use(HTTP_LOG)