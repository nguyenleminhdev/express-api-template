/*******************************************************************************
 * * Demo schema
 ******************************************************************************/

let DemoSchema = new MONGODB.DB_1.Schema(
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

// DemoSchema.index({ fb_page_id: 1 }, { unique: 1 })
// DemoSchema.index({ fb_page_id: 1, fb_client_id: 1 }, { unique: 1 })
// DemoSchema.index({ fb_client_id: 1 }, { expireAfterSeconds: 0 })

global.Demo = MONGODB.DB_1.model('Demo', DemoSchema)