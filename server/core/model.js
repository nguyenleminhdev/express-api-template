/*******************************************************************************
 * 
 * * Config model
 * 
 ******************************************************************************/

module.exports = proceed => {
    //////////
    // MONGODB
    //////////
    glob
        .sync(['api/models/mongo/**'])
        .filter(n => n.includes('.js'))
        .forEach(n => require(path.resolve(n)))
    // MONGODB
    //////////

    console.log('=> Init database model successfully')

    proceed()
}