const {Schema, model} = require('mongoose')

const mailSchema = Schema({
    subject: {
        type: String
    },
    content: {
        type: String
    }, 
    receiver: {
        type: String
    }
})

module.exports = new model('Mail', mailSchema)