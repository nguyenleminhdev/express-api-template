// const multer = require('multer')

// module.exports = {
//     upload: (req, location, limit, iteratee, proceed) => {
//         multer({
//             storage: multer.diskStorage({
//                 destination: (req, file, next) => next(null, location),
//                 filename: iteratee
//             }),
//             limits: { fileSize: limit * 1000000 }
//         }).single('file')(req, null, e => (e) ? proceed(e) : proceed(null, req))
//     }
// }