module.exports = self => {
    self.connectDB = next => {
        const URI = (process.env.NODE_ENV === 'production') ? self.constant.DATABASE.PRODUCTION.URI : self.constant.DATABASE.DEVELOPMENT.URI
        self.mongoose.connect(URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
        })
        self.mongoose.connection.on('connected', () => {
            console.log(`MongoDB connected on: ${URI}`.blue)
            next()
        })
        self.mongoose.connection.on('error', e => {
            console.log(`MongoDB connection error : ${JSON.stringify(e, null, 4)}`.red)
        })
    }
}