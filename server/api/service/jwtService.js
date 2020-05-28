module.exports = self => {
    const JWT_CONFIG = (process.env.NODE_ENV === 'production') ? self.constant.JWT.PRODUCTION : self.constant.JWT.DEVELOPMENT


    self.jwtService = {
        genToken: (payload, expiresIn = JWT_CONFIG.DEFAULT_EXPIRE) => {
            return self.jwt.sign(payload, JWT_CONFIG.SECRET, { expiresIn })
        },
        verifyToken: (token, next) => {
            self.jwt.verify(
                token,
                JWT_CONFIG.SECRET,
                (e, r) => (e) ? next(e) : next(null, r)
            )
        },
        getTokenPayload: (token, next) => {
            try {
                let payload = self.jwt_decode(token)
                next(null, payload)
            } catch (e) {
                next(e)
            }
        },
    }
}