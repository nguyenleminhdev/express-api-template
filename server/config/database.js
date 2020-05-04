module.exports = self => {
    self.connectDB = next => {
        self.mongoose.connect(self.constant.DATABASE.URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        self.mongoose.connection.on('connected', () => {
            console.log(`MongoDB connected on: ${self.constant.DATABASE.URI}`.blue)
            next()
        })
        self.mongoose.connection.on('error', e => {
            console.log(`MongoDB connection error : ${JSON.stringify(e, null, 4)}`.red)
        })
    }
}