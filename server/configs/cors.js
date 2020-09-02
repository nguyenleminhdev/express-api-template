/*******************************************************************************
 * 
 * * Cross-Origin Resource Sharing config
 * 
 ******************************************************************************/

const cors = require('cors')

const CONFIG_CORS = cors(Constant.CORS)

App.use(CONFIG_CORS)