/*******************************************************************************
 * * Staging environment settings
 *
 * What you see below is a quick outline of the built-in settings you need to
 * configure your app for staging.  The configuration in this file is only
 * used in your staging environment, i.e. when you start your app using:
 *
 * ```
 * NODE_ENV=staging node app
 * ```
 *
 * > If you're using git as a version control solution for your app,
 * > this file WILL BE COMMITTED to your repository by default, unless you add
 * > it to your .gitignore file.  If your repository will be publicly viewable,
 * > don't add private/sensitive data (like API secrets / db passwords) to this 
 * > file!
 *
 ******************************************************************************/

global.Constant = {
    /***************************************************************************
     * 
     * * Set the development log level.
     * 
     * error
     * warn
     * info
     * http
     * verbose
     * debug
     * silly
     *
     **************************************************************************/
    LOG: {
        LEVEL: 'debug',
        ES_TRANSPORT: {
            LEVEL: 'info',
            INDEX: 'log-server',
            NODE: 'node-1',
            CLIENT: 'http://localhost:9200'
        }
    },

    /***************************************************************************
     * 
     * * Configure your security settings for staging.
     * 
     **************************************************************************/
    CORS: {
        origin: [
            /\.google\.com$/,
            /\.sapo\.vn$/,
        ],
        methods: [
            'OPTIONS'
        ],
        allowedHeaders: [
            'Authorization',
            'Content-Type'
        ]
    },

    /***************************************************************************
     * 
     * * Config server static folder.
     * 
     **************************************************************************/
    STATIC: {
        PATH: '/public'
    },

    /***************************************************************************
     * * Config app
     * 
     * Start the server on port, host.
     * Config type of socket is use.
     * 
     **************************************************************************/
    APP: {
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 1337,
        SOCKET: 'socket.io' // none | web-socket | socket.io
    },

    /***************************************************************************
     * 
     * * Prefix to all api 
     * 
     **************************************************************************/
    ROUTER: {
        PREFIX: '/v1',
    },

    /***************************************************************************
     * * Policies Mappings
     * 
     * Policies are simple functions which run **before** your actions.
     * 
     * Default policy for all controllers and actions, unless overridden.
     * (`true` allows public access)
     **************************************************************************/
    POLICIES: {
        '*': true,
    },

    /***************************************************************************
     * 
     * * Tell your app what database(s) it should use in staging.
     * 
     **************************************************************************/
    DATABASE: {

        /***********************************************************************
        * * Configure your MongoDB staging database.
        *
        * 1. Define database name:
        *    (For example: DB_1, DB_2, ..., DB_n)
        *
        * 2. Write the database connection string
        *    (For example: mongodb://<username>:<password>@<host>:<port>/<db_name>)
        *
         **********************************************************************/
        MONGODB: {
            DB_1: 'mongodb://0.0.0.0:27017/database_1',
            DB_2: 'mongodb://0.0.0.0:27017/database_2',
            DB_3: 'mongodb://0.0.0.0:27017/database_3',
        },

        /***********************************************************************
        * * Configure your Redis staging database.
        *
        * 1. Define database name:
        *    (For example: DB_1, DB_2, ..., DB_n)
        *
        * 2. Write the database connection string
        *    (For example: redis://<username>:<password>@<host>:<port>/<db_number>)
        *
         **********************************************************************/
        REDIS: {
            DB_1: 'redis://0.0.0.0:6379/0',
            DB_2: 'redis://0.0.0.0:6379/1',
            DB_3: 'redis://0.0.0.0:6379/2'
        },

        /***********************************************************************
        * * Configure your Elastic search staging database.
        *
        * 1. Define database name:
        *    (For example: DB_1, DB_2, ..., DB_n)
        *
        * 2. Write the database connection string
        *    (For example: http://<username>:<password>@<host>:<port>)
        *
         **********************************************************************/
        ELASTICSEARCH: {
            DB_1: 'http://0.0.0.0:9200',
            DB_2: 'http://0.0.0.0:9300',
            DB_3: 'http://0.0.0.0:9400'
        },

        JWT: {
            SECRET: '123456',
            TIME: 60 * 60 * 24 * 30 * 12 * 2 // 2 year
        },

        MAIL: {
            google: {
                user: 'solution.inhm@gmail.com',
                pass: '19972011aA@2'
            }
        }
    }
}