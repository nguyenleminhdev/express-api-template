/*******************************************************************************
 * * Development environment settings
 *
 * What you see below is a quick outline of the built-in settings you need to
 * configure your app for development.  The configuration in this file is only
 * used in your development environment, i.e. when you start your app using:
 *
 * ```
 * NODE_ENV=development node app
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
     * * Config app
     * 
     * Start the server on port, host.
     * Config type of socket is use.
     * 
     **************************************************************************/
    APP: {
        HOST: process.env.HOST || '0.0.0.0',
        PORT: process.env.PORT || 1337,
        SOCKET: 'none' // none | web-socket | socket.io
    },

    /***************************************************************************
     * * Policies Mappings
     * 
     * Policies are simple functions which run **before** your actions.
     * 
     * Default policy for all controllers and actions, unless overridden.
     * (`true` allows public access)
     * 
     **************************************************************************/
    POLICIES: {
        '*': true,
        public: true,
        app: 'checkToken',
        admin: ['checkAdmin']
    },

    /***************************************************************************
     * 
     * * Tell your app what database(s) it should use in development.
     * 
     **************************************************************************/
    DATABASE: {

        /***********************************************************************
        * * Configure your MongoDB development database.
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
            // DB_2: 'mongodb://0.0.0.0:27017/database_2',
        },

        /***********************************************************************
        * * Configure your Redis development database.
        *
        * 1. Define database name:
        *    (For example: DB_1, DB_2, ..., DB_n)
        *
        * 2. Write the database connection string
        *    (For example: redis://<username>:<password>@<host>:<port>/<db_number>)
        *
         **********************************************************************/
        REDIS: {
            // DB_1: 'redis://0.0.0.0:6379/0',
            // DB_2: 'redis://0.0.0.0:6379/1',
        },

        /***********************************************************************
        * * Configure your Elastic search development database.
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
        },
    },

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
        LEVEL: 'silly',
        // ES_TRANSPORT: {
        //     LEVEL: 'info',
        //     INDEX: 'log-server',
        //     NODE: 'node-1',
        //     CLIENT: 'http://localhost:9200'
        // }
    },

    /***************************************************************************
     * 
     * * Configure your security settings for development.
     * 
     **************************************************************************/
    CORS: {
        // origin: [
        //     /\.google\.com$/,
        //     /\.sapo\.vn$/,
        // ],
        // methods: [
        //     'OPTIONS'
        // ],
        // allowedHeaders: [
        //     'Authorization',
        //     'Content-Type'
        // ]
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
     * 
     * * Prefix to all api 
     * 
     **************************************************************************/
    ROUTER: {
        PREFIX: '/v1',
    },

    // JWT: {
    //     SECRET: '123456',
    //     TIME: 60 * 60 * 24 * 30 * 12 * 2 // 2 year
    // },

    // MAIL: {
    //     google: {
    //         user: 'demo@gmail.com',
    //         pass: 'demo'
    //     }
    // }
}