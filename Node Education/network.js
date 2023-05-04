function networkFlat(obj,clone = {}){
    for (let key in obj){
        if (typeof key === 'object'){
           Object.assign(clone,networkFlat(key))
        } else {
            clone[key] = obj[key]
        }
    }
    return clone
}

module.exports = {
    networkFlat : networkFlat
}