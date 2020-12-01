/*******************************************************************************
 * 
 * * Socket IO config
 * 
 ******************************************************************************/


// const socket_io = require('socket.io')


// module.exports = proceed => {
//     ///////////////////
//     // SOCKET IO DEFINE
//     ///////////////////
//     let io = socket_io(Server)
//     io.on('connection', socket => {
//         log.debug(`[+] : Client connect: ${socket.id}`)
//         io.emit('demo', 'Server ping client')

//         socket.on('demo', message => {
//             log.debug(`[>>] : Client message: ${JSON.stringify(message, null, 4)}`)
//         })

//         socket.on('disconnect', () => {
//             log.debug(`[-] : Client disconnect: ${socket.id}`)
//         })
//     })
//     io.on('error', (error) => proceed(e.message))
//     global.io = io
//     // SOCKET IO DEFINE
//     ///////////////////


//     init_log.push({
//         type: 'Socket.IO',
//         address: `http://${Constant.APP.HOST}:${Constant.APP.PORT}`
//     })
//     proceed()
// }