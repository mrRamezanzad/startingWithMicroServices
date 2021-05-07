const {PORT} = process.env

const port = PORT || 80

const database = {
    address : 'http://localhost:81'
}

const q = {
    host: "amqps://ritgeven:u9dd0zQnk_nn9axaNTh6qxvosRKUIBI9@baboon.rmq.cloudamqp.com/ritgeven"
}

module.exports = {port, database, q}