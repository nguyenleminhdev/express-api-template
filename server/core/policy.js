/*******************************************************************************
 * 
 * * Policies config
 * 
 ******************************************************************************/


const POLICY_ROUTER = (policy, father_path, setting, proceed) => {
    try {
        let router_middleware = setting.map(n => require(`../api/policies/${n}`))

        if (policy === '*')
            Router.use(`/${father_path}`, ...router_middleware)
        else
            Router.use(`/${path.join(father_path, policy)}`, ...router_middleware)

        proceed()
    } catch (e) {
        proceed(e.message)
    }
}
const EXEC_POLICY = (policies, father_path = '', proceed) => {
    async.eachOfLimit(policies, 1, (setting, policy, cb) => {

        if (typeof setting === 'string') {
            POLICY_ROUTER(policy, father_path, [setting], cb)
            return
        }

        if (typeof setting === 'object' && Array.isArray(setting)) {
            POLICY_ROUTER(policy, father_path, setting, cb)
            return
        }

        if (typeof setting === 'object' && !Array.isArray(setting)) {
            EXEC_POLICY(setting, policy, cb)
            return
        }

        cb()
    }, e => (e) ? proceed(e) : proceed())
}


module.exports = proceed => {
    console.log('=> Init router policy successfully')
    EXEC_POLICY(Constant.POLICIES, '', proceed)
}