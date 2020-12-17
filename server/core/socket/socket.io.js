/*******************************************************************************
 * 
 * * Socket IO config
 * 
 ******************************************************************************/


const socket_io = require('socket.io')


module.exports = proceed => {
    ///////////////////
    // SOCKET IO DEFINE
    ///////////////////
    global.io = socket_io(Server)

    require('../../configs/socket/socket.io')
    // SOCKET IO DEFINE
    ///////////////////


    init_log.push({
        type: 'Socket.IO',
        address: `http://${Constant.APP.HOST}:${Constant.APP.PORT}`
    })
    proceed()
}