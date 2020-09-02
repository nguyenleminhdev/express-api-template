/*******************************************************************************
 * 
 * * Policies config
 * 
 ******************************************************************************/

const POLICY_ROUTER = (policy, father_path, setting) => {
    let router_middleware = setting.map(n => require(`../api/policies/${n}`))

    if (policy === '*') 
        Router.use(`/${father_path}`, ...router_middleware)
    else 
        Router.use(`/${path.join(father_path, policy)}`, ...router_middleware)
}
const EXEC_POLICY = (policies, father_path = '') => {
    for (let policy in policies) {
        let setting = policies[policy]

        if (typeof setting === 'string') {
            setting = [setting]
            POLICY_ROUTER(policy, father_path, setting)

            continue
        }

        if (
            typeof setting === 'object' &&
            Array.isArray(setting)
        ) {
            POLICY_ROUTER(policy, father_path, setting)

            continue
        }

        if (
            typeof setting === 'object' &&
            !Array.isArray(setting)
        ) {
            EXEC_POLICY(setting, policy)

            continue
        }
    }
}

EXEC_POLICY(Constant.POLICIES)