/*******************************************************************************
 * * Check token
 ******************************************************************************/

module.exports = (req, res, proceed) => {
    console.log('check token')
    proceed()
}