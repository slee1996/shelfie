const express = require('express')
const massive = require('massive')
const cors = require('cors')
const app = express()
const uc = require('./controller')

require('dotenv').config();

app.use(express.json())
app.use(cors())

const PORT = 4000
app.listen(PORT, () => console.log(`server blazin on ${PORT}`))

const { SERVER_PORT, CONNECTION_STRING } = process.env;

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    console.log('DB Connected')
})