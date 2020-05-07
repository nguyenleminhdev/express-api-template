module.exports = self => {
    self.constant = {
        FACEBOOK: {
            SECRET: '123456',
            PAGE_SECRET: 'EAAQAKQmSbv4BAHjBOpjPfbkCVhBZCINyZA3OjNtf9uuoqUtUCfeVXK7o9ZAQmLYgRtyytxV9OfOGypzoZBQzfhhyxxFcmxK60ryNA3WhHyhEwH16hfdwysEY3XF5VLjoNZBhZAytaFtnevkOor0AuX1PQcHWUF6Fd4p6KHLMNCUQZDZD',
        },
        DATABASE: {
            PRODUCTION: {
                URI: 'mongodb://localhost:27017/database'
            },
            DEVELOPMENT: {
                URI: 'mongodb://localhost:27017/database'
            }
        },
        APP: {
            PORT: process.env.PORT || 1337
        }
    }
}