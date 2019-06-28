const changeEnough = (quantity, target)=>{
    let scent = [25, 10, 5, 1], length = quantity.length, total = 0
    for(let i=0; i<length; i++){
        total+=quantity[i]*scent[i]
    }
    return total/100>=target
}

module.exports = changeEnough