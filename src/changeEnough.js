const changeEnough = (quantity, target)=>{
    let scents = [25, 10, 5, 1], length = quantity.length, total = 0
    for(let i=0; i<length; i++){
        total+=quantity[i]*scents[i]
    }
    return total/100>=target
}

module.exports = changeEnough