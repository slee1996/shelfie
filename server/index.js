const express = require('express')
const massive = require('massive')
const cors = require('cors')
const app = express()
const uc = require('./controller')

require('dotenv').config();

app.use(express.json())
app.use(cors())

const { SERVER_PORT, CONNECTION_STRING } = process.env;
app.listen(SERVER_PORT, () => console.log(`server blazin on ${SERVER_PORT}`))

massive(CONNECTION_STRING).then(db =>{
    app.set('db', db)
    console.log('DB Connected')
})

//Endpoints
const baseUrl = '/api/inventory/'
app.get(baseUrl, uc.getInventory)
app.post(baseUrl, uc.post)
app.delete(`${baseUrl}:id`, uc.delete)