const {gql} = require('apollo-server-express')
const axios = require('axios')

const {database} = require('../config')

exports.typeDefs = gql`
    type Query {
        mails: [Mail]
    }

    type Mutation {
        mail(subject: String!, content: String!, receiver: String!): Mail
    }
    
    type Mail {
        _id: String
        subject: String!
        content: String!
        receiver: String!
    }
`

const get = async (host) => {
    const {data} = await axios.get(`${database.address}${host}`)
    return data
}

const post = async (host, inputEmail) => {
    const {data} = await axios.post(`${database.address}${host}`, inputEmail)
    return data
}
exports.resolvers = {
    Query: {
        mails: async () =>{
            return get('/')
        } 
    },
    Mutation: {
        mail: (_,args) => {
            return post('/', args)
        }
    }
}

