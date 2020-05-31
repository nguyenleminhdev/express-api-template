module.exports = self => {
    let TestSchema = new self.MONGO_DB.DB_2.Schema(
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

    self.Test = self.MONGO_DB.DB_2.model('Test', TestSchema)
}