/*******************************************************************************
 * 
 * * Config model
 * 
 ******************************************************************************/


module.exports = proceed => {
    glob
        .sync(['api/models/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => require(path.resolve(n)))

    console.log('=> Init database model successfully')
    proceed()
}