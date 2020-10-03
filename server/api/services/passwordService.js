const bcryptjs = require('bcryptjs')

module.exports = {
    hash: (password, round = 6) => {
        let salt = bcryptjs.genSaltSync(round)
        return bcryptjs.hashSync(password, salt)
    },
    verify: (password, hash) => bcryptjs.compareSync(password, hash)
}