module.exports = (theme) => {
    let copy = {}
    Object.keys(theme).forEach(key=>{
        copy[key] = '-' + theme[key]
    })
    return copy
}