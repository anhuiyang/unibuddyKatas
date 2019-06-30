
const messagesSort = (msgMetas)=>{
    msgMetas.sort()
    msgMetas.sort((a, b)=>{
        return b.toString().length-a.toString().length
    })
    return msgMetas
}
module.exports = messagesSort


