/*******************************************************************************
 * * Gererate file script
 ******************************************************************************/

const fs = require('fs')
const path = require('path')
const ARGV = process.argv

if (ARGV.length < 4) return console.log('Missing arguments')

let TYPE = ARGV[2]
let NAME = ARGV[3]

const CAPITALIZE = string => {
    if (typeof string !== 'string') return ''
    return string.charAt(0).toUpperCase() + string.slice(1)
}

if (TYPE === 'controller') {
    fs.writeFileSync(path.resolve(`api/controllers/${NAME}Controller.js`), `
/*******************************************************************************
 * *
 ******************************************************************************/

module.exports = {

}
    `)
    console.log(`Create controller ${NAME}Controller.js successfully`)
}

if (TYPE === 'model') {
    NAME = CAPITALIZE(NAME)
    fs.writeFileSync(path.resolve(`api/models/${NAME}.js`), `
/*******************************************************************************
 * * 
 ******************************************************************************/

let ${NAME}Schema = new MONGODB.DB_1.Schema(
    {

    },
    {
        timestamps: true
    }
)

global.${NAME} = MONGODB.DB_1.model('${NAME}', ${NAME}Schema)
    `)
    console.log(`Create model ${NAME}.js successfully`)
}

if (TYPE === 'policy') {
    fs.writeFileSync(path.resolve(`api/policies/${NAME}.js`), `
/*******************************************************************************
 * * 
 ******************************************************************************/

module.exports = (req, res, proceed) => {
    console.log('${NAME}')
    proceed()
}
    `)
    console.log(`Create policy ${NAME}.js successfully`)
}

if (TYPE === 'service') {
    fs.writeFileSync(path.resolve(`api/services/${NAME}.js`), `
/*******************************************************************************
 * * 
 ******************************************************************************/

module.exports = {

}
        `)
    console.log(`Create policy ${NAME}.js successfully`)
}

if (TYPE === 'env') {
    fs.writeFileSync(path.resolve(`configs/env/${NAME}.js`), `
/*******************************************************************************
 * * 
 ******************************************************************************/

global.Constant = {
    /***************************************************************************
     * * Config http logging
     **************************************************************************/
    LOG: {
        LEVEL: 'dev'
    },

    /***************************************************************************
     * * Config cors
     **************************************************************************/
    CORS: {

    },

    /***************************************************************************
     * * Config public path
     **************************************************************************/
    STATIC: {
        PATH: '/public'
    },

    /***************************************************************************
     * * Config app
     **************************************************************************/
    APP: {
        HOST: '0.0.0.0',
        PORT: 1337,
        SOCKET: 'none'
        // SOCKET: 'web-socket'
        // SOCKET: 'socket.io'
    },

    /***************************************************************************
     * * Config router
     **************************************************************************/
    ROUTER: {
        PREFIX: '/v1',
    },

    /***************************************************************************
     * * Policies config
     **************************************************************************/
    POLICIES: {
        // '*': true,
        // 'app': ['policy3', 'policy2', 'policy1'],
        // 'public': {
        //     '*': true,
        //     'ping': ['policy1', 'policy2'],
        //     'test': 'policy3'
        // },
    },

    /***************************************************************************
     * * Database connection string
     **************************************************************************/
    DATABASE: {
        MONGODB: {
            DB_1: 'mongodb://0.0.0.0:27017/database_1',
            DB_2: 'mongodb://0.0.0.0:27017/database_2',
            DB_3: 'mongodb://0.0.0.0:27017/database_3',
        },
        REDIS: {
            DB_1: 'redis://0.0.0.0:6379/0',
            DB_2: 'redis://0.0.0.0:6379/1',
            DB_3: 'redis://0.0.0.0:6379/2'
        },
        ELASTICSEARCH: {
            DB_1: 'http://0.0.0.0:9200',
            DB_2: 'http://0.0.0.0:9300',
            DB_3: 'http://0.0.0.0:9400'
        }
    }
}
    `)
    console.log(`Create env ${NAME}.js successfully`)
}