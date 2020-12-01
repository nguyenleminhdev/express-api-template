/*******************************************************************************
 * 
 * * Serve static file config
 * 
 ******************************************************************************/


const PATH = path.join(process.cwd(), Constant.STATIC.PATH)


module.exports = proceed => {
    App.use(express.static(PATH))

    console.log('=> Serve static content successfully')
    proceed()
}