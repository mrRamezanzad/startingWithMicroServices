const amqp = require('amqplib/callback_api')
const { chainResolvers } = require('apollo-server-express')
const {q: {host}} = require('../config')

let q = 'mail_service'
let channel = null

amqp.connect(host, (err, conn) => {
    if (err) console.log(err)
    
    conn.createChannel((err, ch) => {
        if (err) console.log(err);
        ch.assertQueue(q, {durable: true})
        channel = ch
    })
})

exports.pushToMessageQ = msg => {

    if (channel === null) {
        setTimeout(pushToMessageQ(msg), 1000)
    }
    console.log('i got here: ', msg);
    channel.sendToQueue(q, Buffer.from(JSON.stringify(msg)))

}