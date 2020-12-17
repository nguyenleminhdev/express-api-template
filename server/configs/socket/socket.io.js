/*******************************************************************************
 * 
 * * Socket IO config
 * 
 ******************************************************************************/


/////////////
// CONNECTION
/////////////
io.on('connection', socket => {
    log.debug(`[+] : Client connect: ${socket.id}`)
    io.emit('demo', 'Server ping client')

    socket.on('demo', message => {
        log.debug(`[>>] : Client message: ${JSON.stringify(message, null, 4)}`)
    })

    socket.on('disconnect', () => {
        log.debug(`[-] : Client disconnect: ${socket.id}`)
    })
})
// CONNECTION
/////////////


////////
// ERROR
////////
io.on('error', e => log.error(e.message))
// ERROR
////////