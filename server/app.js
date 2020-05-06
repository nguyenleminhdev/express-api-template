class Server {
    app; router; PORT; server;
    path;
    ok; err;
    constructor() {
        require('./config/global')(this)
        require('./config/constant')(this)

        this.app = this.express()
        this.router = this.express.Router()
        this.PORT = this.constant.APP.PORT
    }

    _database() {
        require('./config/database')(this)
        ///////
        require('./api/models/Conversation')(this)
        require('./api/models/Message')(this)
    }
    _useMiddleware() {
        require('./config/socket')(this)
        require('./config/http')(this)
        require('./config/log')(this)
        require('./config/view')(this)
        ////////
        require('./api/response/ok')(this)
        require('./api/response/err')(this)
    }
    _policy() {
        require('./api/policy/test1Policy')(this)
        ////////
        require('./config/policy')(this)
    }
    _makeRouter() {
        require('./api/controller/publicController')(this)

        require('./config/blueprint')(this)
        require('./config/router')(this)
    }
    _doListen() {
        this.connectDB(() => {
            this.server.listen(
                this.PORT,
                () => console.log(`Server start on port: ${this.PORT}`.blue)
            )
        })
    }

    init() {
        this._database()
        this._useMiddleware()
        this._policy()
        this._makeRouter()
        this._doListen()
    }
}

let server = new Server()
server.init()