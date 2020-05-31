module.exports = self => {
    self.connect_mongo_db = next => {
        self.MONGO_DB = {}
        self.async.eachOf(self.constant.DATABASE.MONGO_DB, (v, k, cb) => {
            self.MONGO_DB[k] = new self.mongoose.Mongoose()
            self.MONGO_DB[k].connect(v, {
                useNewUrlParser: true,
                useUnifiedTopology: true,
                useCreateIndex: true,
            })
            self.MONGO_DB[k].connection.on('error', e => cb(e))
            self.MONGO_DB[k].connection.on('connected', () => cb())
        }, e => {
            if (e) return next(e)
            console.log(`MONGO_DB connected: ${JSON.stringify(self.constant.DATABASE.MONGO_DB, null, 4)}`.blue)
            next()
        })
    }
    self.connect_redis = next => {
        self.REDIS = {}
        self.async.eachOf(self.constant.DATABASE.REDIS, (v, k, cb) => {
            self.REDIS[k] = self.redis.createClient(v)
            self.REDIS[k].on('error', e => cb(e))
            self.REDIS[k].on('ready', () => cb())
        }, e => {
            if (e) return next(e)
            console.log(`REDIS connected: ${JSON.stringify(self.constant.DATABASE.REDIS, null, 4)}`.blue)
            next()
        })
    }
    self.connect_elastic_search = next => {
        self.ELASTIC_SEARCH = {}
        self.async.eachOf(self.constant.DATABASE.ELASTIC_SEARCH, (v, k, cb) => {
            self.ELASTIC_SEARCH[k] = self.elasticsearch.Client({ hosts: v })
            cb()
        }, e => {
            if (e) return next(e)
            console.log(`ELASTIC_SEARCH connected: ${JSON.stringify(self.constant.DATABASE.ELASTIC_SEARCH, null, 4)}`.blue)
            next()
        })
    }
}