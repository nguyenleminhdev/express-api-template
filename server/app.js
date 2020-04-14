class Server {
    app; router; PORT; server;
    path;
    ok; err;
    constructor(PORT = process.env.PORT || 1337) {
        require('./config/global')(this)

        this.app = this.express()
        this.router = this.express.Router()
        this.PORT = PORT

        require('./config/socket')(this)

        require('./api/response/ok')(this)
        require('./api/response/err')(this)
    }

    _useMiddleware() {
        require('./config/http')(this)
        require('./config/log')(this)
        require('./config/view')(this)
    }
    _makeRouter() {
        require('./api/controller/publicController')(this)
        require('./config/blueprint')(this)
        require('./config/router')(this)
    }
    _doListen() {
        this.server.listen(
            this.PORT,
            () => console.log(`Server start on port: ${this.PORT}`.blue)
        )
    }

    init() {
        this._useMiddleware()
        this._makeRouter()
        this._doListen()
    }
}

let server = new Server()
server.init()