const {PORT, Q_URI, MAIL_PUBLIC, MAIL_SECRET} = process.env
const port = PORT || 80

const database = {
    address : 'http://localhost:81'
}

const mail = {
    publicKey: MAIL_PUBLIC || "blahblah",
    secretKey: MAIL_SECRET || "blahblah"
}

const q = {
    uri: Q_URI ||"amqps://ritgeven:u9dd0zQnk_nn9axaNTh6qxvosRKUIBI9@baboon.rmq.cloudamqp.com/ritgeven"
    
}

module.exports = {port, database, q, mail}