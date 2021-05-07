const {PORT, DB_HOST,DB_PORT } = process.env

const port = PORT || 80

const database = {
    host: DB_HOST || 'localhost',
    port: DB_PORT || 27017
}

module.exports = {port, database}