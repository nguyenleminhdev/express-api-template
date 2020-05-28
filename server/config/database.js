module.exports = self => {
    //////////
    // MONGODB
    //////////
    self.connectMongo = next => {
        const URI = (process.env.NODE_ENV === 'production') ? self.constant.DATABASE.PRODUCTION.MONGO_DB : self.constant.DATABASE.DEVELOPMENT.MONGO_DB
        self.mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        self.mongoose.connection.on('error', e => {
            console.log(`MongoDB connection error : ${JSON.stringify(e, null, 4)}`.red)
        })
        self.mongoose.connection.on('connected', () => {
            console.log(`MongoDB connected on: ${URI}`.blue)
            next()
        })
    }
    // MONGODB
    //////////

    
    ////////
    // REDIS
    ////////
    self.connectRedis = next => {
        const ADDRESS = (process.env.NODE_ENV === 'production') ? self.constant.DATABASE.PRODUCTION.REDIS : self.constant.DATABASE.DEVELOPMENT.REDIS
        self.redis_client = self.redis.createClient(ADDRESS)
        self.redis_client.on('error', e => {
            console.log(`Redis connect error: ${JSON.stringify(e, null, 4)}`.red)
        })
        self.redis_client.on('ready', () => {
            console.log(`Redis connected on: ${ADDRESS}`.blue)
            next()
        })
    }
    // REDIS
    ////////
}