/*******************************************************************************
 * * /admin/
 ******************************************************************************/

module.exports = {
    'ping': (req, res) => {
        let p = req.allParams()
        res.ok(p)
    },
}