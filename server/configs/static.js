/*******************************************************************************
 * 
 * * Serve static file config
 * 
 ******************************************************************************/

const PATH = path.join(process.cwd(), Constant.STATIC.PATH)
App.use(express.static(PATH))