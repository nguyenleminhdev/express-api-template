module.exports = {
    db: 'DB_1',
    attributes: {
        name: {
            type: 'text',
        },

        address: {
            type: 'text',
            index: 'false'
        },

        snap_label: {
            properties: {
                name: {
                    type: 'text',
                },
                position: {
                    type: 'integer',
                }
            }
        },
        snap_staff: {
            type: 'object'
        }
    }
}