/*******************************************************************************
 * 
 * * Select and load config file to all server
 * 
 ******************************************************************************/


const NODE_ENV = process.env.NODE_ENV || 'development'
const ENV_PATH = path.join(process.cwd(), `/configs/env/${NODE_ENV}`)


module.exports = proceed => {
    try {
        require(ENV_PATH)

        console.log('=> Loading server config file successfully')
        proceed()
    } catch (e) {
        proceed(e.message)
    }
}