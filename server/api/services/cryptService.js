module.exports = self => {
    self.cryptService = {
        JWT: {
            GENERATE: (
                payload,
                expiresIn = self.constant.JWT.DEFAULT_EXPIRE,
                secret = self.constant.JWT.SECRET
            ) => self.jsonwebtoken
                .sign(
                    payload,
                    secret,
                    { expiresIn }
                ),
            VERIFY: (
                token,
                secret = self.constant.JWT.SECRET,
                next
            ) => {
                if (typeof secret === 'function')
                    self.jsonwebtoken.verify(
                        token,
                        self.constant.JWT.SECRET,
                        (e, r) => (e) ? secret(e) : secret(null, r)
                    )
                else
                    self.jsonwebtoken.verify(
                        token,
                        secret,
                        (e, r) => (e) ? next(e) : next(null, r)
                    )
            },
            GET_PAYLOAD: (
                token,
                next
            ) => {
                try { next(null, self.jwt_decode(token)) }
                catch (e) { next(e) }
            },
        },
        UUID: {
            GENERATE: () => self.uuid.v4().replace(/-/g, '')
        },
        PASSWORD: {
            HASH: (
                password,
                round = 6
            ) => self.bcryptjs
                .hashSync(
                    password,
                    self.bcryptjs
                        .genSaltSync(round)
                ),
            VERIFY: (
                password,
                hash
            ) => self.bcryptjs.compareSync(password, hash)
        },
        AES256: {
            ENCRYPT: (
                payload,
                secret = self.constant.AES256.SECRET
            ) => self.aes256.encrypt(
                secret,
                JSON.stringify(payload)
            ),
            DECRYPT: (
                hash,
                secret = self.constant.AES256.SECRET,
                next
            ) => {
                if (typeof secret === 'function')
                    try {
                        let result = self.aes256
                            .decrypt(self.constant.AES256.SECRET, hash)
                        result = JSON.parse(result)
                        secret(null, result)
                    } catch (e) {
                        secret(e)
                    }
                else
                    try {
                        let result = self.aes256
                            .decrypt(secret, hash)
                        result = JSON.parse(result)
                        next(null, result)
                    } catch (e) {
                        next(e)
                    }
            }
        }
    }
}