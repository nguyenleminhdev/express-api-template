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

global.Demo = MONGODB.DB_1.model('Demo', DemoSchema)