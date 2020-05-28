class Server {
    constructor() {
        require('./config/global')(this)
        require('./config/constant')(this)

        this.app = this.express()
        this.router = this.express.Router()
        this.PORT = (process.env.NODE_ENV === 'production') ? this.constant.APP.PRODUCTION.PORT : this.constant.APP.DEVELOPMENT.PORT
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
        require('./config/security')(this)
        ////////
        require('./api/response/ok')(this)
        require('./api/response/err')(this)
    }
    _service() {
        require('./api/service/staticService')(this)
        require('./api/service/jwtService')(this)
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
        this.async.waterfall([
            (next) => this.connectMongo(() => next()),
            (next) => this.connectRedis(() => next())
        ], () => {
            const SOCKET_ADAPTER = (process.env.NODE_ENV === 'production') ? this.constant.APP.PRODUCTION.SOCKET_ADAPTER : this.constant.APP.DEVELOPMENT.SOCKET_ADAPTER
            const CASE = {
                'SOCKET.IO': () => {
                    this.server.listen(this.PORT, () => {
                        console.log(`Server start on port: ${this.PORT}`.blue)
                    })
                },
                'WS': () => {
                    this.server.listen(this.PORT, () => {
                        console.log(`Server start on port: ${this.PORT}`.blue)
                    })
                },
                'DEFAULT': () => {
                    this.app.listen(this.PORT, () => {
                        console.log(`Server start on port: ${this.PORT}`.blue)
                    })
                }
            }
            const EXEC = CASE[SOCKET_ADAPTER] || CASE['DEFAULT']
            EXEC()
        })
    }

    init() {
        this._database()
        this._useMiddleware()
        this._service()
        this._policy()
        this._makeRouter()
        this._doListen()
    }
}

let server = new Server()
server.init()