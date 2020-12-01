/*******************************************************************************
 * 
 * * Cross-Origin Resource Sharing config
 * 
 ******************************************************************************/


const cors = require('cors')
const CONFIG_CORS = cors(Constant.CORS)


module.exports = proceed => {
    App.use(CONFIG_CORS)

    console.log('=> Openning cors for sencurity successfully')
    proceed()
}