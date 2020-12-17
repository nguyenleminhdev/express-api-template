/*******************************************************************************
 * 
 * * Demo schema
 * 
 ******************************************************************************/


let Demo2Schema = new mongoose.Schema(
    {
        fb_page_id: {
            type: String,
            required: true
        },
        fb_staff_id: {
            type: String,
            required: true
        },
        group_staff: {
            type: ObjectId
        },
    },
    {
        timestamps: false
    }
)

let DemoSchema = new mongoose.Schema(
    {
        fb_page_id: {
            type: String,
            required: true
        },
        fb_staff_id: {
            type: Demo2Schema,
        },
        group_staff: {
            type: [ObjectId]
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