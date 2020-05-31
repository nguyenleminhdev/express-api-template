const PRODUCTION = {
    APP: {
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 1337,
        PREFIX: '/v1'
    },
    SOCKET: {
        ADAPTER: 'NONE'
    },
    DATABASE: {
        MONGO_DB: {
            DB_1: 'mongodb://localhost:27017/database_1',
            DB_2: 'mongodb://localhost:27017/database_2'
        },
        REDIS: {
            DB_1: 'redis://localhost:6379/0',
            DB_2: 'redis://localhost:6379/1'
        },
        ELASTIC_SEARCH: {
            DB_1: 'http://localhost:9200/',
            DB_2: 'http://localhost:9300/',
        }
    },
    LOG: {
        LEVEL: 'none'
    },
    JWT: {
        SECRET: '123456',
        DEFAULT_EXPIRE: 24 * 60 * 60 * 1 // 1 day
    },
    AES256: {
        SECRET: '123456'
    }
}
const DEVELOPMENT = {
    APP: {
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 1337,
        PREFIX: '/v1'
    },
    SOCKET: {
        ADAPTER: 'NONE'
    },
    DATABASE: {
        MONGO_DB: {
            DB_1: 'mongodb://localhost:27017/database_1',
            DB_2: 'mongodb://localhost:27017/database_2'
        },
        REDIS: {
            DB_1: 'redis://localhost:6379/0',
            DB_2: 'redis://localhost:6379/1'
        },
        ELASTIC_SEARCH: {
            DB_1: 'http://localhost:9200/',
            DB_2: 'http://localhost:9300/',
        }
    },
    LOG: {
        LEVEL: 'dev'
    },
    JWT: {
        SECRET: '123456',
        DEFAULT_EXPIRE: 24 * 60 * 60 * 1 // 1 day
    },
    AES256: {
        SECRET: '123456'
    }
}

const CURRENT_ENV = (process.env.NODE_ENV === 'production')
module.exports = self => self.constant = CURRENT_ENV ? PRODUCTION : DEVELOPMENT