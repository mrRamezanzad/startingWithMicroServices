const app = require('express')()

const {port} = require('./config')

const {ApolloServer} = require('apollo-server-express')
const {typeDefs, resolvers} = require('./data')

app.get('/', (req, res) => {
    res.send('This is my first micro service project')
})



const server = new ApolloServer({typeDefs, resolvers})

server.applyMiddleware({app})

app.listen(port, ()=>{console.log(`[+] server is running at http://localhost:${port}`);})