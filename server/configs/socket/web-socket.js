/*******************************************************************************
 * 
 * * Web socket config
 * 
 ******************************************************************************/


// const ws = require('ws')


// //////////////
// // CONTROLLERS
// //////////////
// const CONNECTED = ws => {
//     log.debug(`[+] : A client connected`)

//     ws.send('Server ping client')
// }
// const MESSAGE = (ws, message) => {
//     log.debug(`[>>] : Client message: ${JSON.stringify(message, null, 4)}`)
// }
// const CLOSE = ws => {
//     log.debug(`[-] : A client disconnect`)
// }
// // CONTROLLERS
// //////////////


// module.exports = proceed => {
//     ////////////////////
//     // WEB SOCKET DEFINE
//     ////////////////////
//     let wss = new ws.Server({ server: Server })
//     wss.on('connection', ws => {
//         CONNECTED(ws)
//         ws.on('message', r => MESSAGE(ws, r))
//         ws.on('close', CLOSE)
//     })
//     wss.on('error', e => proceed(e.message))
//     global.wss = wss
//     // WEB SOCKET DEFINE
//     ////////////////////


//     init_log.push({
//         type: 'Web Socket',
//         address: `ws://${Constant.APP.HOST}:${Constant.APP.PORT}`
//     })
//     proceed()
// }