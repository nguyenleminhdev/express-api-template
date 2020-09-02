/*******************************************************************************
 * * Custom response err
 ******************************************************************************/

module.exports = function (message, code = 403) {
    return this
        .status(code)
        .json({ code, message })
}