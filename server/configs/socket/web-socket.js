/*******************************************************************************
 * 
 * * Web socket config
 * 
 ******************************************************************************/


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


wss.on('connection', ws => {
    CONNECTED(ws)
    ws.on('message', r => MESSAGE(ws, r))
    ws.on('close', CLOSE)
})
wss.on('error', e => log.error(e.message))