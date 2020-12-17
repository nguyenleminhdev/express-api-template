/*******************************************************************************
 * 
 * * Web socket config
 * 
 ******************************************************************************/


const ws = require('ws')


module.exports = proceed => {
    ////////////////////
    // WEB SOCKET DEFINE
    ////////////////////
    global.wss = new ws.Server({ server: Server })

    require('../../configs/socket/web-socket')
    // WEB SOCKET DEFINE
    ////////////////////


    init_log.push({
        type: 'Web Socket',
        address: `ws://${Constant.APP.HOST}:${Constant.APP.PORT}`
    })
    proceed()
}