/*******************************************************************************
 * * Server config
 ******************************************************************************/

const SOCKET = Constant.APP.SOCKET || 'none'
if (SOCKET !== 'none') require(`./socket/${SOCKET}`)

Server.listen(Constant.APP.PORT, Constant.APP.HOST, () => {
    log.info(`[Server] : Running successfully at: http://${Constant.APP.HOST}:${Constant.APP.PORT}`)
})