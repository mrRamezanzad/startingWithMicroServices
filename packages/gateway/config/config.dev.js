const {PORT, Q_URI} = process.env

const port = PORT || 80

const database = {
    address : 'http://localhost:81'
}

const q = {
    uri: Q_URI || "blahbla" 
}

module.exports = {port, database, q}