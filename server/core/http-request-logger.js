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


module.exports = proceed => {
    App.use(HTTP_LOG)

    proceed()
}
