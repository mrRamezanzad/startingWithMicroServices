const express = require('express')
const app = express()
const mongoose = require('mongoose')
const {port, database: db} = require('./config')

const Mail = require('./models/mail')

app.use(express.json())
app.use(express.urlencoded({extended: true}))

mongoose.connect(`mongodb://${db.host}:${db.port}/startingWithMicroservice`,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }, () => {
        console.log(`[+] connected to database successfully`)
    }
)



app
    .get('/', async (req, res) => {
        const mails = await Mail.find({})
        res.send(mails)
    })

    .post('/', ({body: inputMail}, res) => {
        const newMail = new Mail(inputMail).save((err, doc) => {
            res.send(doc)
        })
    })

    
app.listen(port, ()=>{console.log(`[+] server is running at http://localhost:${port}`);})