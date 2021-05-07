const {NODE_ENV} = process.env

const config = NODE_ENV === "production"? require('./config.prod') : require('./config.dev')

module.exports = config