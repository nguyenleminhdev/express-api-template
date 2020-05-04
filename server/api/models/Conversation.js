module.exports = self => {
    let ConversationSchema = new self.mongoose.Schema(
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

    self.Conversation = self.mongoose.model('Conversation', ConversationSchema)
}