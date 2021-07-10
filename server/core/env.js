/*******************************************************************************
 * 
 * * Select and load config file to all server
 * 
 ******************************************************************************/

module.exports = proceed => {
    const NODE_ENV = process.env.NODE_ENV || 'development'

    require(path.join(process.cwd(), `/configs/env/${NODE_ENV}`))

    console.log('=> Loading server config file successfully')
    proceed()
}