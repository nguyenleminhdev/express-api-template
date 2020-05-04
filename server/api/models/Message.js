module.exports = self => {
    let PayloadSchema = new self.mongoose.Schema({
        url: {
            type: String
        },
        title: {
            type: String
        },
    })

    let AttachmentSchema = new self.mongoose.Schema({
        type: {
            type: String
        },
        payload: {
            type: PayloadSchema
        }
    })

    let ReferralSchema = new self.mongoose.Schema({
        ref: {
            type: String
        },
        ad_id: {
            type: String
        },
        source: {
            type: String
        },
        type: {
            type: String
        },
        referer_uri: {
            type: String
        },
    })

    let MessageSchema = new self.mongoose.Schema(
        {
            conversation_id: {
                type: self.mongoose.Schema.Types.ObjectId,
                required: true
            },
            page_id: {
                type: String,
                required: true
            },
            sender_id: {
                type: String,
                required: true
            },
            recipient_id: {
                type: String,
                required: true
            },
            time: {
                type: Date,
                required: true
            },
            message_mid: {
                type: String
            },
            message_text: {
                type: String,
            },
            message_attachments: {
                type: [AttachmentSchema]
            },
            postback_title: {
                type: String,
            },
            postback_payload: {
                type: String,
            },
            postback_referral: {
                type: ReferralSchema
            }
        },
        {
            timestamps: true
        }
    )

    self.Message = self.mongoose.model('Message', MessageSchema)
}