const jsonwebtoken = require('jsonwebtoken')

module.exports = {
    generate: (
        payload,
        expiresIn = Constant.JWT.TIME,
        secret = Constant.JWT.SECRET
    ) => jsonwebtoken.sign(payload, secret, { expiresIn }),

    verify: (token, secret = Constant.JWT.SECRET, next) => {
        if (typeof secret === 'function')
            jsonwebtoken.verify(
                token,
                Constant.JWT.SECRET,
                (e, r) => (e) ? secret(e) : secret(null, r)
            )
        else
            jsonwebtoken.verify(
                token,
                secret,
                (e, r) => (e) ? next(e) : next(null, r)
            )
    },
}