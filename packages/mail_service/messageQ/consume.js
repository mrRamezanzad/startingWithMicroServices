const amqp = require('amqplib/callback_api')

const {q: {uri}} = require('../config')

const q = 'mail_service'
let channel = null 

amqp.connect(uri, (err, conn) => {
    if (err) console.log(err)

    conn.createChannel((err, ch) => {
        if (err) console.log(err);
        
        ch.assertQueue(q, {durable: true})
        channel = ch

    })
})

exports.getFromMessageQ = () => {
    if (channel === null) return setTimeout(()=> this.getFromMessageQ(), 1000)

    channel.consume(q, msg => {console.log(msg.content.toString())}, {noAck: true}) 
}