// const nodemailer = require('nodemailer')

// module.exports = {
//     google: (to, subject, html, proceed) => {
//         nodemailer
//             .createTransport({
//                 service: 'gmail',
//                 auth: {
//                     user: Constant.MAIL.google.user,
//                     pass: Constant.MAIL.google.pass
//                 }
//             })
//             .sendMail(
//                 {
//                     from: Constant.MAIL.google.user,
//                     to,
//                     subject,
//                     html,
//                 },
//                 (e, r) => (e) ? proceed(e) : proceed(null, r)
//             )
//     }
// }