/*******************************************************************************
 * 
 ** Create Default Data

 ******************************************************************************/

///////////
// CURRENCY
///////////
// [
//     {
//         name: 'Việt Nam đồng',
//         code: 'VND',
//         country: 'Việt Nam'
//     },
//     {
//         name: 'United States dollar',
//         code: 'USD',
//         country: 'United States'
//     },
// ].map(n => {
//     Currency
//         .findOneAndUpdate(
//             {
//                 code: n.code
//             },
//             n,
//             {
//                 new: true,
//                 useFindAndModify: false,
//                 upsert: true,
//                 setDefaultOnInsert: true
//             },
//             (e, r) => log.info(`[Mongodb][Default] Currency: ${r}`)
//         )
// })
// CURRENCY
///////////