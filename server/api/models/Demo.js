module.exports = self => {
    let DemoSchema = new self.MONGO_DB.DB_1.Schema(
        {
            page_id: {
                type: String,
                required: true
            },
            client_id: {
                type: String,
                required: true
            },
        },
        {
            timestamps: true
        }
    )

    self.Demo = self.MONGO_DB.DB_1.model('Demo', DemoSchema)
}