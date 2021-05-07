const {PORT} = process.env
const port = PORT || 80

const database = {
    address : 'http://localhost:81'
}

module.exports = {port, database}