module.exports = self => {
    self.constant = {
        DATABASE: {
            PRODUCTION: {
                MONGO_DB: 'mongodb://localhost:27017/database',
                REDIS: 'redis://localhost:6379/0'
            },
            DEVELOPMENT: {
                MONGO_DB: 'mongodb://localhost:27017/database',
                REDIS: 'redis://localhost:6379/0'
            }
        },
        APP: {
            PRODUCTION: {
                PORT: process.env.PORT || 1337,
                IMAGE_PATH: 'http://localhost:1337/image',
                IP: '127.0.0.1',
                SOCKET_ADAPTER: 'SOCKET.IO'
            },
            DEVELOPMENT: {
                PORT: process.env.PORT || 1337,
                IMAGE_PATH: 'http://localhost:1337/image',
                IP: '127.0.0.1',
                SOCKET_ADAPTER: 'WS'
            }
        },
        JWT: {
            PRODUCTION: {
                SECRET: '12345',
                DEFAULT_EXPIRE: 24 * 60 * 60 * 1 // 1 ngay
            },
            DEVELOPMENT: {
                SECRET: 'chatbox123!@#',
                DEFAULT_EXPIRE: 24 * 60 * 60 * 1 // 1 ngay
            }
        }
    }
}