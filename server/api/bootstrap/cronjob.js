// /*******************************************************************************
//  * 
//  * * Cronjob schedule
//  * 
//  ******************************************************************************/


// const { isMaster } = require('cluster')
// const cronjob = require('cron').CronJob


// if (!isMaster && process.env.NODE_APP_INSTANCE !== '0') return

// new cronjob('* * * * *', () => {
//     // * code here
// }, null, true, 'Asia/Ho_Chi_Minh')