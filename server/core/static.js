/*******************************************************************************
 * 
 * * Serve static file config
 * 
 ******************************************************************************/


const PATH = path.join(process.cwd(), Constant.STATIC.PATH)


module.exports = proceed => {
    App.use(express.static(PATH))

    proceed()
}