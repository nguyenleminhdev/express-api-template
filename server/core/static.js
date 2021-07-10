/*******************************************************************************
 * 
 * * Serve static file config
 * 
 ******************************************************************************/

module.exports = proceed => {
    const PATH = path.join(process.cwd(), Constant.STATIC.PATH)

    App.use(express.static(PATH))

    console.log('=> Serve static content successfully')

    proceed()
}