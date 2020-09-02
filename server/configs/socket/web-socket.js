/*******************************************************************************
 * * Web socket config
 ******************************************************************************/

const ws = require('ws')


//////////////
// CONTROLLERS
//////////////
const CONNECTED = ws => {
    log.debug(`[+] : A client connected`)

    ws.send('Server ping client')
}
const MESSAGE = (ws, message) => {
    log.debug(`[>>] : Client message: ${JSON.stringify(message, null, 4)}`)
}
const CLOSE = ws => {
    log.debug(`[-] : A client disconnect`)
}
// CONTROLLERS
//////////////


////////////////////
// WEB SOCKET DEFINE
////////////////////
let wss = new ws.Server({ server: Server })
wss.on('connection', ws => {
    CONNECTED(ws)
    ws.on('message', r => MESSAGE(ws, r))
    ws.on('close', CLOSE)
})
global.wss = wss
// WEB SOCKET DEFINE
////////////////////


log.info(`[Web Socket] : Ready to connect at: ws://${Constant.APP.HOST}:${Constant.APP.PORT}`)